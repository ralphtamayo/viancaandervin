import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const configApi = createApi({
  reducerPath: "configApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://us-central1-personal-websites-433803.cloudfunctions.net/viancaandervin",
  }),
  tagTypes: ["Config"],
  keepUnusedDataFor: 86400,
  endpoints: (builder) => ({
    getConfig: builder.query<any, any>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      extraOptions: { maxRetries: 5 },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetConfigQuery, useLazyGetConfigQuery } = configApi;
