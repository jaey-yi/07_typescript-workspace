"use client";
import dayjs from "dayjs";
import "dayjs/locale/ko";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  ArcElement,
} from "chart.js";
import { Line, Bar, Pie } from "react-chartjs-2";
import { useState } from "react";

// Chart.js가 그려지기 위해 필요한 컴포넌트들을 등록
ChartJS.register(
  Title, // 제목 (차트 제목)
  Tooltip, // 툴팁 (차트 툴팁)
  Legend, // 범례 (차트 범례)
  CategoryScale, // 카테고리 축
  LinearScale, // 선형 축
  LineElement, // 선 요소 (Line 차트)
  PointElement, // 점 요소 (Line 차트)
  BarElement, // 바 요소 (Bar 차트)
  ArcElement // 원 요소 (Pie 차트)
);

export default function BarChart({
  salesData,
}: {
  salesData: {
    month: string;
    sales: number;
    profit: number;
    expenses: number;
  }[];
}) {
  const [selectedChart, setSelectedChart] = useState<"line" | "bar" | "pie">(
    "line"
  );
  // Bar 차트 데이터
  const barChartData = {
    labels: salesData.map((d) => d.month),
    datasets: [
      {
        label: "지출",
        data: salesData.map((d) => d.expenses),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  // 차트 옵션
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `${dayjs().format("YYYY년")} 실적 현황`,
      },
    },
  };

  return (
    <div className="mb-6 flex gap-4">
      <button
        onClick={() => setSelectedChart("bar")}
        className={`px-4 py-2 rounded ${
          selectedChart === "bar"
            ? "bg-blue-500 text-white"
            : "bg-white text-gray-700 border"
        }`}
      >
        바 차트
      </button>
    </div>
  );
}
