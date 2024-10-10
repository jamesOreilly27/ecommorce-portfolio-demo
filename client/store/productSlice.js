import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api/products'}),
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => '',
      transformResponse: response => {
        return response
      }
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
