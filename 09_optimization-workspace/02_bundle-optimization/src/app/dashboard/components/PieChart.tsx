"use client";

import sumBy from "lodash/sumBy";
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

export default function Piechart({
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
  const pieChartData = {
    labels: ["매출", "순이익", "지출"],
    datasets: [
      {
        data: [
          sumBy(salesData, "sales"),
          sumBy(salesData, "profit"),
          sumBy(salesData, "expenses"),
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],

        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
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
    <div>
      <button
        onClick={() => setSelectedChart("pie")}
        className={`px-4 py-2 rounded ${
          selectedChart === "pie"
            ? "bg-blue-500 text-white"
            : "bg-white text-gray-700 border"
        }`}
      >
        파이 차트
      </button>
    </div>
  );
}
