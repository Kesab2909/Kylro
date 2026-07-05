"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useOrganization } from "@clerk/nextjs";
import { NewBoardButton } from "./new-board-button";

export const EmptyFavorites = () => {
  const { organization } = useOrganization();

  return (
    <div className="h-full flex flex-col items-center justify-center min-h-[40vh]">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-md">
        <div className="mb-8 flex justify-center">
          <Star className="h-8 w-8 text-kylro-gold/40" />
        </div>
        <h2 className="font-editorial text-3xl font-light text-kylro-ivory mb-3">No favorites yet</h2>
        <p className="text-kylro-ivory/35 text-sm font-light mb-6">Star a board to save it here.</p>
        {organization && <NewBoardButton orgId={organization.id} compact />}
      </motion.div>
    </div>
  );
};
