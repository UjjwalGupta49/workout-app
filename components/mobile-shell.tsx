import React from "react";

interface MobileShellProps {
  children: React.ReactNode;
  className?: string;
}

export function MobileShell({ children, className = "" }: MobileShellProps) {
  return (
    <div
      className={`min-h-full flex flex-col bg-background relative ${className}`}
    >
      {/* Top Safe Area Spacer */}
      <div className="h-[env(safe-area-inset-top)] w-full" />

      {children}

      {/* Bottom Safe Area Spacer (for fixed elements, handled in BottomNav) */}
      <div className="h-[calc(env(safe-area-inset-bottom)+80px)] w-full" />
    </div>
  );
}
