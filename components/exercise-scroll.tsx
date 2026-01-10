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
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(0); // Ref for scroll calculations (avoids stale closures)
  const isScrolling = useRef(false);

  const completedCount = exercises.filter(
    (e) => store.completedExercises[e.id]
  ).length;

  const isAllComplete = completedCount === exercises.length;

  // Scroll to a specific index
  const scrollToIndex = useCallback(
    (index: number) => {
      if (!scrollRef.current) return;
      const targetIndex = Math.max(0, Math.min(index, exercises.length - 1));
      const height = scrollRef.current.clientHeight;
      scrollRef.current.scrollTo({
        top: targetIndex * height,
        behavior: "smooth",
      });
      currentIndexRef.current = targetIndex; // Update ref immediately
      setCurrentIndex(targetIndex); // Update state for UI
    },
    [exercises.length]
  );

  // Handle wheel events to ensure single-slide scrolling
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling.current) return;

      isScrolling.current = true;
      const direction = e.deltaY > 0 ? 1 : -1;
      scrollToIndex(currentIndexRef.current + direction); // Use ref, not state

      // Debounce: prevent rapid scrolling
      setTimeout(() => {
        isScrolling.current = false;
      }, 600); // Slightly longer debounce
    },
    [scrollToIndex] // No longer depends on currentIndex
  );

  // Handle touch events for mobile swipe
  const touchStartY = useRef(0);
  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback(
    (e: TouchEvent) => {
      if (isScrolling.current) return;
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY.current - touchEndY;

      // Minimum swipe distance threshold
      if (Math.abs(diff) > 50) {
        isScrolling.current = true;
        const direction = diff > 0 ? 1 : -1;
        scrollToIndex(currentIndexRef.current + direction); // Use ref, not state
        setTimeout(() => {
          isScrolling.current = false;
        }, 600);
      }
    },
    [scrollToIndex] // No longer depends on currentIndex
  );

  // Attach wheel and touch event listeners
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleWheel, handleTouchStart, handleTouchEnd]);

  // Preload the next exercise image
  useEffect(() => {
    const nextIdx = currentIndex + 1;
    if (nextIdx < exercises.length && exercises[nextIdx].imageUrl) {
      const img = new window.Image();
      img.src = exercises[nextIdx].imageUrl;
    }
  }, [currentIndex, exercises]);

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

      {/* Scroll Container (Programmatic single-slide control) */}
      <div
        ref={scrollRef}
        className="w-full h-full overflow-hidden scrollbar-hide"
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
