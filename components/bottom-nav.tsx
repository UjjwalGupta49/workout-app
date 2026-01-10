"use client";

import React from "react";
import { Home, Dumbbell, BarChart2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[380px] z-50">
      <div className="glass rounded-[2rem] px-8 py-4 flex items-center justify-between">
        {/* Home */}
        <Link
          href="/"
          className={`flex flex-col items-center gap-1 transition-all ${
            pathname === "/"
              ? "text-primary scale-110"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <div
            className={`p-2 rounded-full transition-all ${
              pathname === "/" ? "bg-primary/10" : ""
            }`}
          >
            <Home size={24} strokeWidth={pathname === "/" ? 2.5 : 2} />
          </div>
        </Link>

        {/* Workout - Center Featured */}
        <Link
          href="#"
          className="flex flex-col items-center gap-1 transition-all -mt-2"
        >
          <div className="p-4 rounded-full bg-pastel-green shadow-lg transition-all hover:scale-105 active:scale-95">
            <Dumbbell size={28} strokeWidth={2} className="text-white" />
          </div>
        </Link>

        {/* Stats */}
        <Link
          href="#"
          className="flex flex-col items-center gap-1 transition-all text-muted-foreground hover:text-foreground"
        >
          <div className="p-2 rounded-full transition-all">
            <BarChart2 size={24} strokeWidth={2} />
          </div>
        </Link>
      </div>
    </nav>
  );
}
