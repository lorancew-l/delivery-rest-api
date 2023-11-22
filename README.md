# Запуск проекта

## Требования

Необходимо установить Node.js и pnpm

## Установка зависимостей

```
pnpm install --frozen-lockfile
```

## Создание .env

```
Windows: copy .\.env.example .\.env
Linux: cp ./.env.example ./.env
```

## Запуск контейнера с базой

```
docker-compose up -d
```

## Генерация типов БД

```
pnpm generate
```

## Миграция

```
pnpm migrate:dev
```

## Запуск проекта

```
pnpm start:dev
```

## Просмотр БД

```
pnpm start:db-ui
```

## Swagger

```
Swagger доступен на http://localhost:3000/api/
```
