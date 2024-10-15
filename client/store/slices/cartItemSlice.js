import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cartItemApi = createApi({
  reducerPath: 'cartItemApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/cart-items'}),
  endpoints: builder => ({
    getCartItems: builder.query({
      query: cartId => `/${cartId}`,
      transformResponse: response => response
    }),
    updateCartItem: builder.mutation({
      query: (cartItem) => ({
        url: `/${cartItem.id}`,
        method: "PUT",
        body: cartItem
      }),
    }),
    deleteCartItem: builder.mutation({
      query:  id => ({
        url: `/${id}`,
        method: 'DELETE',
        id: id
      })
    })
  })
})

export const { useGetCartItemsQuery, useUpdateCartItemMutation, useDeleteCartItemMutation } = cartItemApi
