import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlices = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://redux-server-bd-arfat-bd-arfat-s-team.vercel.app`
    }),
    tagTypes: ['products'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/products',
            providesTags: ['products']
        }),
        getProduct: builder.query({
            query: (id) => `/products/${id}`,
            invalidatesTags : ['products']
        }),
        getTags: builder.query({
            query: () => '/tags'
        }),
        addProduct: builder.mutation({
            query: (data) => ({
                url: '/products',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['products']
        }),
        
        deleteProduct: builder.mutation({
            query: (_id) => ({
                url: `/products/${_id}`,
                method: 'DELETE',
            }),
            invalidatesTags : ['products']
        })
    })
});

export const { useGetProductsQuery, useGetProductQuery, useGetTagsQuery, useAddProductMutation, useEditProductMutation, useDeleteProductMutation } = apiSlices;

