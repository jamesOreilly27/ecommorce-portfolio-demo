import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cartItemApi = createApi({
  reducerPath: 'cartItemApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/cart-items'}),
  endpoints: builder => ({
    getCartItems: builder.query({
      query: cartId => `/${cartId}`,
      transformResponse: response => response
    }),
    createCartItem: builder.mutation({
      query: cartItem => ({
        url: "/",
        method: "POST",
        body: cartItem
      })
    }),
    updateCartItem: builder.mutation({
      query: cartItem => ({
        url: `/${cartItem.id}`,
        method: "PUT",
        body: cartItem
      })
    }),
    deleteCartItem: builder.mutation({
      query:  id => ({
        url: `/${id}`,
        method: 'DELETE',
        id: id
      })
    }),
    emptyCart: builder.mutation({
      query: cartId => ({
        url: `/cart/${cartId}`,
        method: "DELETE",
        cartId: cartId
      })
    })
  })
})

export const { useGetCartItemsQuery, useUpdateCartItemMutation, useDeleteCartItemMutation, useCreateCartItemMutation, useEmptyCartMutation } = cartItemApi
