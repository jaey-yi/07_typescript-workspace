"use client";

import { useState } from "react";
import Link from "next/link";

import debounce from "lodash/debounce";

// ❌ 문제점 1: lodash 전체를 import (트리쉐이킹 X)
// lodash 전체를 import하면 사용하지 않는 함수들도 모두 번들에 포함됩니다.
import chunk from "lodash/chunk";
import sum from "lodash/sum";
import mean from "lodash/mean";
import shuffle from "lodash/shuffle";
import camelCase from "lodash/camelCase";
import snakeCase from "lodash/snakeCase";
import kebabCase from "lodash/kebabCase";
import capitalize from "lodash/capitalize";

// ❌ 문제점 2: 무거운 moment 라이브러리 사용
// moment.js는 무거운 라이브러리입니다. (따라서 현재는 많이 사용하지 않는 레거시 라이브러입니다.)
import dayjs from "dayjs";
import "dayjs/locale/ko";

// ❌ 문제점 3: axios 라이브러리 import 사용 => 간단한 GET 요청은 fetch API로 충분
// => axios 사용 x, fetch API 활용 권장

export default function UtilsPage() {
  const [inputText, setInputText] = useState("");
  const [debouncedText, setDebouncedText] = useState("");

  // ❌ 문제점 1과 연관: lodash의 다양한 함수들 사용 (하지만 전체를 import)
  const handleDebounce = debounce((value: string) => {
    // lodash
    setDebouncedText(value);
  }, 500);
  // lodash 활용하여 배열 처리
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const chunks = chunk(numbers, 3); // lodash
  const shuffled = shuffle([...numbers]); // lodash
  const sumValue = sum(numbers); // lodash
  const average = mean(numbers); // lodash
  // lodash 활용하여 문자열 처리
  const sampleText = "hello world from lodash";
  const camelCased = camelCase(sampleText); // lodash
  const snakeCased = snakeCase(sampleText); // lodash
  const kebabCased = kebabCase(sampleText); // lodash
  const capitalized = capitalize(sampleText); // lodash

  // ❌ 문제점 2와 연관: 무거운 moment 라이브러리 사용
  // => dayjs로 대체
  const formatted = dayjs().format("YYYY년 MM월 DD일 HH시 mm분 ss초"); // moment
  const nextWeek = dayjs().add(7, "days").format("YYYY-MM-DD"); // moment

  // ❌ 문제점 3과 연관: 간단한 GET 요청의 API 호출 (axios 사용)
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      const data = await response.json();
      console.log("Data:", data);
      alert("데이터 조회 성공! (콘솔 확인)");
    } catch (error) {
      console.error("Error:", error);
      alert("에러 발생!");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputText(value);
    handleDebounce(value);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">유틸리티 페이지</h1>
          <Link
            href="/"
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            홈으로
          </Link>
        </div>

        <div className="bg-red-50 border-l-4 border-r-400 p-4 mb-6">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">
                이 페이지의 문제점
              </h3>
              <div className="mt-2 text-sm text-green-700">
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    lodash 전체 import (70KB+) → 트리쉐이킹 X (실제로는 몇 개
                    함수만 사용)
                  </li>
                  <li>moment.js 사용 (300KB+) → 무겁고 레거시된 라이브러리</li>
                  <li>axios import (13KB) → API 요청을 위한 라이브러리</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Lodash */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Lodash 함수들
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Debounce 테스트
                </label>
                <input
                  type="text"
                  value={inputText}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="입력해보세요..."
                />
                <p className="mt-2 text-sm text-gray-500">
                  Debounced: {debouncedText || "(입력 대기중)"}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">배열 처리</h3>
                <div className="text-sm space-y-1">
                  <p>원본: {JSON.stringify(numbers)}</p>
                  <p>Chunks (3개씩): {JSON.stringify(chunks)}</p>
                  <p>Shuffled: {JSON.stringify(shuffled)}</p>
                  <p>Sum: {sumValue}</p>
                  <p>Average: {average}</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  문자열 변환
                </h3>
                <div className="text-sm space-y-1">
                  <p>원본: {sampleText}</p>
                  <p>camelCase: {camelCased}</p>
                  <p>snake_case: {snakeCased}</p>
                  <p>kebab-case: {kebabCased}</p>
                  <p>Capitalize: {capitalized}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Moment */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">날짜 처리</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">현재 시간</h3>
                <div className="text-sm space-y-1">
                  <p>포맷: {formatted}</p>
                  <p>다음주: {nextWeek}</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">날짜 계산</h3>
                <div className="text-sm space-y-1">
                  {/* ❌ 문제점 2와 연관: 무거운 moment 라이브러리 사용 */}
                  <p>30일 후: {dayjs().add(30, "days").format("YYYY-MM-DD")}</p>
                  <p>
                    3개월 전:{" "}
                    {dayjs().subtract(3, "months").format("YYYY-MM-DD")}
                  </p>
                  <p>
                    올해 시작: {dayjs().startOf("year").format("YYYY-MM-DD")}
                  </p>
                  <p>
                    이번달 마지막: {dayjs().endOf("month").format("YYYY-MM-DD")}
                  </p>
                </div>
              </div>

              {/* Axios */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">API 테스트</h3>
                <button
                  onClick={fetchData}
                  className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  API 호출하기
                </button>
                <p className="mt-2 text-xs text-gray-500">
                  * 간단한 GET 요청은 fetch API로도 충분합니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
