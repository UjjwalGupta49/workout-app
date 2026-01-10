export interface Exercise {
  id: string;
  name: string;
  description: string;
  sets: number | string;
  reps?: string;
  hold?: string;
  tags: string[];
  infoUrl: string;
  imageUrl?: string;
}

export interface WorkoutDay {
  id: number;
  name: string;
  category: string;
  exercises: Exercise[];
}

export interface ActivityEntry {
  type: "session_started" | "session_completed" | "exercise_toggle";
  dayId?: number;
  exerciseId?: string;
  date: string;
}

export interface SessionState {
  completedDays: { dayId: number; date: string }[];
  activeSession: { dayId: number; startedAt: string } | null;
  completedExercises: Record<string, boolean>;
  activityLog: ActivityEntry[];
}
