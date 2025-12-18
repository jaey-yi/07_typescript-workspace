import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
  /* config options here */
};

// 번들 분석기 설정 - 번들 분석기 설정 래핑 객체 생성
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true", // 빌드 시 analyze 플래그가 true일 때만 활성화
  openAnalyzer: true, // 번들 분석기 활성화 된 채로 빌드 완료 => 분석결과 페이지 브라우저로 자동열기
});

export default bundleAnalyzer(nextConfig);
