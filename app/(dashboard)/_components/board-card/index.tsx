"use client";

import { toast } from "sonner";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useAuth } from "@clerk/nextjs";
import { MoreHorizontal } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

import { api } from "@/convex/_generated/api";
import { Actions } from "@/components/actions";
import { Skeleton } from "@/components/ui/skeleton";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useMouseTilt } from "@/hooks/use-mouse-tilt";

import { Footer } from "./footer";
import { Overlay } from "./overlay";

interface BoardCardProps {
  id: string;
  title: string;
  authorName: string;
  authorId: string;
  createdAt: number;
  imageUrl: string;
  orgId: string;
  isFavorite: boolean;
};

export const BoardCard = ({
  id,
  title,
  authorId,
  authorName,
  createdAt,
  imageUrl,
  orgId,
  isFavorite,
}: BoardCardProps) => {
  const { userId } = useAuth();
  const { ref, tilt, isHovered, handlers } = useMouseTilt(4);

  const authorLabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, { addSuffix: true });

  const { mutate: onFavorite, pending: pendingFavorite } = useApiMutation(api.board.favorite);
  const { mutate: onUnfavorite, pending: pendingUnfavorite } = useApiMutation(api.board.unfavorite);

  const toggleFavorite = () => {
    if (isFavorite) {
      onUnfavorite({ id }).catch(() => toast.error("Failed to unfavorite"));
    } else {
      onFavorite({ id, orgId }).catch(() => toast.error("Failed to favorite"));
    }
  };

  return (
    <Link href={`/board/${id}`}>
      <motion.div
        ref={ref}
        {...handlers}
        style={{
          transform: isHovered
            ? `perspective(1200px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(1.015)`
            : "perspective(1200px) rotateX(0) rotateY(0) scale(1)",
          transition: isHovered ? "transform 0.15s ease-out" : "transform 0.6s ease-out",
        }}
        className="group aspect-[100/127] rounded-xl flex flex-col justify-between overflow-hidden kylro-glass kylro-gold-border kylro-elevation-1 hover:kylro-elevation-3 hover:kylro-glow-sm"
      >
        <div className="relative flex-1 bg-kylro-surface overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-kylro-bg via-kylro-bg/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
          <Overlay />
          <Actions id={id} title={title} side="right">
            <button className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 p-1.5 outline-none rounded-md hover:bg-white/[0.06]">
              <MoreHorizontal className="h-4 w-4 text-kylro-ivory/60" />
            </button>
          </Actions>
          {isFavorite && (
            <div className="absolute top-3 left-3">
              <span className="text-[9px] uppercase tracking-luxury text-kylro-gold/80">★ Saved</span>
            </div>
          )}
        </div>
        <Footer
          isFavorite={isFavorite}
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          onClick={toggleFavorite}
          disabled={pendingFavorite || pendingUnfavorite}
        />
      </motion.div>
    </Link>
  );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="aspect-[100/127] rounded-xl overflow-hidden kylro-glass">
      <Skeleton className="h-full w-full bg-white/[0.03]" />
    </div>
  );
};
