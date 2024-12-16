import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const addressApi = createApi({
  reducerPath: 'addressApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/me/addresses'}),
  endpoints: builder => ({
    updateCurrentAddress: builder.mutation({
      query: ({ userId, addressId }) => {
        return {
        url: `${userId}/${addressId}`,
        method: "PUT"
      }
    },
      transformResponse: response => response
    })
  })
})

export const { useUpdateCurrentAddressMutation } = addressApi
