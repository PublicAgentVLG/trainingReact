import { Link } from 'react-router-dom'

// ─────────────────────────────────────────────────────────────────────
// ЭТАП 2 · Переключение подхода к стилям. JSX ниже НЕ меняется —
// всегда используется объект `styles`. Переключаешь комментированием.
//
// ВАРИАНТ A — CSS Modules (активен сейчас):
//import styles from './HomePage.module.css'
//
// ВАРИАНТ B — PostCSS / глобальный CSS. Чтобы включить:
//   1) закомментируй строку import ...module.css выше;
//   2) раскомментируй обе строки ниже.
 import './HomePage.global.css'
 const styles = { page: 'page', title: 'title', subtitle: 'subtitle', grid: 'grid', card: 'card', cardTitle: 'cardTitle', cardDesc: 'cardDesc' }
// ─────────────────────────────────────────────────────────────────────

const practices = [
  { to: '/styling', title: 'Этап 2', desc: 'CSS Modules / PostCSS' },
  { to: '/hooks', title: 'Этап 3', desc: 'Хуки (список руками)' },
  { to: '/redux/orders', title: 'Этап 4', desc: 'Redux Toolkit + RTK Query' },
  { to: '/zustand/orders', title: 'Этап 5', desc: 'Zustand + TanStack Query' },
]

export default function HomePage() {
  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Главная — карта практик</h2>
      <p className={styles.subtitle}>
        Разделы «Redux» и «Zustand» ведут на внешне одинаковые страницы, но с разной реализацией.
      </p>
      <div className={styles.grid}>
        {practices.map((p) => (
          <Link key={p.to} to={p.to} className={styles.card}>
            <span className={styles.cardTitle}>{p.title}</span>
            <span className={styles.cardDesc}>{p.desc}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
