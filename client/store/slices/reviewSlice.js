import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const reviewApi = create({
  reducerPath: 'reviewApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/reviews'}),
  endpoints: builder => ({
    getReviews: builder.query({
      query: () => '',
      transformResponse: response => response
    })
  })
})

export const { useGetRewviewsQuery } = reviewApi
