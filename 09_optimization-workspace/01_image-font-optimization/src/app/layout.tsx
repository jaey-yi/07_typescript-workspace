import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_KR, Playfair } from "next/font/google";

export const metadata: Metadata = {
  title: "이미지 & 폰트 최적화",
  description: "최적화를 통해 성능을 개선하세요.",
};

/*
 최적화 : next/font/google 로 구글폰트 최적화
 - 빌드 시점에 폰트 다운로드 ->  정적 assets 런타임 네트워크 요청 없음
  => self-hosted 폰트 -> 성능 개선, 개인정보 보호 향상
*/

//Noto sans KR 폰트 최적화

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"], // 웹 폰트 서브셋 지정
  weight: ["400", "700"], // 폰트 굵기
  display: "swap", // 폰트 디스플레이 전략
  variable: "--font-noto-sans",
});

const playfairDisplay = Playfair({
  subsets: ["latin"], // 웹 폰트 서브셋 지정
  weight: ["400", "700"], // 폰트 굵기
  display: "swap", // 폰트 디스플레이 전략
  variable: "--font-playfair-display",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
