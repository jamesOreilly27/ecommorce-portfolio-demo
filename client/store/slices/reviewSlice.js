import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const reviewApi = createApi({
  reducerPath: 'reviewApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/reviews'}),
  endpoints: builder => ({
    getReviews: builder.query({
      query: () => '',
      transformResponse: response => response
    })
  })
})

export const { useGetReviewsQuery } = reviewApi
