import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Placeholder from './components/Placeholder'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ReduxOrdersPage from './features/redux/pages/OrdersPage'
import ReduxOrderItemsPage from './features/redux/pages/OrderItemsPage'

export default function App() {
  return (
    <Routes>
      {/* Родительский маршрут с общим layout. Дети рендерятся в его <Outlet/> */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="styling" element={<Placeholder title="Этап 2 · CSS Modules / PostCSS" />} />
        <Route path="hooks" element={<Placeholder title="Этап 3 · Хуки" />} />

        {/* Этап 4 — Redux + RTK Query */}
        <Route path="redux/orders" element={<ReduxOrdersPage />} />
        <Route path="redux/orders/:orderId" element={<ReduxOrderItemsPage />} />

        {/* Этап 5 — Zustand + TanStack Query */}
        <Route path="zustand/orders" element={<Placeholder title="Этап 5 · Zustand · Заказы" />} />
        <Route path="zustand/orders/:orderId" element={<Placeholder title="Этап 5 · Zustand · Позиции" />} />

        <Route path="about" element={<Placeholder title="About" />} />

        {/* Catch-all: любой несуществующий путь */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}