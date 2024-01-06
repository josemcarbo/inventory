import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../constants';

export interface Product {
    id: number;
    name: string;
    description: string;
    cost: number;
    price: number
    quantity: number;
    unit: string;
    arrival_at: Date;
    expired_at: Date;
}
export const STOCK: Product[] = [
    {
        id: 1,
        name: "Beer: Cristal",
        description: "Cuban beer",
        cost: 150,
        price: 175,
        quantity: 10,
        unit: "c",
        arrival_at: new Date(),
        expired_at: new Date()
    },
    {
        id: 2,
        name: "Beer: Bucanero",
        description: "Cuban beer",
        cost: 150,
        price: 175,
        quantity: 10,
        unit: "c",
        arrival_at: new Date(),
        expired_at: new Date()
    },
    {
        id: 3,
        name: "Coffee: La llave",
        description: "American coffee",
        cost: 250,
        price: 350,
        quantity: 10,
        unit: "u",
        arrival_at: new Date(),
        expired_at: new Date()
    },
    {
        id: 4,
        name: "Beer: Cristal",
        description: "Cuban beer",
        cost: 120,
        price: 175,
        quantity: 450,
        unit: "c",
        arrival_at: new Date(),
        expired_at: new Date()
    },
    {
        id: 5,
        name: "Beer: Bucanero",
        description: "Cuban beer",
        cost: 150,
        price: 175,
        quantity: 1780,
        unit: "c",
        arrival_at: new Date(),
        expired_at: new Date()
    },
    {
        id: 6,
        name: "Coffee: La llave",
        description: "American coffee",
        cost: 250,
        price: 350,
        quantity: 10,
        unit: "u",
        arrival_at: new Date(),
        expired_at: new Date()
    }
]

export const stockApi = createApi({
    reducerPath: 'stock',
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_BASE_URL}/stock/`,
    }),
    endpoints: (builder) => ({
        getStock: builder.query<Product[], void>({
            query: () => ({ url: '' }),
        }),
    }),
});

export const { useGetStockQuery } = stockApi;
