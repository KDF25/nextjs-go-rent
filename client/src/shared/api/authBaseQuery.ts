import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.VITE_BASE_URL;

export const authBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl,
    credentials: "include",
  });

  const result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    console.log("Выполняем логаут", result);
  }

  return result;
};
