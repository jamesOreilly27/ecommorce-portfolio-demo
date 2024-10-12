import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/categories'}),
  endpoints: builder => ({
    getCategories: builder.query({
      query: () => '',
      transformResponse: response => response
    }),
    featuredCategories: builder.query({
      query: () => "/featured",
      transformResponse: response => response
    })
  })
})

export const { useGetCategoriesQuery, useFeaturedCategoriesQuery } = categoryApi
