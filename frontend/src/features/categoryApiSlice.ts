import { apiSlice } from "../api/apiSlice";

interface Endpoints {
  endpoint: string;
}

export const blogApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query<Endpoints, any>({
      query: (endpoint) => ({
        url: `/${endpoint}`,
      }),
    }),
  }),
});

export const { useGetCategoryQuery } = blogApi;
