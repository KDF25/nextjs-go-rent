import { baseApi } from "@shared/api";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";
import { Manager, ROLES, Tenant, User } from "../types";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAuthUser: build.query<User, void>({
      queryFn: async (_, _queryApi, _extra_options, fetchWithBQ) => {
        try {
          const session = await fetchAuthSession();
          const { idToken } = session.tokens ?? {};
          const user = await getCurrentUser();
          const userRole = idToken?.payload["custom:role"] as string;

          const endpoint =
            userRole === ROLES.MANAGER
              ? `/managers/${user.userId}`
              : `/tenants/${user.userId}`;

          const userDetailsResponse = await fetchWithBQ(endpoint);
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
  }),
});

export const { useGetAuthUserQuery } = userApi;
