import { apiSlice } from "../api/apiSlice";

export const blogApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: (endpoint) => ({
        url: `/${endpoint}`,
      }),
    }),
  }),
});

export const { useGetCategoryQuery } = blogApi;
