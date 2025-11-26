import Link from "next/link";
import { ReactNode } from "react";

export default function mypagelayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-6">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-50 border-r border-gray-200 p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">마이페이지</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link href="/mypage">마이페이지 </Link>
            </li>
            <li>
              <Link href="/mypage/order">주문내역 </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Content Area */}
      <div className="flex-1 border border-gray-200 rounded-md p-6 ">
        {/* 라우팅별 하위 페이지컴포넌트가 보여질 자리 */}
        {children}
      </div>
    </div>
  );
}
