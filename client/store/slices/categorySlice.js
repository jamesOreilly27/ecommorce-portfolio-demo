import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/categories'}),
  endpoints: builder => ({
    getCategories: builder.query({
      query: () => '',
      transformResponse: response => response
    }),
    getSingleCategory: builder.query({
      query: id => `/${id}`,
    }),
    featuredCategories: builder.query({
      query: () => "/featured",
      transformResponse: response => response
    })
  })
})

export const { useGetCategoriesQuery, useGetSingleCategoryQuery, useFeaturedCategoriesQuery } = categoryApi
