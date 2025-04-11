import { baseApi } from "@shared/api";
import { Application } from "../types";

export const appApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createApplication: build.mutation<Application, Partial<Application>>({
      query: (body) => ({
        url: `applications`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Applications"],
    }),
  }),
});

export const { useCreateApplicationMutation } = appApi;
