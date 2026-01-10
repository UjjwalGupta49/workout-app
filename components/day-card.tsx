"use client";

import React from "react";
import {
  CheckCircle2,
  Lock,
  Dumbbell,
  Activity,
  Target,
  Zap,
} from "lucide-react";
import Link from "next/link";

interface DayCardProps {
  dayId: number;
  name: string;
  category: string;
  isCompleted?: boolean;
  isLocked?: boolean;
  isHero?: boolean;
}

export function DayCard({
  dayId,
  name,
  category,
  isCompleted = false,
  isLocked = false,
  isHero = false,
}: DayCardProps) {
  const IconMap = {
    1: Dumbbell,
    2: Activity,
    3: Target,
    4: Zap,
  };
  const Icon = IconMap[dayId as keyof typeof IconMap] || Dumbbell;

  const cardBaseClasses = `
    relative overflow-hidden rounded-[2.5rem] p-6 transition-all duration-300 active:scale-95 cursor-pointer border h-full flex flex-col justify-between
    ${
      isCompleted
        ? "bg-primary/5 border-primary/10"
        : "bg-white border-white/60"
    }
    ${
      isLocked
        ? "opacity-60 grayscale"
        : "dreamy-shadow hover:translate-y-[-4px]"
    }
  `;

  const content = (
    <>
      <div className="flex justify-between items-start mb-4">
        <div
          className={`p-4 rounded-[1.25rem] ${
            isCompleted
              ? "bg-primary/10 text-primary"
              : "bg-secondary text-secondary-foreground"
          }`}
        >
          <Icon size={40} strokeWidth={1.5} />
        </div>
        {isCompleted && (
          <div className="bg-primary/10 text-primary rounded-full p-2">
            <CheckCircle2 size={18} />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-[10px] uppercase font-black tracking-widest text-muted-foreground/60 mb-1">
          {isCompleted ? "COMPLETED" : "UPCOMING"}
        </p>
        <h4 className="text-4xl font-black text-foreground leading-none">
          {name.split(" ")[1] || name}
        </h4>
        <p className="text-sm font-bold text-muted-foreground leading-tight mt-1 opacity-70">
          {category.split("(")[0].trim()}
        </p>
      </div>

      {/* Decorative background element */}
      <div
        className={`absolute bottom-[-20px] right-[-10px] opacity-[0.03] transform rotate-[-15deg] pointer-events-none`}
      >
        <Icon size={140} />
      </div>
    </>
  );

  if (isHero) {
    return (
      <Link href={`/workout/${dayId}`} className="block px-6 mb-4 col-span-2">
        <div className="bg-gradient-to-br from-primary/90 via-primary/80 to-pastel-green/70 rounded-[2.5rem] p-8 dreamy-shadow relative overflow-hidden group active:scale-[0.98] transition-all min-h-[180px]">
          {/* Icon at top-right */}
          <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm text-white p-4 rounded-[1.5rem]">
            <Icon size={32} strokeWidth={1.5} />
          </div>

          {/* Content stacked vertically */}
          <div className="flex flex-col gap-1 pr-20">
            <p className="text-[11px] font-black uppercase text-white/80 tracking-widest">
              UP NEXT
            </p>
            <h3 className="text-5xl font-black text-white leading-none mt-1">
              {name.split(" ")[1]}
            </h3>
            <h4 className="text-xl font-bold text-white/90 mt-1">
              {category.split("(")[0].trim()}
            </h4>
            <p className="text-sm font-medium text-white/70 mt-1">
              {category.includes("(")
                ? category.split("(")[1].replace(")", "").split("&").join(" • ")
                : "Start your session"}
            </p>
          </div>

          {/* Play button at bottom-right */}
          <div className="absolute bottom-6 right-6 w-14 h-14 rounded-full bg-white/90 text-foreground flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="none"
            >
              <path d="m5 3 14 9-14 9V3z" />
            </svg>
          </div>

          {/* Subtle background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08] pointer-events-none">
            <Icon size={200} strokeWidth={0.5} />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/workout/${dayId}`} className={cardBaseClasses}>
      {content}
    </Link>
  );
}
