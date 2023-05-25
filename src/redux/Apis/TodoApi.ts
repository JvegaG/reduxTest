import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const TodoApi = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos'
        }),
        getTodoById: builder.query({
            query: (id: number) => `/todos/${id}`
        })
    })
})

export const { useGetTodosQuery, useGetTodoByIdQuery } = TodoApi