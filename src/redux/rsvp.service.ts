import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const rsvpApi = createApi({
  reducerPath: "rsvpApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://us-central1-personal-websites-433803.cloudfunctions.net/viancaandervin-rsvp",
  }),
  keepUnusedDataFor: 86400,
  endpoints: (builder) => ({
    createRsvp: builder.mutation<any, any>({
      query: (payload) => ({
        url: "/",
        method: "POST",
        body: JSON.stringify(payload),
      }),
      extraOptions: { maxRetries: 3 }
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useCreateRsvpMutation } = rsvpApi;
