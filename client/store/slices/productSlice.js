import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: '/api/products'}),
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => '',
      transformResponse: response => response
    }),
    getProductById: builder.query({
      query: productId => `/${productId}`
    })
  })
})

export const {
  useGetProductsQuery,
  useGetProductByIdQuery
} = productApi
