# EMS-API

**Содержание**

- [Разработка](##-Разработка)
  - [Настройка среды](###-Настройка-среды)
  - [Стуктура репозитория](###-Стуктура-репозитория)
- [Ссылки](##-Ссылки)

## Разработка

### Настройка среды

1. Установка [nvm](https://github.com/nvm-sh/nvm)

2. Установка _Node.js_ и _yarn_:

```bash
nvm install 12
nvm alias default 12
nvm use default
```

Установка _yarn_ - [Yarn: installation guide](https://yarnpkg.com/ru/docs/install#debian-stable)

3. Клонирование проекта:

```bash
git clone git@gitlab.com:basovbros.io/ems-api.git
```

4. Установка зависимостей:

```bash
cd ems-api
yarn run bootstrap
```

5. Установка дополнительных зависимостей

```bash
yarn add <package-name>
```

### Стуктура репозитория

- `/node_modules` - зависимости
- `/packages` - пакеты проекта
  - `/ems-api-dao` - модуль доступа к данным
  - `/ems-api-server` - модуль обработки _HTTP_-запросов сервера _EMS-API_
  - `/graceful-server` - модуль для создания _Node.js_ серверов с возможностью "плавного" выключения
- `wiki-docs` - руководства по работе с проектом
- `.gitignore` - файл настройки _git_
- `lerna.json` - файл настройки _lerna_ ([lerna - инструмент создания монорепозитоирев](https://github.com/lerna/lerna))
- `package.json` - мета-файл проекта
- `README.md` - описание проекта

## Переменные окружения

- `NODE_ENV`
- `EMS_API_SERVER_PORT`
- `EMS_API_SERVER_HOST`
- `EMS_API_HEALTH_CHECK_TOKEN`

## Ссылки

1. [NVM: менеджер версий Node.js](https://github.com/nvm-sh/nvm)
2. [Yarn: Installation guide](https://yarnpkg.com/ru/docs/install#debian-stable)
3. [Lerna: Инструмент создания монорепозитоириев](https://github.com/lerna/lerna)
4. [Medium: Sharing UI Components with Lerna and Yarn Workspaces](https://medium.com/naresh-bhatia/sharing-ui-components-with-lerna-and-yarn-workspaces-be1ebca06efe)
5. [PM2 Runtime: Log Management](https://pm2.io/doc/en/runtime/guide/log-management/?utm_source=pm2&utm_medium=website&utm_campaign=rebranding)

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
