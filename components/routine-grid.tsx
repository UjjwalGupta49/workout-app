"use client";

import React from "react";
import { DayCard } from "./day-card";
import { WORKOUT_ROUTINE } from "../lib/workout-data";
import { Plus } from "lucide-react";
import { useWorkoutStore } from "@/stores/workout-store";

export function RoutineGrid() {
  const store = useWorkoutStore();
  const nextDayId = store.getNextDayId();

  // We want to show all 4 days.
  // Row 1: Days before nextDayId (or just early days)
  // Row 2: nextDayId (Hero)
  // Row 3: Remaining days + Add Session

  const daysInOrder = [1, 2, 3, 4];

  // To match the design: 01 and 02 on top, 03 is hero, 04 and Add Session on bottom
  // But let's make it actually dynamic.
  // We'll create a layout based on the 4 days.

  const day1 = WORKOUT_ROUTINE.find((d) => d.id === 1);
  const day2 = WORKOUT_ROUTINE.find((d) => d.id === 2);
  const day3 = WORKOUT_ROUTINE.find((d) => d.id === 3);
  const day4 = WORKOUT_ROUTINE.find((d) => d.id === 4);

  const getStatus = (id: number) => {
    if (id === nextDayId) return "hero";
    if (store.isWorkoutCompleted(id)) return "completed";
    return "upcoming";
  };

  return (
    <div className="flex flex-col">
      <div className="px-6 flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Your Routine</h2>
        <button className="text-primary font-bold text-sm tracking-tight active:opacity-50 transition-opacity">
          View Full Plan
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 px-6">
        {WORKOUT_ROUTINE.map((day) => {
          const isHero = day.id === nextDayId;
          const isCompleted = store.isWorkoutCompleted(day.id);

          return (
            <DayCard
              key={day.id}
              dayId={day.id}
              name={day.name}
              category={day.category}
              isHero={isHero}
              isCompleted={isCompleted}
            />
          );
        })}

        <div className="aspect-[4/5] rounded-[2.5rem] border-2 border-dashed border-muted-foreground/20 flex flex-col items-center justify-center gap-2 group active:scale-95 transition-all cursor-pointer hover:border-primary/30 hover:bg-primary/5 bg-white/30 mb-8">
          <div className="w-12 h-12 rounded-full bg-muted/40 flex items-center justify-center text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
            <Plus size={32} strokeWidth={2.5} />
          </div>
          <span className="text-xs font-black text-muted-foreground group-hover:text-primary uppercase tracking-widest">
            Add Session
          </span>
        </div>
      </div>
    </div>
  );
}
