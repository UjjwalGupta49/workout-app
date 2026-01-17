"use client";

import React from "react";
import { Flame, Trophy } from "lucide-react";
import { useWorkoutStore } from "@/stores/workout-store";

interface GreetingHeaderProps {
  userName?: string;
  weeklyGoal?: number;
}

export function GreetingHeader({
  userName = "Ujjwal",
  weeklyGoal = 5,
}: GreetingHeaderProps) {
  const { completedDays } = useWorkoutStore();

  // Calculate workouts completed this week
  const now = new Date();
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - now.getDay()); // Sunday
  startOfWeek.setHours(0, 0, 0, 0);

  const workoutsThisWeek = completedDays.filter((d) => {
    const completedDate = new Date(d.date);
    return completedDate >= startOfWeek;
  }).length;

  const progress = Math.min(workoutsThisWeek / weeklyGoal, 1);
  const isGoalMet = workoutsThisWeek >= weeklyGoal;

  // Get greeting based on time of day
  const hour = new Date().getHours();
  let greeting = "Good Morning";
  if (hour >= 12 && hour < 17) greeting = "Good Afternoon";
  if (hour >= 17) greeting = "Good Evening";

  // Determine streak message
  let streakMessage = "Keep going!";
  if (workoutsThisWeek === 0) streakMessage = "Start your week strong!";
  else if (workoutsThisWeek === 1) streakMessage = "Great start!";
  else if (workoutsThisWeek === 2) streakMessage = "Building momentum!";
  else if (workoutsThisWeek === 3) streakMessage = "You're doing great!";
  else if (workoutsThisWeek === 4) streakMessage = "Almost there!";
  else if (isGoalMet) streakMessage = "Goal achieved! 🎉";

  return (
    <div className="px-6 py-8 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-muted-foreground text-xs font-semibold uppercase tracking-widest lowercase-none">
            {greeting}
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {userName}
          </h1>
        </div>
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 p-0.5">
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-pastel-green to-pastel-blue" />
        </div>
      </div>

      <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-4 flex items-center gap-4 border border-white/40 dreamy-shadow">
        <div className="relative w-12 h-12 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="currentColor"
              strokeWidth="4"
              fill="transparent"
              className="text-muted/30"
            />
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="currentColor"
              strokeWidth="4"
              fill="transparent"
              strokeDasharray={2 * Math.PI * 20}
              strokeDashoffset={2 * Math.PI * 20 * (1 - progress)}
              strokeLinecap="round"
              className={isGoalMet ? "text-pastel-green" : "text-primary"}
            />
          </svg>
          <span className="absolute text-[10px] font-bold">
            {workoutsThisWeek}/{weeklyGoal}
          </span>
        </div>
        <div>
          <p className="text-sm font-bold text-foreground">Weekly Goal</p>
          <div className="flex items-center gap-1">
            <p className="text-xs text-muted-foreground font-medium">
              {streakMessage}
            </p>
            {isGoalMet ? (
              <Trophy size={14} className="text-yellow-500 fill-yellow-500" />
            ) : workoutsThisWeek > 0 ? (
              <Flame size={14} className="text-orange-400 fill-orange-400" />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
