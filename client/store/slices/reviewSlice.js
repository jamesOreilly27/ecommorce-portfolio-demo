import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getRandomIndices } from './helpers'

export const reviewApi = createApi({
  reducerPath: 'reviewApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/reviews'}),
  endpoints: builder => ({
    getReviews: builder.query({
      query: () => '',
      transformResponse: response => response
    }),
    topReviews: builder.query({
      query: () => '/five-star',
      transformResponse: response => getRandomIndices(response, 6)
    })
  })
})

export const { useGetReviewsQuery, useTopReviewsQuery } = reviewApi
