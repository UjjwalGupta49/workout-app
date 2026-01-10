"use client";

import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface LastSessionCardProps {
  dayName?: string;
  date?: string;
  duration?: string;
}

export function LastSessionCard({
  dayName = "Day 02: Lower Body",
  date = "Oct 24",
  duration = "45 mins",
}: LastSessionCardProps) {
  return (
    <div className="px-6 mb-8">
      <div className="bg-white/60 backdrop-blur-md rounded-[2.5rem] p-8 border border-white/40 dreamy-shadow flex items-center justify-between relative overflow-hidden group active:scale-95 transition-transform cursor-pointer">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10" />

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-primary/70 font-bold text-[10px] uppercase tracking-wider">
            <CheckCircle2 size={14} />
            LAST SESSION
          </div>
          <h3 className="text-xl font-bold text-foreground">{dayName}</h3>
          <p className="text-sm text-muted-foreground font-medium">
            {date} • {duration}
          </p>
        </div>

        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
          <ArrowRight size={20} strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
}
