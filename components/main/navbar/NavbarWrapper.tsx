"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar"; // 실제 Navbar 컴포넌트 경로

export default function NavbarWrapper() {
  const pathname = usePathname();
  
  // /auth로 시작하는 주소에서는 Navbar를 렌더링하지 않음
  const isAuthPage = pathname.startsWith("/auth");

  if (isAuthPage) return null;

  return <Navbar />;
}