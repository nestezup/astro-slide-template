---
title: "Bun 설치 및 설정"
order: 2
---

# 설치 및 설정

## 설치 방법

### macOS/Linux
```bash
curl -fsSL https://bun.sh/install | bash
```

### Windows
```bash
powershell -c "irm bun.sh/install.ps1 | iex"
```

### 패키지 매니저 (Homebrew)
```bash
brew tap oven-sh/bun
brew install bun
```

## 프로젝트 초기화

### 새 프로젝트 생성
```bash
bun init my-api-server
cd my-api-server
```

### 기존 프로젝트
```bash
bun install
```

## 주요 명령어

| 명령어 | 설명 |
|---------|------|
| `bun run` | 스크립트 실행 |
| `bun dev` | 개발 모드 |
| `bun build` | 빌드 |
| `bun test` | 테스트 |
| `bunx` | 임시 패키지 실행 |

## 첫 번째 스크립트

```javascript
// index.js
console.log("Hello, Bun!");
```

```bash
bun run index.js
# Hello, Bun!
```