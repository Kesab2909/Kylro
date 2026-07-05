"use client";

import { motion } from "framer-motion";
import { SearchX } from "lucide-react";
import { NewBoardButton } from "./new-board-button";

interface EmptySearchProps {
  orgId: string;
}

export const EmptySearch = ({ orgId }: EmptySearchProps) => (
  <div className="h-full flex flex-col items-center justify-center min-h-[40vh]">
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-md">
      <SearchX className="h-8 w-8 text-kylro-ivory/25 mx-auto mb-8" />
      <h2 className="font-editorial text-3xl font-light text-kylro-ivory mb-3">No results</h2>
      <p className="text-kylro-ivory/35 text-sm font-light mb-6">Try a different search or create anew.</p>
      <NewBoardButton orgId={orgId} compact />
    </motion.div>
  </div>
);
