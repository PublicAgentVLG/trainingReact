import { useEffect, useState } from 'react'
import type { Order } from './shared/types'
import './App.css'

// ВРЕМЕННЫЙ компонент Этапа 0: только smoke-тест связи с бэкендом.
// На Этапе 1 (React Router 6) его заменит layout с меню-навигацией.
function App() {
  const [status, setStatus] = useState<'loading' | 'ok' | 'error'>('loading')
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('/api/orders')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json() as Promise<Order[]>
      })
      .then((orders) => {
        setCount(orders.length)
        setStatus('ok')
      })
      .catch(() => setStatus('error'))
  }, [])

  return (
    <main className="app">
      <h1>trainingReact — Этап 0 ✅</h1>
      <p>Шаблон поднят. Ниже — проверка связи фронта с бэкендом:</p>

      {status === 'loading' && <p>⏳ Проверяю бэкенд…</p>}
      {status === 'ok' && (
        <p>
          ✅ Бэкенд на связи. Заказов в базе: <b>{count}</b>
        </p>
      )}
      {status === 'error' && (
        <p>
          ❌ Нет связи с бэкендом. Запущен ли он? Запусти из корня: <code>npm run dev</code>
        </p>
      )}

      <hr />
      <p className="hint">
        Дальше — Этап 1 (React Router 6): этот файл заменим на layout с меню.
      </p>
    </main>
  )
}

export default App
