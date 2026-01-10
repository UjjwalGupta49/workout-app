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
        <div className="bg-white/90 border border-primary/20 rounded-[2.5rem] p-8 dreamy-shadow relative overflow-hidden group active:scale-95 transition-all">
          <div className="flex gap-6 items-center">
            <div className="bg-primary/20 text-primary p-6 rounded-[2rem]">
              <Icon size={48} strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-black uppercase text-primary tracking-widest mb-1">
                UP NEXT
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-5xl font-black text-foreground leading-none">
                  {name.split(" ")[1]}
                </h3>
                <h3 className="text-xl font-bold text-foreground truncate">
                  {name.split(":")[1] || category.split("(")[0].trim()}
                </h3>
              </div>
              <p className="text-sm font-bold text-muted-foreground leading-tight mt-2 italic opacity-60">
                {category.includes("(")
                  ? category.split("(")[1].replace(")", "")
                  : "Active Session"}
              </p>
            </div>
            <div className="w-16 h-16 rounded-full bg-foreground text-white flex items-center justify-center group-hover:bg-primary transition-colors shadow-xl">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m5 3 14 9-14 9V3z" />
              </svg>
            </div>
          </div>

          {/* Subtle background illustration hint - a faint human figure pattern could be added here */}
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 opacity-[0.05] pointer-events-none">
            <Activity size={180} />
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
