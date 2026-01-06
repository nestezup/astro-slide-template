---
title: "빌드 프로세스"
order: 602
---

### TypeScript 빌드

타입스크립트를 자바스크립트로 컴파일합니다.

```bash
# TypeScript 컴파일
bun build server.ts --outdir ./dist --target bun

# 프로덕션 실행
bun run dist/server.js
```

### 빌드 옵션

| 옵션 | 설명 |
|------|------|
| `--outdir` | 출력 디렉토리 |
| `--target` | 타겟 플랫폼 (bun, node) |
| `--minify` | 코드 최소화 |
| `--sourcemap` | 소스맵 생성 |

### 프로덕션 스크립트

```javascript
// package.json
{
  "scripts": {
    "build": "bun build server.ts --outdir ./dist --target bun",
    "start": "bun run dist/server.js",
    "prod": "bun run build && bun run start"
  }
}
```

### 실행

```bash
bun run prod
```
