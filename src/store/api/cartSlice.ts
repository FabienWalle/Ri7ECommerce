import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getAllCarts: builder.query({
      query: () => 'carts',
    }),
    getCartById: builder.query({
      query: (id) => `carts/${id}`,
    }),
    getCartsByUser: builder.query({
      query: (userId) => `carts/user/${userId}`,
    }),
    addCart: builder.mutation({
      query: (newCart) => ({
        url: 'carts',
        method: 'POST',
        body: newCart,
      }),
    }),
    updateCart: builder.mutation({
      query: ({ id, cart }) => ({
        url: `carts/${id}`,
        method: 'PUT',
        body: cart,
      }),
    }),
    deleteCart: builder.mutation({
      query: (id) => ({
        url: `carts/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { 
  useGetAllCartsQuery, 
  useGetCartByIdQuery, 
  useGetCartsByUserQuery, 
  useAddCartMutation, 
  useUpdateCartMutation, 
  useDeleteCartMutation 
} = cartApi;
