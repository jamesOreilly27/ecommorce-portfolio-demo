import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/orders'}),
  endpoints: builder => ({
    getOrderItems: builder.query({
      query: orderId => `/${orderId}`,
      transformResponse: response => response
    }),
    createOrder: builder.mutation({
      query: ({order, cartItems}) => ({
          url: '/create-order',
          method: "POST",
          body: { order, cartItems }
      }),
      transformResponse: response => response
    })
  })
})

export const { useGetOrderItemsQuery, useCreateOrderMutation } = orderApi
