"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { ExerciseCard } from "./exercise-card";
import { WorkoutDay } from "@/lib/types";
import { useWorkoutStore } from "@/stores/workout-store";
import { ChevronLeft } from "lucide-react";

interface ExerciseScrollProps {
  workout: WorkoutDay;
}

export function ExerciseScroll({ workout }: ExerciseScrollProps) {
  const store = useWorkoutStore();
  const exercises = workout.exercises;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const completedCount = exercises.filter(
    (e) => store.completedExercises[e.id]
  ).length;

  const isAllComplete = completedCount === exercises.length;

  const calculateCurrentIndex = useCallback(() => {
    if (!scrollRef.current) return 0;
    const scrollTop = scrollRef.current.scrollTop;
    const height = scrollRef.current.clientHeight;
    if (height === 0) return 0;
    const index = Math.round(scrollTop / height);
    return Math.max(0, Math.min(index, exercises.length - 1));
  }, [exercises.length]);

  const handleScroll = useCallback(() => {
    setCurrentIndex(calculateCurrentIndex());
  }, [calculateCurrentIndex]);

  // Initialize current index on mount and when exercises change
  useEffect(() => {
    // Use a small delay to ensure the container has rendered with correct dimensions
    const initializeIndex = () => {
      setCurrentIndex(calculateCurrentIndex());
    };
    initializeIndex();
    // Also listen for resize in case dimensions change
    window.addEventListener("resize", initializeIndex);
    return () => window.removeEventListener("resize", initializeIndex);
  }, [calculateCurrentIndex]);

  return (
    <div className="w-full h-screen bg-black overflow-hidden relative">
      {/* Top Header Overlays */}
      <div className="absolute top-0 left-0 w-full p-6 pt-[env(safe-area-inset-top)] z-50 flex justify-between items-center pointer-events-none">
        <button
          onClick={() => window.history.back()}
          className="bg-white/20 backdrop-blur-md p-3 rounded-2xl active:scale-90 transition-transform pointer-events-auto"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>

        {isAllComplete ? (
          <button
            onClick={() => {
              store.completeSession(workout.id);
              window.history.back();
            }}
            className="bg-pastel-green px-6 py-2 rounded-full border border-white/20 pointer-events-auto active:scale-95 transition-transform"
          >
            <p className="text-xs font-black text-foreground">Finish Workout</p>
          </button>
        ) : (
          <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 pointer-events-auto">
            <p className="text-xs font-black text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pastel-green animate-pulse" />
              {completedCount}/{exercises.length} Exercises
            </p>
          </div>
        )}
      </div>

      {/* Navigation Indicators - Tracks scroll position */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {exercises.map((e, idx) => {
          const isCurrent = idx === currentIndex;
          const isCompleted = store.completedExercises[e.id];
          return (
            <div
              key={e.id}
              className={`w-1 rounded-full transition-all duration-300 ${
                isCurrent
                  ? "h-10 bg-pastel-green"
                  : isCompleted
                  ? "h-8 bg-primary"
                  : "h-8 bg-white/20"
              }`}
            />
          );
        })}
      </div>

      {/* Infinite Scroll Container (Vertical snapped scroll) */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="w-full h-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory scrollbar-hide"
      >
        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            isCompleted={!!store.completedExercises[exercise.id]}
            onToggleComplete={() =>
              store.toggleExercise(
                workout.id,
                exercise.id,
                !store.completedExercises[exercise.id]
              )
            }
          />
        ))}
      </div>
    </div>
  );
}
