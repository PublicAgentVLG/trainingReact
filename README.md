# trainingReact

Синтетический тренировочный проект по **React + TypeScript**: по этапам восстанавливаем и добираем знания
(хуки, React Router 6, CSS Modules/PostCSS, Redux Toolkit + RTK Query, Zustand + TanStack Query).

Предметная область — **Заказы → Позиции заказа** (связь один-ко-многим).

## Структура

```
trainingReact/
├─ server/        # бэкенд: json-server + db.json (без БД)
├─ client/        # фронт: Vite + React + TypeScript
├─ package.json   # корневой: запускает бэк и фронт одной командой
└─ README.md
```

## Требования

- Node.js **18+** (проверялось на Node 20).
- npm **7+** (нужны workspaces).

## Установка

Из корня репозитория — одна команда (npm workspaces поставит зависимости и корня, и `client/`):

```bash
npm install
```

## Запуск

```bash
npm run dev
```

Поднимутся два процесса одновременно (через `concurrently`):

- **бэкенд** — json-server на `http://localhost:4000`
- **фронт** — Vite на `http://localhost:5173`

Открой `http://localhost:5173` — на Этапе 0 там smoke-тест: страница покажет, сколько заказов отдал бэкенд.

### Отдельные команды

```bash
npm run server   # только бэкенд (порт 4000)
npm run client   # только фронт (порт 5173)
npm run build    # прод-сборка фронта
```

## Бэкенд

Эндпоинты и примеры запросов — в [`server/README.md`](server/README.md).
Фронт ходит на `/api/*`, Vite проксирует это на json-server (см. `client/vite.config.ts`).

## Этапы

План и пояснения по этапам ведутся отдельно (вне репозитория). Коротко:

0. **Фундамент** — этот шаблон (бэк + фронт + связка). ✅
1. React Router 6 — меню и навигация.
2. CSS Modules / PostCSS.
3. Хуки — первая страница списка «руками».
4. Redux Toolkit + RTK Query.
5. Zustand + TanStack Query.

> Этап 0 собран целиком. Этапы 1–5 пишутся вручную по пошаговым инструкциям.
