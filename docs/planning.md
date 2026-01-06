# Astro 슬라이드 서비스 개발 계획

## 프로젝트 개요

### 목표
- Astro + Starlight 기반 슬라이드 서비스 구축
- 마크다운으로 작성된 강의안을 슬라이드로 변환
- 한 페이지 안에 내용이 들어가는 슬라이드 형태 (넘침 감지 및 경고)
- 비즈니스 활용: 서비스화 가능, 강의용 슬라이드 생성

### 핵심 요구사항
1. **레이아웃**: Starlight 기본 포멧에서 왼쪽 사이드바만 유지
2. **슬라이드**: 한페이지 내에 내용이 들어가야 함, 넘침 경고 표시
3. **폰트**: Paperlogy (CDN) 적용
4. **기획문서**: docs 폴더에 대화 기록 및 개발/기획 정리
5. **샘플 컨텐츠**: Bun으로 API 서버 만들기 강의안

## 기술 스택

### 기본 프레임워크
- **Astro**: 웹 프레임워크 (정적 사이트 생성)
- **Starlight**: Astro용 문서 테마
- **Reveal.js**: 슬라이드 프레젠테이션 라이브러리

### 추가 라이브러리
- **reveal.js**: 슬라이드 트랜지션 및 네비게이션
- **ResizeObserver**: 콘텐츠 넘침 감지 (브라우저 기본 API)

### 폰트
- **Paperlogy**: projectnoonnu CDN에서 9가지 웨이트 제공

## 아키텍처 설계

### 1. 프로젝트 구조

```
astro-slide-template/
├── src/
│   ├── content/
│   │   └── docs/           # 마크다운 강의안
│   │       ├── 01-introduction.md
│   │       ├── 02-bun-setup.md
│   │       └── ...
│   ├── components/
│   │   ├── SlideDeck.astro        # Reveal.js 래퍼 컴포넌트
│   │   ├── SlideContent.astro     # 개별 슬라이드 컨텐츠
│   │   ├── OverflowWarning.astro  # 넘침 경고 컴포넌트
│   │   └── starlight/             # Starlight 커스텀 컴포넌트
│   │       ├── Sidebar.astro      # 왼쪽 사이드바 (수정)
│   │       └── PageFrame.astro    # 레이아웃 컴포넌트
│   ├── layouts/
│   │   └── SlideLayout.astro      # 슬라이드 전용 레이아웃
│   ├── pages/
│   │   └── index.astro            # 메인 페이지
│   └── styles/
│       └── global.css             # 전역 스타일 + 폰트
├── docs/                          # 기획 및 개발 문서
│   ├── planning.md                # 기획 문서
│   ├── development-log.md         # 개발 로그
│   └── conversation-log.md        # 대화 기록
├── astro.config.mjs               # Astro 설정
├── package.json
└── README.md
```

### 2. 데이터 흐름

```
마크다운 강의안 (.md)
    ↓
Astro Content Collection
    ↓
Starlight Page 렌더링
    ↓
SlideDeck.astro (Reveal.js 초기화)
    ↓
슬라이드 렌더링 + 넘침 감지
    ↓
최종 HTML 출력
```

## 구현 계획

### Phase 1: 프로젝트 초기 설정 (Step 1-2)

**1.1 Astro + Starlight 설치**
```bash
npm create astro@latest -- --template starlight
npm install reveal.js
```

**1.2 Paperlogy 폰트 설정**
- `src/styles/global.css`에 @font-face 정義
- 전역 폰트 적용 (font-family: 'Paperozi', sans-serif)

**1.3 기본 설정**
- `astro.config.mjs` 설정
- Starlight 기본 커스터마이징 설정

### Phase 2: 슬라이드 기능 구현 (Step 3-5)

**2.1 SlideDeck.astro 컴포넌트**
- Reveal.js 초기화
- Markdown 플러그인 연동
- 슬라이드 테마 설정 (black/dark/white)

**2.2 슬라이드 레이아웃**
- 16:9 비율의 슬라이드 컨테이너
- 중앙 정렬된 콘텐츠
- overflow: hidden 기본 설정

**2.3 넘침 감지 기능**
- ResizeObserver API 활용
- scrollHeight와 clientHeight 비교
- 경고 표시 (red border + 알림 뱃지)

### Phase 3: Starlight 레이아웃 수정 (Step 6-7)

**3.1 왼쪽 사이드바만 유지**
- 오른쪽 Table of Contents 비활성화
  - 전역: `tableOfContents: false` 설정
  - 페이지별: frontmatter에서 설정
- Edit Page Link 제거/숨김 옵션

**3.2 사이드바 커스터마이징**
- 마크다운 파일 기반 자동 생성
- 슬라이드 섹션별 그룹화

### Phase 4: 샘플 강의안 작성 (Step 8)

**4.1 Bun API 서버 강의 구성**
- 01-introduction.md: Bun 소개 및 장점
- 02-setup.md: Bun 설치 및 프로젝트 설정
- 03-basic-server.md: 기본 API 서버 만들기
- 04-routing.md: 라우팅 구현
- 05-middleware.md: 미들웨어 사용법
- 06-deployment.md: 배포 방법

### Phase 5: 문서화 및 기획 (Step 9-10)

**5.1 docs/ 폴더 구조**
- `planning.md`: 기획 의도, 비즈니스 모델, 기능 정의
- `development-log.md`: 개발 과정, 기술적 결정, 이슈 기록
- `conversation-log.md`: 대화 기록, 아이디어 정리

