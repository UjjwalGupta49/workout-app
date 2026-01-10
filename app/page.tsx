"use client";

import { MobileShell } from "@/components/mobile-shell";
import { GreetingHeader } from "@/components/greeting-header";
import { LastSessionCard } from "@/components/last-session-card";
import { RoutineGrid } from "@/components/routine-grid";
import { BottomNav } from "@/components/bottom-nav";
import { DynamicCta } from "@/components/dynamic-cta";

import { useWorkoutStore } from "@/stores/workout-store";
import { WORKOUT_ROUTINE } from "@/lib/workout-data";

export default function Home() {
  const store = useWorkoutStore();
  const lastCompleted =
    store.completedDays.length > 0
      ? store.completedDays[store.completedDays.length - 1]
      : null;

  const lastWorkout = lastCompleted
    ? WORKOUT_ROUTINE.find((w) => w.id === lastCompleted.dayId)
    : null;

  // Format date like "Oct 24"
  const formattedDate = lastCompleted
    ? new Date(lastCompleted.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })
    : "";

  return (
    <MobileShell>
      <GreetingHeader userName="Ujjwal" />

      {lastWorkout && (
        <LastSessionCard
          dayName={`${lastWorkout.name}: ${lastWorkout.category
            .split("(")[0]
            .trim()}`}
          date={formattedDate}
          duration="45 mins"
        />
      )}

      <RoutineGrid />

      <DynamicCta />

      <BottomNav />
    </MobileShell>
  );
}
