import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IUser } from './types'

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://679286cdcf994cc6804a5368.mockapi.io/' }),
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        getUsers: builder.query<IUser[], void>({
            query: () => `users`,
            providesTags: ['Users']
        }),
        deleteUser: builder.mutation<IUser, string>({
            query: (id) => ({
                url: `users/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Users'],
        }),
    }),
})

export const { useGetUsersQuery, useDeleteUserMutation } = usersApi