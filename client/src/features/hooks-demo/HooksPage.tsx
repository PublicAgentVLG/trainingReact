import { useEffect, useMemo, useRef, useState } from 'react'
import type { Order } from '../../shared/types'
import { useFetch } from './useFetch'

export default function HooksPage() {
  // Загрузка данных — через кастомный хук
  const { data: orders, loading, error } = useFetch<Order[]>('/api/orders')

  // Локальное состояние поля поиска
  const [query, setQuery] = useState('')
  const [queryStatus, setQueryStatus] = useState('')

  // useRef: ссылка на DOM-узел, чтобы сфокусировать инпут при монтировании
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef.current?.focus()
  }, []) // один раз после первого рендера

  // useMemo: производное значение. Пересчитывается только при смене orders или query.
  const filtered = useMemo(() => {
    const list = orders ?? []
    const q = query.trim().toLowerCase()
    const qStatus = queryStatus.trim().toLowerCase()
    return list.filter(
        (o) =>
          o.customer.toLowerCase().includes(q) &&
          o.status.toLowerCase().includes(qStatus),
      )
  }, [orders, query,queryStatus])

  if (loading) return <p>⏳ Загрузка заказов…</p>
  if (error) return <p>❌ Ошибка: {error}</p>

  return (
    <section>
      <h2>Этап 3 · Заказы на «голых» хуках</h2>

      <input
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Поиск по клиенту…"
      />
      <button aria-label='Test' onClick={() => setQuery("")}>Clean</button>
      <input
        value={queryStatus}
        onChange={(e) => setQueryStatus(e.target.value)}
        placeholder="Поиск по статусу..."
      />

      {filtered.length === 0 ? (
        <p>Ничего не найдено.</p>
      ) : (
        <ul>
          {filtered.map((o) => (
            <li key={o.id}>
              #{o.id} — {o.customer} — {o.status} — {o.total} ₽
            </li>
          ))}
        </ul>
      )}

      <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>
        Показано {filtered.length} из {orders?.length ?? 0}
      </p>
    </section>
  )
}
