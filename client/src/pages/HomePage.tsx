import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <section>
      <h2>Главная — карта практик</h2>
      <p>
        Выбери этап в меню слева или по ссылкам ниже. Разделы «Redux» и «Zustand»
        ведут на внешне одинаковые страницы «Заказы → Позиции», но с разной реализацией.
      </p>
      <ul>
        <li><Link to="/styling">Этап 2 · CSS Modules / PostCSS</Link></li>
        <li><Link to="/hooks">Этап 3 · Хуки (список руками)</Link></li>
        <li><Link to="/redux/orders">Этап 4 · Redux Toolkit + RTK Query</Link></li>
        <li><Link to="/zustand/orders">Этап 5 · Zustand + TanStack Query</Link></li>
      </ul>
    </section>
  )
}