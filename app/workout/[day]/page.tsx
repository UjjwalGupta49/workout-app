"use client";

import { useParams, notFound } from "next/navigation";
import { WORKOUT_ROUTINE } from "@/lib/workout-data";
import { ExerciseScroll } from "@/components/exercise-scroll";
import { useWorkoutStore } from "@/stores/workout-store";
import { useEffect, useRef } from "react";

export default function WorkoutSessionPage() {
  const params = useParams();
  const dayId = parseInt(params.day as string);
  const { startSession } = useWorkoutStore();
  const hasStartedSession = useRef(false);

  const workout = WORKOUT_ROUTINE.find((w) => w.id === dayId);

  useEffect(() => {
    if (workout && !hasStartedSession.current) {
      hasStartedSession.current = true;
      startSession(workout.id);
    }
  }, [workout, startSession]);

  if (!workout) {
    return notFound();
  }

  return <ExerciseScroll workout={workout} />;
}
