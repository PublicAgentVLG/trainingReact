import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Order, OrderItem } from '../../../shared/types'

// RTK Query: описываем endpoints — хуки генерируются автоматически.
export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }), // /orders -> /api/orders (Vite проксирует)
  tagTypes: ['Order'],
  endpoints: (builder) => ({
    // GET /api/orders
    getOrders: builder.query<Order[], void>({
      query: () => '/orders',
      providesTags: (result) =>
        result
          ? [
              ...result.map((o) => ({ type: 'Order' as const, id: o.id })),
              { type: 'Order' as const, id: 'LIST' },
            ]
          : [{ type: 'Order' as const, id: 'LIST' }],
    }),

    // GET /api/orders/:id
    getOrderById: builder.query<Order, number>({
      query: (id) => `/orders/${id}`,
      providesTags: (_r, _e, id) => [{ type: 'Order', id }],
    }),

    // GET /api/orders/:id/orderItems — связанные позиции
    getOrderItems: builder.query<OrderItem[], number>({
      query: (orderId) => `/orders/${orderId}/orderItems`,
    }),

    // PATCH /api/orders/:id — меняем статус и инвалидируем кэш
    updateOrderStatus: builder.mutation<Order, { id: number; status: Order['status'] }>({
      query: ({ id, status }) => ({
        url: `/orders/${id}`,
        method: 'PATCH',
        body: { status },
      }),
      invalidatesTags: (_r, _e, { id }) => [
        { type: 'Order', id },
        { type: 'Order', id: 'LIST' },
      ],
    }),
  }),
})

// Автогенерированные хуки
export const {
  useGetOrdersQuery,
  useGetOrderByIdQuery,
  useGetOrderItemsQuery,
  useUpdateOrderStatusMutation,
} = ordersApi
