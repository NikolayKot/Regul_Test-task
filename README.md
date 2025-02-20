# Store Project

Это проект интернет-магазина, разработанный с использованием Nuxt 3.

## Технологии

- Nuxt 3
- Vue 3
- Pinia
- Sass

## Требования

- Node.js (рекомендуется версия 18.12.1 или выше)
- npm (версия 8.19.2 или выше)

## Установка

Убедитесь, что у вас установлены Node.js и npm. Затем выполните следующие команды:

```bash
# Клонирование репозитория
git clone https://github.com/NikolayKot/Regul_Test-task.git
cd store-project

# Установка зависимостей
npm install
```

## Установка

Для запуска проекта в режиме разработки выполните:

- npm run dev

## Сборка для продакшена

- npm run build

## Структура проекта

- `assets/`: Содержит нескомпилированные ассеты, такие как стили SASS
- `components/`: Vue компоненты проекта
- `layouts/`: Шаблоны макетов приложения
- `pages/`: Маршруты и страницы приложения
- `middleware/`: Промежуточное ПО (middleware) для обработки запросов перед рендерингом
- `server/`: Серверные маршруты, API и другая серверная логика
- `plugins/`: Плагины Vue.js
- `public/`: Статические файлы
- `store/`: Хранилище Pinia
- `nuxt.config.ts`: Конфигурационный файл Nuxt