**5.2 README 작성**
- 프로젝트 소개
- 설치 및 실행 방법
- 사용 방법
- 기여 가이드

## 기술 세부사항

### 1. Reveal.js 통합

**SlideDeck.astro 컴포넌트 구조:**
```astro
---
interface Props {
  theme?: 'black' | 'white' | 'league';
}
const { theme = 'black' } = Astro.props;
---

<div class="reveal">
  <div class="slides">
    <slot />
  </div>
</div>

<script>
  import Reveal from 'reveal.js';
  import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
  
  const deck = new Reveal({
    plugins: [Markdown],
    hash: true,
    transition: 'slide',
    width: 1200,
    height: 675, // 16:9
  });
  deck.initialize();
</script>
```

### 2. 넘침 감지 구현

**OverflowDetector.astro 컴포넌트:**
```javascript
<script>
  const observer = new ResizeObserver(entries => {
    for (let entry of entries) {
      const el = entry.target;
      const isOverflowing = 
        el.scrollHeight > el.clientHeight || 
        el.scrollWidth > el.clientWidth;
      
      el.classList.toggle('overflow-warning', isOverflowing);
      
      if (isOverflowing) {
        console.warn('⚠️ Content overflow detected');
      }
    }
  });

  document.querySelectorAll('.slide-content').forEach(slide => {
    observer.observe(slide);
  });
</script>
```

**CSS 경고 스타일:**
```css
.slide-content.overflow-warning {
  outline: 3px solid #ff4444;
}

.slide-content.overflow-warning::after {
  content: "⚠️ 넘침";
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ff4444;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
}
```

### 3. Starlight 레이아웃 수정

**Table of Contents 비활성화:**
```javascript
// astro.config.mjs
starlight({
  tableOfContents: {
    minHeadingLevel: 2,
    maxHeadingLevel: 2,
  },
  // 또는 전체 비활성화
  editLink: false,
});
```

### 4. 폰트 통합

**Paperlogy 폰트 적용:**
```css
/* src/styles/global.css */
@font-face {
  font-family: 'Paperozi';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-4Regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}

/* 모든 웨이트 추가 후 */
:root {
  --font-main: 'Paperozi', sans-serif;
}

body {
  font-family: var(--font-main);
}

.reveal {
  font-family: var(--font-main);
}
```

## 샘플 강의안 구성 (Bun으로 API 서버 만들기)

### 01-introduction.md
- Bun이란?
- Node.js와 비교
- 장점: 속도, 호환성, 내장 도구

### 02-setup.md
- Bun 설치
- 프로젝트 초기화
- 기본 구조

### 03-basic-server.md
- 간단한 HTTP 서버
- 요청/응답 처리
- 핸들러 작성

### 04-routing.md
- 라우터 설정
- 경로 매개변수
- RESTful API 구현

### 05-middleware.md
- 미들웨어 개념
- CORS 설정
- 로깅 미들웨어

### 06-deployment.md
- 빌드
- 배포 옵션 (Docker, Vercel, Railway)

## 기획 및 비즈니스 모델

### 서비스화 가능성

**SaaS 모델**
- 마크다운 → 슬라이드 변환 서비스
- 템플릿 제공
- 공동 편집 기능
- PDF/PPTX 내보내기

**대상 사용자**
- 강사, 교육자
- 기업 교육팀
- 개발자 (기술 발표)

### 강의용 활용

- 기존 마크다운 노트를 슬라이드로 변환
- Git으로 버전 관리 가능
- 협업 편집 지원

## 실행 단계 (10 Steps)

### Step 1: 프로젝트 초기화
- `npm create astro@latest -- --template starlight`
- 기본 설정 확인

### Step 2: 의존성 설치
- `npm install reveal.js`

### Step 3: Paperlogy 폰트 설정
- global.css에 폰트 정의
- CSS 변수 설정

### Step 4: Starlight 설정
- astro.config.mjs 수정
- Table of Contents 비활성화

### Step 5: 슬라이드 컴포넌트 개발
- SlideDeck.astro
- SlideContent.astro
- OverflowWarning.astro

### Step 6: 레이아웃 커스터마이징
- 왼쪽 사이드바만 유지
- 슬라이드 레이아웃 적용

### Step 7: 넘침 감지 기능 구현
- ResizeObserver 스크립트
- 경고 스타일 적용

### Step 8: 샘플 강의안 작성
- Bun API 서버 강의 6개 섹션
- 마크다운 형식으로 작성

### Step 9: 문서화
- docs/planning.md 작성
- docs/development-log.md 작성
- docs/conversation-log.md 작성

### Step 10: 테스트 및 최적화
- 로컬 테스트
- 넘침 감지 테스트
- 폰트 렌더링 확인

## 주의사항

1. **콘텐츠 넘침**: 넘침 감지는 개발 단계에서 유용하며, 프로덕션에서는 경고를 숨길 수 있음
2. **Starlight 커스터마이징**: 너무 많은 컴포넌트 오버라이드는 업데이트 시 문제 발생 가능
3. **폰트 로딩**: font-display: swap을 사용하여 FOIT 방지
4. **성능**: Reveal.js는 클라이언트 사이드에서 초기화되므로 로딩 최적화 필요

## 다음 단계

계획 승인 후 다음 순서로 진행:
1. Step 1-2: 프로젝트 초기화 및 의존성 설치
2. Step 3: 폰트 설정
3. Step 4-7: 슬라이드 기능 구현
4. Step 8: 샘플 강의안 작성
5. Step 9-10: 문서화 및 테스트
