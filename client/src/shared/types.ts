// Доменные типы проекта. Используются на всех этапах.

export type OrderStatus = 'new' | 'paid' | 'shipped' | 'cancelled'

export interface Order {
  id: number
  customer: string
  createdAt: string // ISO-дата, напр. "2026-10-01"
  status: OrderStatus
  total: number
}

export interface OrderItem {
  id: number
  orderId: number // внешний ключ -> Order.id
  product: string
  quantity: number
  price: number
}
