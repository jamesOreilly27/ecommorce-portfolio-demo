import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/categories'}),
  endpoints: builder => ({
    getCategories: buulder.query({
      query: () => '',
      transformResponse: response => response
    })
  })
})

export const { useGetCategoriesQuery } = categoryApi
