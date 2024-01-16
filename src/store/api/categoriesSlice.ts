import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => 'products/categories',
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;