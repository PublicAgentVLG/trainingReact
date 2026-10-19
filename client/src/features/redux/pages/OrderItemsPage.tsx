import { useNavigate, useParams } from 'react-router-dom'
import type { Order } from '../../../shared/types'
import {
  useGetOrderByIdQuery,
  useGetOrderItemsQuery,
  useUpdateOrderStatusMutation,
} from '../store/ordersApi'

const STATUSES: Order['status'][] = ['new', 'paid', 'shipped', 'cancelled']

export default function ReduxOrderItemsPage() {
  const { orderId } = useParams<{ orderId: string }>()
  const id = Number(orderId)
  const navigate = useNavigate()

  const { data: order } = useGetOrderByIdQuery(id)
  const { data: items, isLoading, isFetching } = useGetOrderItemsQuery(id)
  const [updateStatus, { isLoading: isSaving }] = useUpdateOrderStatusMutation()

  return (
    <section>
      <button onClick={() => navigate('/redux/orders')}>← К заказам</button>
      <h2>Redux · Позиции заказа #{orderId}</h2>

      {order && (
        <p>
          Клиент: <b>{order.customer}</b> · статус:{' '}
          <select
            value={order.status}
            disabled={isSaving}
            onChange={(e) => updateStatus({ id, status: e.target.value as Order['status'] })}
          >
            {STATUSES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>{' '}
          {isSaving && '💾…'}
        </p>
      )}

      {isLoading ? (
        <p>⏳ Загрузка позиций…</p>
      ) : (
        <table>
          <thead>
            <tr><th align="left">Товар</th><th>Кол-во</th><th>Цена</th></tr>
          </thead>
          <tbody>
            {(items ?? []).map((it) => (
              <tr key={it.id}>
                <td>{it.product}</td>
                <td align="center">{it.quantity}</td>
                <td align="right">{it.price} ₽</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  )
}
