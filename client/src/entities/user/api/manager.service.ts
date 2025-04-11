import { baseApi } from "@shared/api";
import { Manager } from "../types";

export const managerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    updateManagerSettings: build.mutation<
      Manager,
      { cognitoId: string } & Partial<Manager>
    >({
      query: ({ cognitoId, ...updatedManager }) => ({
        url: `managers/${cognitoId}`,
        method: "PUT",
        body: updatedManager,
      }),
      invalidatesTags: (result) => [{ type: "MANAGERS", id: result?.id }],
    }),
  }),
});

export const { useUpdateManagerSettingsMutation } = managerApi;
