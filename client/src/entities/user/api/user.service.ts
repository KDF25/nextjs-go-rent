import { baseApi } from "@shared/api";
import {
  AuthUser,
  fetchAuthSession,
  getCurrentUser,
  JWT,
} from "aws-amplify/auth";
import { Manager, ROLES, Tenant, User } from "../types";

export const createNewUserInDatabase = async (
  user: AuthUser,
  idToken: JWT | undefined,
  userRole: ROLES,
  fetchWithBQ: any,
) => {
  const createEndpoint = userRole === ROLES.MANAGER ? "/managers" : "/tenants";

  const createUserResponse = await fetchWithBQ({
    url: createEndpoint,
    method: "POST",
    body: {
      cognitoId: user.userId,
      name: user.username,
      email: idToken?.payload?.email || "",
      phoneNumber: "",
    },
  });

  if (createUserResponse.error) {
    throw new Error("Failed to create user record");
  }

  return createUserResponse;
};

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAuthUser: build.query<User, void>({
      queryFn: async (_, _queryApi, _extra_options, fetchWithBQ) => {
        try {
          const session = await fetchAuthSession();
          const { idToken } = session.tokens ?? {};
          const user = await getCurrentUser();
          const userRole = idToken?.payload["custom:role"] as ROLES;

          const endpoint =
            userRole === ROLES.MANAGER
              ? `/managers/${user.userId}`
              : `/tenants/${user.userId}`;

          let userDetailsResponse = await fetchWithBQ(endpoint);

          // if user doesn't exist, create new user
          if (
            userDetailsResponse.error &&
            userDetailsResponse.error.status === 404
          ) {
            userDetailsResponse = await createNewUserInDatabase(
              user,
              idToken,
              userRole,
              fetchWithBQ,
            );
          }

          return {
            data: {
              cognitoInfo: { ...user },
              userInfo: userDetailsResponse.data as Tenant | Manager,
              userRole,
            },
          };
        } catch (error: any) {
          return { error: error.message || "Could not fetch user data" };
        }
      },
    }),

    updateTenantSettings: build.mutation<
      Tenant,
      { cognitoId: string } & Partial<Tenant>
    >({
      query: ({ cognitoId, ...updatedTenant }) => ({
        url: `tenants/${cognitoId}`,
        method: "PUT",
        body: updatedTenant,
      }),
    }),
    updateManagerSettings: build.mutation<
      Manager,
      { cognitoId: string } & Partial<Manager>
    >({
      query: ({ cognitoId, ...updatedManager }) => ({
        url: `managers/${cognitoId}`,
        method: "PUT",
        body: updatedManager,
      }),
    }),
  }),
});

export const {
  useGetAuthUserQuery,
  useUpdateTenantSettingsMutation,
  useUpdateManagerSettingsMutation,
} = userApi;
