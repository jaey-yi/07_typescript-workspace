# 이미지 & 폰트 최적화 - Before (최적화 전)

## 📚 프로젝트 소개

이 프로젝트는 **의도적으로 최적화되지 않은** Next.js 애플리케이션입니다.
이미지와 폰트 로딩의 성능 문제를 직접 경험하고 측정하기 위한 학습 자료입니다.

## ⚠️ 현재 프로젝트의 문제점

### 🖼️ 이미지 관련 문제

1. **Next.js Image 컴포넌트 미사용**

   - 일반 `<img>` 태그 사용으로 자동 최적화 없음
   - WebP, AVIF 같은 최신 포맷 미지원

2. **고해상도 원본 이미지 직접 로드**

   - Hero 이미지: 4K 해상도 (3840px)
   - 제품 이미지: 2400px (큰 카드에 필요 없는 크기)
   - 갤러리 이미지: 24개 × 1600px

3. **Lazy Loading 미적용**

   - 모든 이미지가 페이지 로드 시 즉시 다운로드됨
   - 사용자가 보지 않는 영역의 이미지도 로드

4. **반응형 이미지 미적용**

   - 모바일에서도 데스크톱용 큰 이미지 로드
   - srcset, sizes 속성 미사용

5. **이미지 Placeholder 없음**
   - 이미지 로딩 중 Layout Shift 발생여지 있음음

### 🔤 폰트 관련 문제

1. **외부 CDN에서 폰트 로드**

   - Google Fonts를 `<link>` 태그로 로드
   - 렌더링 블로킹 발생

2. **여러 폰트 패밀리 사용**

   - Noto Sans KR (3개 굵기)
   - Playfair Display (3개 굵기)
   - Roboto Mono (2개 굵기)

3. **Font Display 전략 없음**

   - FOIT (Flash of Invisible Text) 발생 가능
   - FOUT (Flash of Unstyled Text) 발생 가능

4. **폰트 Preloading 없음**
   - 폰트 로딩 우선순위 낮음

## 🎯 학습 목표

1. **성능 측정 도구 사용법 익히기**

   - Chrome DevTools (Network, Performance, Lighthouse)
   - Web Vitals (LCP, CLS, FID/INP) 측정

2. **문제점 식별 능력 향상**

   - 어떤 리소스가 성능 병목인지 파악
   - 개선 우선순위 결정

3. **최적화 전/후 비교**
   - 정량적 성능 지표 비교
   - 사용자 경험 개선 체감

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3001](http://localhost:3001) 접속

### 3. 프로덕션 빌드 및 실행

```bash
npm run build
npm start
```

## 📊 성능 측정 가이드

### Chrome DevTools 사용

1. **Network 탭**

   ```
   - 개발자 도구 열기 (F12)
   - Network 탭 선택
   - Disable cache 체크
   - Slow 4G 또는 3G 로 스로틀링 설정
   - 페이지 새로고침
   ```

   **측정 항목:**

   - 총 다운로드 용량
   - 이미지 개별 용량
   - 폰트 파일 개수 및 용량
   - 페이지 로드 시간

2. **Lighthouse**

   ```
   - 개발자 도구 > Lighthouse 탭
   - Mode: Navigation
   - Device: Mobile / Desktop
   - Categories: Performance 체크
   - Analyze page load 클릭
   ```

   **주요 지표:**

   - Performance Score
   - LCP (Largest Contentful Paint)
   - CLS (Cumulative Layout Shift)
   - FCP (First Contentful Paint)
   - TBT (Total Blocking Time)

3. **Performance 탭**

   ```
   - Performance 탭 선택
   - Record 시작
   - 페이지 스크롤 및 인터랙션
   - Record 중지
   ```

   **확인 사항:**

   - Main thread 활동
   - Layout Shift 발생 시점
   - 이미지 로딩 타이밍

## 🔗 참고 자료

- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Next.js Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [Web Vitals](https://web.dev/vitals/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
