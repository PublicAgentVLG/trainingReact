# Бэкенд (json-server)

Простой mock-бэкенд без базы данных. Данные — в `db.json`.
Запускается из корня проекта: `npm run server` (или вместе с фронтом — `npm run dev`).

- Порт: **4000**
- Две связанные «таблицы»: `orders` и `orderItems` (связь по ключу `orderId`).

## Эндпоинты (напрямую, порт 4000)

| Метод | URL | Что возвращает |
|------|-----|----------------|
| GET | `/orders` | список заказов |
| GET | `/orders/:id` | один заказ |
| GET | `/orders/:id/orderItems` | позиции конкретного заказа (вложенный ресурс) |
| GET | `/orderItems` | все позиции |
| GET | `/orderItems?orderId=:id` | позиции заказа через фильтр |
| GET | `/orders/:id?_embed=orderItems` | заказ вместе с его позициями |

json-server также поддерживает POST/PUT/PATCH/DELETE (пригодится для мутаций в RTK Query / TanStack Query).

## Через фронт (Vite-прокси)

В дев-режиме фронт обращается к `/api/*`, а Vite проксирует на бэкенд, убирая префикс `/api`:

```
/api/orders            ->  http://localhost:4000/orders
/api/orders/1/orderItems -> http://localhost:4000/orders/1/orderItems
```

Так во фронте пишем относительные пути `fetch('/api/orders')` — без CORS и хардкода хоста.
