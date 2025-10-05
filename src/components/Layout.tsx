import { ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <div className="pt-20">{/* offset for fixed navbar */}
        {children}
      </div>
    </div>
  );
}