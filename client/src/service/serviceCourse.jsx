import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const courseApi = createApi({
    reducerPath: 'courseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/course'
    }),
    endpoints: (builder) => ({
        createCourse: builder.mutation({
            query: (body) => ({
                url: '/',
                method: 'POST',
                body: body,
            }),
        }),

        updateCourse: builder.mutation({
            query: (body) => ({
                url: `/${body.id}`,
                method: 'PUT',
                body: body,
            }),
        }),

        deleteCourse: builder.mutation({
            query: (body) => ({
                url: `/${body.id}`,
                method: 'DELETE',
            }),
        }),

        getCourseById: builder.query({
            query: (id) => `/${id}`
        }),

        getAllCourse: builder.query({
            query: () => `/`
        }),

    }),
})

export const { useCreateCourseMutation,
    useUpdateCourseMutation,
    useDeleteCourseMutation,
    useGetCourseByIdQuery,
    useGetAllCourseQuery } = courseApi;
