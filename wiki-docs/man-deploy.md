# Руководство по развертыванию

**Содержание:**

- [Docker](##-Docker)
- [Настройки](###-Настройки)
- [Построение образа](###-Построение-образа)
- [Запуск образа](###-Запуск-образа)
- [Полезные скрипты](###-Полезные-скрипты)
- [Kubernetes (Minikube)](<##-Kubernetes-(Minikube)>)
  - [Запуск `minikube` и веб-интерфейса](###-Запуск-`minikube`-и-веб-интерфейса)
  - [Создание Pod-а](###-Создание-Pod-а)
  - [Создание сервиса](###-Создание-сервиса)
  - [Тестирование](###-Тестирование)
  - [Полезные команды](###-Полезные-команды)
- [Ссылки](##-Ссылки) - ссылки на материалы для обязательного ознакомления

## Docker

### Настройки

Настройки контейнера содержатся в файле [Dockerfile](./Dockerfile).

### Построение образа

```bash
docker build -t ems-api-server .
```

### Запуск образа

```bash
docker run -p 8080:3000 ems-api-server
```

Команда запустит образ и привяжет порт _3000_ образа с портом _8080_ _localhost_.

### Полезные скрипты

1. Запустить командную строку в контейнере

```bash
docker exec -i 6b797df7f99c sh
```

, где _6b797df7f99c_ - идентификатор контейнера.

2. Список контейнеров:

```bash
docker ps
```

3. Настройки контейнера

```bash
docker inspect 6634b90c78df
```

, где _6634b90c78df_ - идентификатор контейнера.

## Kubernetes (Minikube)

### Запуск `minikube` и веб-интерфейса

```bash
minikube start
minikube dashboard
```

### Создание Pod-а

**Важно: выполнить в одной консоли**

```bash
eval $(minikube docker-env)
docker build -t ems-api-server .
kubectl run ems-api --image=ems-api-server:latest --port=3000 --image-pull-policy=Never
```

### Создание сервиса

```bash
kubectl expose deployment ems-api --type="LoadBalancer" --name=ems-api-service
```

Проверка

```bash
kubectl get service
```

### Тестирование

Команда

```bash
minikube service ems-api-service
```

откроет в браузере вкладку с локальным IP, который будет обслуживать развернутое приложение.

### Полезные команды

- Deployments

```bash
kubectl get deployments
```

- Список Pods

```bash
kubectl get pods
```

- События кластера

```bash
kubectl get events
```

## ELK

### Развертывание

Запуск `minikube` с резервом ОП 8GB и 3 ядер

```bash
minikube start --memory 8192 --disk-size 50g --cpus 3
#eval $(minikube docker-env)
```

Проверить список нод кластера:

```bash
kubectl get nodes
```

### Elasticsearch

Клонирование репозитория

```bash
git clone https://github.com/jswidler/elasticsearch-kubed.git
cd elasticsearch-kubed/
```

Запуск генератора файла конфигурации

```bash
./config-templates.py
```

## Ссылки

1. [PM2 Runtime: Integration with Docker](https://pm2.io/doc/en/runtime/integration/docker/?utm_source=pm2&utm_medium=website&utm_campaign=rebranding)
2. [Medium: Getting Started with Minikube & Docker Container Images, for testing Kubernetes locally on Mac.](https://medium.com/@brianbmathews/getting-started-with-minikube-docker-container-images-for-testing-kubernetes-locally-on-mac-e39adb60bd41)
3. [Udacity: High Performance ELK with Kubernetes: Part 1](https://engineering.udacity.com/high-performance-elk-with-kubernetes-part-1-1d09f41a4ce2)
