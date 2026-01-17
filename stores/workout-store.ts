import { create } from "zustand";
import { persist } from "zustand/middleware";
import { SessionState, ActivityEntry } from "../lib/types";

interface WorkoutActions {
  startSession: (dayId: number) => void;
  completeSession: (dayId: number) => void;
  toggleExercise: (
    dayId: number,
    exerciseId: string,
    isComplete: boolean,
  ) => void;
  clearProgress: () => void;
  getNextDayId: () => number;
  isWorkoutCompleted: (dayId: number) => boolean;
}

export const useWorkoutStore = create<SessionState & WorkoutActions>()(
  persist(
    (set, get) => ({
      completedDays: [],
      activeSession: null,
      completedExercises: {},
      activityLog: [],

      startSession: (dayId) => {
        const now = new Date().toISOString();
        set((state) => ({
          activeSession: { dayId, startedAt: now },
          activityLog: [
            ...state.activityLog,
            { type: "session_started", dayId, date: now },
          ],
        }));
      },

      completeSession: (dayId) => {
        const now = new Date().toISOString();
        set((state) => ({
          completedDays: [...state.completedDays, { dayId, date: now }],
          activeSession: null,
          completedExercises: {}, // Clear session exercises
          activityLog: [
            ...state.activityLog,
            { type: "session_completed", dayId, date: now },
          ],
        }));
      },

      toggleExercise: (dayId, exerciseId, isComplete) => {
        const now = new Date().toISOString();
        set((state) => ({
          completedExercises: {
            ...state.completedExercises,
            [exerciseId]: isComplete,
          },
          activityLog: [
            ...state.activityLog,
            { type: "exercise_toggle", dayId, exerciseId, date: now },
          ],
        }));
      },

      clearProgress: () => {
        set({
          completedDays: [],
          activeSession: null,
          completedExercises: {},
          activityLog: [],
        });
      },

      getNextDayId: () => {
        const { completedDays } = get();
        if (completedDays.length === 0) return 1;

        // Find the last completed day
        const lastCompleted = completedDays[completedDays.length - 1].dayId;

        // If all 5 are done, reset to 1
        if (completedDays.length % 5 === 0) return 1;

        return (lastCompleted % 5) + 1;
      },

      isWorkoutCompleted: (dayId) => {
        const { completedDays } = get();
        // For simplicity, we check if the most recent completion cycle includes this day
        // Or more accurately, if it's the most recent day in its position
        const cycleIndex = Math.floor((completedDays.length - 1) / 5);
        const thisCycleCompletions = completedDays.slice(cycleIndex * 5);
        return thisCycleCompletions.some((d) => d.dayId === dayId);
      },
    }),
    {
      name: "aura-gym-storage",
    },
  ),
);
