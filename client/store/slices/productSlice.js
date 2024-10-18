import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: '/api/products'}),
  endpoints: builder => ({
    getProducts: builder.query({
      query: (categoryIds, isCoffeeFilter) => ({
        url: '',
        params: { categoryIds, isCoffeeFilter }
      }),
      transformResponse: response => response
    }),
    getProductById: builder.query({
      query: productId => `/${productId}`
    }),
    getFeaturedProducts: builder.query({
      query: () => '/featured'
    })
  })
})

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetFeaturedProductsQuery
} = productApi
