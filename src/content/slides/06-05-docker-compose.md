---
title: "Docker Compose"
order: 605
---

### 여러 서비스 오케스트레이션

애플리케이션과 데이터베이스 함께 실행

```yaml
version: '3.8'

services:
  api:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://postgres:password@db:5432/myapp
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

volumes:
  postgres_data:
```

### 실행

```bash
# 백그라운드 실행
docker-compose up -d

# 로그 확인
docker-compose logs -f api

# 중지
docker-compose down
```

### 서비스 구조

```
┌─────────────┐
│   API       │
│  (port:3000)│
└──────┬──────┘
       │
       │ depends_on
       ▼
┌─────────────┐
│  Database   │
│  (postgres) │
└─────────────┘
```
