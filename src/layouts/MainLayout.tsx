import type { ReactNode } from "react";
import Navbar from "../components/navbar";

export default function MainLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gray-100">
      <Navbar />
      <main className="flex-1 overflow-hidden">
        {children}
      </main>
    </div>
  );
}
