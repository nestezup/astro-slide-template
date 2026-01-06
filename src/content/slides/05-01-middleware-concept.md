---
title: "미들웨어 개요"
order: 501
---

### 미들웨어란?

요청과 응답 사이에서 동작하는 함수입니다.

- **로깅**: 요청/응답 기록
- **인증**: 사용자 권한 확인
- **CORS**: 크로스 오리진 설정
- **에러 처리**: 일관된 에러 응답

### 기본 구조

```javascript
function middleware(req) {
  // 요청 전처리
  console.log("Request:", req.url);

  return {
    // 응답 후처리
    onResponse: (response) => {
      console.log("Response:", response.status);
      return response;
    }
  };
}
```

### 적용 방식

```javascript
const server = Bun.serve({
  fetch(req) {
    const mw = middleware(req);
    let response = new Response("Hello");

    // 미들웨어 적용
    if (mw.onResponse) {
      response = mw.onResponse(response);
    }

    return response;
  }
});
```
