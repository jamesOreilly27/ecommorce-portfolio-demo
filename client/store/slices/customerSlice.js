import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const customerApi = createApi({
  reducerPath: 'customerApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/me' }),
  endpoints: builder => ({
    getMe: builder.query({
      query: customerId => `/${customerId}`,
      transformResponse: response => response
    })
  })
})

export const { useGetMeQuery } = customerApi