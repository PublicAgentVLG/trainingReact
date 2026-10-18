import { NavLink, Outlet } from 'react-router-dom'
import './Layout.css'

export default function Layout() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h1 className="brand">trainingReact</h1>
        <nav className="nav">
          {/* end — активна только на точном "/", иначе была бы активна всегда */}
          <NavLink to="/" end className={navClass}>Главная</NavLink>
          <NavLink to="/styling" className={navClass}>Этап 2 · Стили</NavLink>
          <NavLink to="/hooks" className={navClass}>Этап 3 · Хуки</NavLink>
          <NavLink to="/redux/orders" className={navClass}>Этап 4 · Redux + RTK Query</NavLink>
          <NavLink to="/zustand/orders" className={navClass}>Этап 5 · Zustand + TanStack</NavLink>
          <NavLink to="/about" className={navClass}>About</NavLink>
        </nav>
      </aside>

      <main className="content">
        {/* Сюда router подставит элемент активного дочернего маршрута */}
        <Outlet />
      </main>
    </div>
  )
}

// NavLink вызывает className как функцию и передаёт { isActive }
function navClass({ isActive }: { isActive: boolean }) {
  return isActive ? 'nav-link nav-link--active' : 'nav-link'
}