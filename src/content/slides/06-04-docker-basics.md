---
title: "Docker 기본"
order: 604
---

### Dockerfile 작성

Bun 애플리케이션을 컨테이너화합니다.

```dockerfile
# 공식 Bun 이미지 사용
FROM oven/bun:latest

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 파일 복사
COPY package.json bun.lockb ./

# 의존성 설치
RUN bun install --production

# 소스 코드 복사
COPY . .

# 빌드
RUN bun build server.ts --outdir ./dist

# 포트 노출
EXPOSE 3000

# 서버 실행
CMD ["bun", "run", "dist/server.js"]
```

### 빌드 및 실행

```bash
# 이미지 빌드
docker build -t my-bun-api .

# 컨테이너 실행
docker run -p 3000:3000 --env-file .env my-bun-api
```

### 포트 매핑

| 호스트 | 컨테이너 |
|-------|----------|
| 3000 | 3000 |
