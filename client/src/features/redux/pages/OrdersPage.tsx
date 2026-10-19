import { Link } from 'react-router-dom'
import { useGetOrdersQuery } from '../store/ordersApi'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setCustomerFilter, clearCustomerFilter,setOrderSum,clearOrderSum } from '../store/uiSlice'

export default function ReduxOrdersPage() {
  // Серверные данные — RTK Query (кэш + флаги из коробки)
  const { data: orders, isLoading, isError } = useGetOrdersQuery()

  // UI-состояние (фильтр) — обычный слайс
  const filter = useAppSelector((s) => s.ui.customerFilter)
  const order = useAppSelector((s)=>s.ui.sumOrder);
  const dispatch = useAppDispatch()

  if (isLoading) return <p>⏳ Загрузка заказов (RTK Query)…</p>
  if (isError) return <p>❌ Не удалось загрузить заказы.</p>

  const q = filter.trim().toLowerCase()
  const o = order.trim().toLowerCase()
  const filtered = (orders ?? []).filter((o) => o.customer.toLowerCase().includes(q))
                    .sort((a, b) => o=="asc" ? a.total - b.total:b.total - a.total)

  return (
    <section>
      <h2>Redux · Заказы (RTK Query)</h2>

      <input
        value={filter}
        onChange={(e) => dispatch(setCustomerFilter(e.target.value))}
        placeholder="Фильтр по клиенту…"
      />
      <button onClick={() => dispatch(clearCustomerFilter())}>Сброс</button>

      <button onClick={() => dispatch(setOrderSum("asc"))}>ASC</button>
      <button onClick={() => dispatch(setOrderSum("desc"))}>DESC</button>
      <button onClick={() => dispatch(clearOrderSum())}>Сброс Order</button>

      <ul>
        {filtered.map((o) => (
          <li key={o.id}>
            <Link to={`/redux/orders/${o.id}`}>#{o.id} — {o.customer}</Link> — {o.status} — {o.total} ₽
          </li>
        ))}
      </ul>

      <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>
        Показано {filtered.length} из {orders?.length ?? 0}
      </p>
    </section>
  )
}
