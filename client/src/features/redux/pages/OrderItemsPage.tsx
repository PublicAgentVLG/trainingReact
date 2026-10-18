import { useNavigate, useParams } from 'react-router-dom'

export default function ReduxOrderItemsPage() {
  // orderId берётся из сегмента маршрута ":orderId"
  const { orderId } = useParams<{ orderId: string }>()
  const navigate = useNavigate()

  return (
    <section>
      <h2>Redux · Позиции заказа #{orderId}</h2>
      <p style={{ opacity: 0.7 }}>Заглушка. Данные подключим на Этапе 4 (RTK Query).</p>
      <button onClick={() => navigate(-1)}>← К списку заказов</button>
    </section>
  )
}