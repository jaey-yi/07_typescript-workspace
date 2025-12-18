"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 
        ⚠️ 최적화 안됨: 
        1. Next.js Image 컴포넌트 대신 일반 img 태그 사용
        2. 큰 용량의 원본 이미지 직접 로드 (3MB+)
        3. lazy loading 없음
        4. 반응형 이미지 없음 (모바일에서도 큰 이미지 로드)
      */}
      <Image
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=3840&h=2160&q=100&fm=jpg&fit=max"
        alt="Hero Background"
        className="object-cover z-0"
        fill
        sizes="100vw"
        quality={75}
        priority
      />

      <div className="absolute inset-0 bg-black/40 z-[1]" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-center font-sans">
          Beautiful Gallery
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
          최적화되지 않은 이미지와 폰트로 인한 성능 문제를 경험해보세요
        </p>
        <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-200 transition">
          둘러보기
        </button>
      </div>
    </section>
  );
}
