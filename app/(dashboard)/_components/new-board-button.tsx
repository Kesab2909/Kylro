"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";
import { useCreateBoard } from "@/hooks/use-create-board";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
  compact?: boolean;
};

export const NewBoardButton = ({
  orgId,
  disabled,
  compact,
}: NewBoardButtonProps) => {
  const { create, pending } = useCreateBoard();
  const isDisabled = pending || disabled;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isDisabled) return;
    create(orgId);
  };

  if (compact) {
    return (
      <button
        type="button"
        disabled={isDisabled}
        onClick={handleClick}
        className={cn(
          "inline-flex items-center gap-2 rounded-lg border border-kylro-gold/30 bg-kylro-gold/10 px-4 py-2 text-xs uppercase tracking-luxury text-kylro-gold hover:bg-kylro-gold/15 hover:border-kylro-gold/50 transition-all duration-500",
          isDisabled && "opacity-40 cursor-not-allowed"
        )}
      >
        <Plus className="h-3.5 w-3.5" />
        New Board
      </button>
    );
  }

  return (
    <motion.button
      type="button"
      disabled={isDisabled}
      onClick={handleClick}
      whileHover={!isDisabled ? { scale: 1.015, y: -3 } : undefined}
      whileTap={!isDisabled ? { scale: 0.99 } : undefined}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "group relative w-full aspect-[100/127] rounded-xl overflow-hidden kylro-gold-border cursor-pointer",
        isDisabled && "opacity-40 cursor-not-allowed"
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-kylro-surface" />
      <div className="pointer-events-none absolute inset-0 kylro-shimmer animate-gold-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute top-1/3 left-1/3 w-1 h-1 rounded-full bg-kylro-gold/40 animate-float" />
        <div className="absolute top-1/2 right-1/3 w-0.5 h-0.5 rounded-full bg-kylro-copper/50 animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-5 group-hover:bg-white/[0.02] transition-all duration-700">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-kylro-gold/15 blur-2xl scale-[2] group-hover:scale-[2.5] transition-transform duration-700" />
          <div className="relative h-14 w-14 rounded-full border border-kylro-gold/40 flex items-center justify-center group-hover:border-kylro-gold/70 group-hover:kylro-glow-sm transition-all duration-500">
            <Plus className="h-6 w-6 text-kylro-gold stroke-[1]" />
          </div>
        </div>

        <div className="text-center">
          <p className="text-[11px] uppercase tracking-luxury text-kylro-gold/80">
            New Board
          </p>
          <p className="text-[10px] text-kylro-ivory/25 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 tracking-wide">
            Begin creating
          </p>
        </div>
      </div>
    </motion.button>
  );
};
