"use client";

import { useQuery } from "convex/react";
import { motion } from "framer-motion";

import { api } from "@/convex/_generated/api";
import { DashboardHero } from "@/components/kylro/dashboard-hero";

import { BoardCard } from "./board-card";
import { EmptySearch } from "./empty-search";
import { EmptyBoards } from "./empty-boards";
import { EmptyFavorites } from "./empty-favorites";
import { NewBoardButton } from "./new-board-button";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

export const BoardList = ({
  orgId,
  query,
}: BoardListProps) => {
  const data = useQuery(api.boards.get, { 
    orgId,
    ...query,
  });

  const isFavorites = !!query.favorites;
  const boardCount = data?.length ?? 0;

  if (data === undefined) {
    return (
      <div>
        <DashboardHero isFavorites={isFavorites} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 pb-16">
          <div className="w-full">
            <NewBoardButton orgId={orgId} disabled />
          </div>
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
        </div>
      </div>
    )
  }

  if (!data?.length && query.search) {
    return (
      <>
        <DashboardHero boardCount={0} isFavorites={isFavorites} />
        <EmptySearch orgId={orgId} />
      </>
    );
  }

  if (!data?.length && query.favorites) {
    return (
      <>
        <DashboardHero boardCount={0} isFavorites />
        <EmptyFavorites />
      </>
    );
  }

  if (!data?.length) {
    return (
      <>
        <DashboardHero boardCount={0} />
        <EmptyBoards />
      </>
    );
  }

  return (
    <div>
      <DashboardHero boardCount={boardCount} isFavorites={isFavorites} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 pb-16"
      >
        <motion.div variants={itemVariants} className="w-full">
          <NewBoardButton orgId={orgId} />
        </motion.div>
        {data?.map((board) => (
          <motion.div key={board._id} variants={itemVariants}>
            <BoardCard
              id={board._id}
              title={board.title}
              imageUrl={board.imageUrl}
              authorId={board.authorId}
              authorName={board.authorName}
              createdAt={board._creationTime}
              orgId={board.orgId}
              isFavorite={board.isFavorite}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
