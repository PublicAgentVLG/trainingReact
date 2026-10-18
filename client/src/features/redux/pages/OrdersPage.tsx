import { Link } from 'react-router-dom'

export default function ReduxOrdersPage() {
  return (
    <section>
      <h2>Redux · Заказы</h2>
      <p style={{ opacity: 0.7 }}>Заглушка. Список подключим на Этапе 4.</p>
      <p>Пример перехода на деталь (проверяем параметр маршрута):</p>
      <ul>
        <li><Link to="/redux/orders/1">Заказ #1</Link></li>
        <li><Link to="/redux/orders/3">Заказ #3</Link></li>
        <li><Link to="/redux/orders/999">Заказ #999</Link></li>
      </ul>
    </section>
  )
}