import { WorkoutDay } from "./types";

export const WORKOUT_ROUTINE: WorkoutDay[] = [
  {
    id: 1,
    name: "Day 01",
    category: "Upper Body A (Push & V-Taper)",
    exercises: [
      {
        id: "1-3",
        name: "Wide-Grip Overhand Pull-ups",
        description: "Aim for chest-to-bar. Full range of motion.",
        sets: "2–3",
        reps: "Failure",
        tags: ["Back", "V-Taper"],
        infoUrl: "https://strengthlevel.com/strength-standards/pull-ups",
        imageUrl:
          "https://static.strengthlevel.com/images/exercises/pull-ups/pull-ups-800.avif",
      },
      {
        id: "1-4",
        name: "Dips",
        description: "Perform full reps or static holds for 30–60s.",
        sets: 3,
        hold: "30–60s",
        tags: ["Chest", "Triceps"],
        infoUrl: "https://www.youtube.com/shorts/P5TlJiu68lA",
        imageUrl:
          "https://static.strengthlevel.com/images/exercises/dips/dips-800.avif",
      },
      {
        id: "1-1",
        name: "Incline Dumbbell Bench Press",
        description: "Focus on the upper chest. Control the eccentric phase.",
        sets: 3,
        reps: "8–12",
        tags: ["Chest", "Upper"],
        infoUrl:
          "https://strengthlevel.com/strength-standards/incline-dumbbell-bench-press",
        imageUrl:
          "https://static.strengthlevel.com/images/exercises/incline-dumbbell-bench-press/incline-dumbbell-bench-press-800.avif",
      },
      {
        id: "1-7",
        name: "Decline Bench Press",
        description: "Targets lower chest. Keep shoulders pinned back.",
        sets: 3,
        reps: "8–12",
        tags: ["Chest", "Lower"],
        infoUrl:
          "https://strengthlevel.com/strength-standards/decline-bench-press",
        imageUrl:
          "https://static.strengthlevel.com/images/exercises/decline-bench-press/decline-bench-press-800.avif",
      },
      {
        id: "1-2",
        name: "Chest-Supported Lateral Raises",
        description: "Lead with elbows for side delts. Keep tension.",
        sets: "2–3",
        reps: "12–15",
        tags: ["Shoulders", "Delts"],
        infoUrl: "https://www.youtube.com/shorts/FW8mnBUyFGM",
        imageUrl:
          "https://api.smartworkout.app/asset/image/dca6649c-371e-396c-2175-2b2a04ea1628",
      },
      {
        id: "1-6",
        name: "Dumbbell Chest Fly (Becfly)",
        description:
          "Focus on the stretch at the bottom. Slight bend in elbows.",
        sets: 3,
        reps: "10–12",
        tags: ["Chest", "Isolation"],
        infoUrl: "https://strengthlevel.com/strength-standards/dumbbell-fly",
        imageUrl:
          "https://static.strengthlevel.com/images/exercises/dumbbell-fly/dumbbell-fly-800.avif",
      },
      {
        id: "1-5",
        name: "Passive Hangs",
        description: "Hold for scapular strength. Keep core engaged.",
        sets: 2,
        hold: "1m",
        tags: ["Grip", "Scapula"],
        infoUrl: "https://strengthlevel.com/strength-standards/pull-ups",
        imageUrl:
          "https://static.strengthlevel.com/images/exercises/pull-ups/pull-ups-800.avif",
      },
    ],
  },
  {
    id: 2,
    name: "Day 02",
    category: "Lower Body A (Quads & Foundation)",
    exercises: [
      {
        id: "2-5",
        name: "Hack Squats",
        description: "Machine squat focus. Go deep and control the weight.",
        sets: 3,
        reps: "8–10",
        tags: ["Quads", "Machine"],
        infoUrl: "https://strengthlevel.com/strength-standards/hack-squat",
        imageUrl:
          "https://static.strengthlevel.com/images/exercises/hack-squat/hack-squat-800.avif",
      },
      {
        id: "2-6",
        name: "Leg Press",
        description: "Heavy compound movement. Don't lock out knees.",
        sets: 3,
        reps: "10–12",
        tags: ["Legs", "Compound"],
        infoUrl: "https://strengthlevel.com/strength-standards/sled-leg-press",
        imageUrl:
          "https://static.strengthlevel.com/images/exercises/sled-leg-press/sled-leg-press-800.avif",
      },
      {
        id: "2-1",
        name: "Pistol Squat",
        description: "Use a bench if needed. Focus on balance.",
        sets: 3,
        reps: "5–10 per leg",
        tags: ["Quads", "Single-Leg"],
        infoUrl: "https://www.youtube.com/shorts/bH3mRwnAN88",
        imageUrl:
          "https://api.smartworkout.app/asset/image/31c99306-6ba3-4709-9c0b-9aaee3f0eedf",
      },
      {
        id: "2-2",
        name: "Alternating Lunges",
        description: "Step forward and lower hips. Keep torso upright.",
        sets: 3,
        reps: "12 per leg",
        tags: ["Quads", "Stability"],
        infoUrl:
          "https://smartworkout.app/en/exercise-library/legs/dumbbell-walking-lunges",
        imageUrl:
          "https://static.strengthlevel.com/images/exercises/dumbbell-lunge/dumbbell-lunge-800.avif",
      },
      {
        id: "2-4",
        name: "Hollow Body Hold",
        description: "Hold with a rounded upper back. Core tight.",
        sets: 3,
        hold: "30–60s",
        tags: ["Core", "Skill"],
        infoUrl: "https://www.youtube.com/shorts/Xk-JcNj6lfY",
        imageUrl:
          "https://api.smartworkout.app/asset/image/ed44771d-fddc-47e9-9881-0ae53427b57e",
      },
      {
        id: "2-3",
        name: "Resting Squat Hold",
        description: "Deep squat for hip and ankle mobility.",
        sets: 1,
        hold: "2m",
        tags: ["Mobility", "Hips"],
        infoUrl:
          "https://strengthlevel.com/strength-standards/bodyweight-squat",
        imageUrl:
          "https://static.strengthlevel.com/images/exercises/bodyweight-squat/bodyweight-squat-800.avif",
      },
    ],
  },
  {
    id: 3,
    name: "Day 03",
    category: "Upper Body B (Pull & Skill Focus)",
    exercises: [
      {
        id: "3-6",
        name: "Lat Pull Down",
        description: "Wide grip to target lats. Control the return.",
        sets: 3,
        reps: "10–12",
        tags: ["Back", "Lats"],
        infoUrl: "https://strengthlevel.com/strength-standards/lat-pulldown",
        imageUrl:
          "https://static.strengthlevel.com/images/exercises/lat-pulldown/lat-pulldown-800.avif",
      },
      {
        id: "3-2",
        name: "Archer Push-ups",
        description: "High-level stabilization and chest focus.",
        sets: 3,
        reps: "Failure",
        tags: ["Chest", "Skill"],
        infoUrl: "https://www.youtube.com/shorts/OskpsD1eDWw",
        imageUrl:
          "https://api.smartworkout.app/asset/image/e88a5681-e070-398d-6302-9f242439109a",
      },
      {
        id: "3-1",
        name: "Underhand Chin-up",
        description: "Focus on biceps and lats. Squeeze at the top.",
        sets: 3,
        reps: "8–12",
        tags: ["Biceps", "Lats"],
        infoUrl: "https://strengthlevel.com/strength-standards/chin-ups",
        imageUrl:
          "https://static.strengthlevel.com/images/exercises/chin-ups/chin-ups-800.avif",
      },
      {
        id: "3-7",
        name: "Dumbbell Tricep Extension",
        description: "Overhead or lying. Focus on the stretch.",
        sets: 3,
        reps: "12–15",
        tags: ["Triceps", "Arms"],
        infoUrl:
          "https://strengthlevel.com/strength-standards/dumbbell-tricep-extension",
        imageUrl:
          "https://static.strengthlevel.com/images/exercises/dumbbell-tricep-extension/dumbbell-tricep-extension-800.avif",
      },
      {
        id: "3-5",
        name: "Hanging Knee Raises",
        description: "A regression to the L-Sit. Raise knees to chest.",
        sets: 3,
        reps: "12–15",
        tags: ["Core", "Abs"],
        infoUrl:
          "https://strengthlevel.com/strength-standards/hanging-knee-raise",
        imageUrl:
          "https://static.strengthlevel.com/images/exercises/hanging-knee-raise/hanging-knee-raise-800.avif",
      },
      {
        id: "3-3",
        name: "Dumbbell Reverse Curl",
        description: "Reverse grip for thicker brachioradialis.",
        sets: 3,
        reps: "12–15",
        tags: ["Arms", "Forearms"],
        infoUrl: "https://www.youtube.com/shorts/ZieE_Skz6AM",
        imageUrl:
          "https://static.strengthlevel.com/images/exercises/dumbbell-reverse-curl/dumbbell-reverse-curl-800.avif",
      },
      {
        id: "3-4",
        name: "Farmer's Walk",
        description: "Walk with heavy weights. Maintain posture.",
        sets: 3,
        hold: "30–60s",
        tags: ["Grip", "Forearms"],
        infoUrl: "https://www.youtube.com/shorts/1uOs1hP3u4A",
        imageUrl:
          "https://api.smartworkout.app/asset/image/d0872413-3f0d-4ca1-823e-3b8a5ba41692",
      },
    ],
  },
  {
    id: 4,
    name: "Day 04",
    category: "Lower Body B (Hamstrings & Obliques)",
    exercises: [
      {
        id: "4-5",
        name: "Romanian Deadlift",
        description: "Hip hinge movement. Feel the stretch in hamstrings.",
        sets: 3,
        reps: "8–10",
        tags: ["Hamstrings", "Posterior"],
        infoUrl:
          "https://strengthlevel.com/strength-standards/romanian-deadlift",
        imageUrl:
          "https://static.strengthlevel.com/images/exercises/romanian-deadlift/romanian-deadlift-800.avif",
      },
      {
        id: "4-1",
        name: "Nordic Curls",
        description: "Focus on the slow lowering (eccentric) phase.",
        sets: 3,
        reps: "5–8",
        tags: ["Hamstrings", "Eccentric"],
        infoUrl: "https://www.youtube.com/shorts/Xyf3Aehy210",
        imageUrl:
          "https://static.strengthlevel.com/images/exercises/nordic-hamstring-curl/nordic-hamstring-curl-800.avif",
      },
      {
        id: "4-2",
        name: "Cossack Squats",
        description: "Enhances lateral strength. Keep heel down.",
        sets: 3,
        reps: "10 per side",
        tags: ["Legs", "Lateral"],
        infoUrl: "https://www.youtube.com/shorts/XvJ8gtW30ZA",
        imageUrl:
          "https://api.smartworkout.app/asset/image/ab1a5fc1-d7f8-4876-855f-12bf3b8d25d1",
      },
      {
        id: "4-4",
        name: "Fingertip Push-ups",
        description: "Specifically for finger/wrist conditioning.",
        sets: 2,
        reps: "8–10",
        tags: ["Skills", "Strength"],
        infoUrl: "https://www.youtube.com/shorts/2E1DHkymEbU",
        imageUrl:
          "https://static.strengthlevel.com/images/exercises/push-ups/push-ups-800.avif",
      },
      {
        id: "4-3",
        name: "Windshield Wipers",
        description: "Knee raises or full leg rotations for core.",
        sets: 3,
        reps: "10–12",
        tags: ["Core", "Obliques"],
        infoUrl: "https://www.youtube.com/shorts/xvw_r7VZ2S8",
        imageUrl:
          "https://static.strengthlevel.com/images/exercises/toes-to-bar/toes-to-bar-800.avif",
      },
    ],
  },
];
