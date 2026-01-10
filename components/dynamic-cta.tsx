"use client";

import React, { useMemo } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useWorkoutStore } from "@/stores/workout-store";

export function DynamicCta() {
  const store = useWorkoutStore();
  const nextDayId = store.getNextDayId();

  return (
    <div className="fixed bottom-32 left-1/2 -translate-x-1/2 z-40 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Link href={`/workout/${nextDayId}`}>
        <button className="bg-foreground text-background font-semibold flex items-center gap-3 px-6 py-3.5 rounded-full shadow-xl active:scale-95 transition-all text-sm tracking-tight hover:shadow-2xl">
          Ready for Day {nextDayId}?
          <ArrowRight size={16} strokeWidth={2.5} />
        </button>
      </Link>
    </div>
  );
}
