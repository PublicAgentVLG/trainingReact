import { Link, useNavigate } from 'react-router-dom'

export default function NotFoundPage() {
  const navigate = useNavigate()
  return (
    <section>
      <h2>404 — страница не найдена</h2>
      <p>Такого маршрута нет.</p>
      {/* navigate(-1) — программный переход «назад» по истории */}
      <button onClick={() => navigate(-1)}>← Назад</button>{' '}
      <Link to="/">На главную</Link>
    </section>
  )
}