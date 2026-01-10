"use client";

import { Exercise } from "@/lib/types";
import { Check, ExternalLink } from "lucide-react";
import { useLazyImage } from "@/hooks/use-lazy-image";

interface ExerciseCardProps {
  exercise: Exercise;
  isCompleted: boolean;
  onToggleComplete: () => void;
}

export function ExerciseCard({
  exercise,
  isCompleted,
  onToggleComplete,
}: ExerciseCardProps) {
  const { ref: imageRef, isVisible } = useLazyImage(exercise.imageUrl, {
    rootMargin: "100% ",
  });

  const getIndicatorFontSize = (text: string | number) => {
    const s = String(text);
    if (s.length > 12) return "text-[10px] leading-[1.2] px-3";
    if (s.length > 8) return "text-[13px] leading-tight px-2";
    if (s.length > 5) return "text-base px-1";
    return "text-2xl";
  };

  return (
    <div className="relative w-full h-full flex-shrink-0 snap-start overflow-hidden bg-black text-white">
      {/* Exercise Image Cover */}
      <div ref={imageRef} className="absolute inset-0 z-0 text-[0px]">
        {exercise.imageUrl ? (
          isVisible && (
            <img
              src={exercise.imageUrl}
              alt={exercise.name}
              className="w-full h-full object-cover opacity-80 transition-none"
            />
          )
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-pastel-blue/30 via-primary/20 to-pastel-green/30" />
        )}
        {/* Subtle gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 pointer-events-none" />
      </div>

      {/* Side Action Panel - From Design */}
      <div className="absolute right-6 bottom-32 z-40 flex flex-col gap-8 items-center">
        {/* Instructions Link - New Circular Style */}
        <div className="flex flex-col items-center gap-1 group">
          <a
            href={exercise.infoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl hover:scale-110 active:scale-95 transition-all"
          >
            <ExternalLink size={24} strokeWidth={2.5} />
          </a>
          <span className="text-[10px] font-black uppercase tracking-widest text-white/90">
            Info
          </span>
        </div>

        {/* Sets */}
        <div className="flex flex-col items-center gap-1 group">
          <div
            className={`w-20 h-20 rounded-full bg-pastel-blue/90 backdrop-blur-md border border-white/20 flex items-center justify-center text-foreground font-black shadow-xl text-center overflow-hidden ${getIndicatorFontSize(
              exercise.sets
            )}`}
          >
            {exercise.sets}
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-white/90">
            Sets
          </span>
        </div>

        {/* Reps/Hold */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center text-white shadow-xl overflow-hidden">
            <span
              className={`font-black text-white/90 text-center break-words w-full ${getIndicatorFontSize(
                exercise.reps || exercise.hold || ""
              )}`}
            >
              {exercise.reps || exercise.hold}
            </span>
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-white/90">
            {exercise.reps ? "Reps" : "Hold"}
          </span>
        </div>

        {/* Done Button */}
        <div className="flex flex-col items-center gap-1">
          <button
            onClick={onToggleComplete}
            className={`w-24 h-24 rounded-full flex items-center justify-center shadow-2xl transition-all active:scale-90 ${
              isCompleted
                ? "bg-primary text-white scale-110"
                : "bg-pastel-green/90 backdrop-blur-sm text-foreground"
            }`}
          >
            <Check size={48} strokeWidth={4} />
          </button>
          <span className="text-[10px] font-black uppercase tracking-widest text-white/90 mt-1">
            Done
          </span>
        </div>
      </div>

      {/* Exercise Info */}
      <div className="absolute bottom-12 left-6 right-32 z-40">
        <div className="flex gap-2 mb-4">
          {exercise.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-xl bg-white/20 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-widest text-white"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-6xl font-black text-white leading-[1.1] mb-3 tracking-tighter">
          {exercise.name}
        </h2>
        <p className="text-base font-medium text-white/90 line-clamp-3 max-w-[320px]">
          {exercise.description}
        </p>
      </div>
    </div>
  );
}
