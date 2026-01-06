---
title: "쿼리 파라미터"
order: 405
---

### URLSearchParams 사용

쿼리 파라미터로 페이지네이션과 검색 구현

```javascript
const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    const searchParams = url.searchParams;

    // 쿼리 파라미터 추출
    const page = searchParams.get("page") || "1";
    const limit = searchParams.get("limit") || "10";
    const search = searchParams.get("search");

    const response = {
      page: parseInt(page),
      limit: parseInt(limit),
      search: search || null,
      total: 100
    };

    return new Response(JSON.stringify(response), {
      headers: { "Content-Type": "application/json" }
    });
  }
});
```

### 사용 예시

| URL | page | limit | search |
|-----|------|-------|--------|
| `/api/users` | 1 | 10 | null |
| `/api/users?page=2` | 2 | 10 | null |
| `/api/users?page=1&limit=20` | 1 | 20 | null |
| `/api/users?search=alice` | 1 | 10 | alice |
