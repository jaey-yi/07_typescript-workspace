"use client";

import { useState } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import Piechart from "./PieChart";

export default function Charts({
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
  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="h-96">
          {selectedChart === "line" && <BarChart salesData={salesData} />}
          {selectedChart === "bar" && <LineChart salesData={salesData} />}
          {selectedChart === "pie" && <Piechart salesData={salesData} />}
        </div>
      </div>
    </>
  );
}
