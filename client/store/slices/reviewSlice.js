import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { shuffle } from './helpers'

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
      transformResponse: response => {
        console.log('RESPONSE: ', shuffle(response).slice(0,6))
        return shuffle(response).slice(0, 6)
      }
    })
  })
})

export const { useGetReviewsQuery, useTopReviewsQuery } = reviewApi
