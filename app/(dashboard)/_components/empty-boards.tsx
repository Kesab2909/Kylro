"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { useOrganization } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useCreateBoard } from "@/hooks/use-create-board";

export const EmptyBoards = () => {
  const { organization } = useOrganization();
  const { create, pending } = useCreateBoard();

  return (
    <div className="h-full flex flex-col items-center justify-center min-h-[40vh]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-md"
      >
        <div className="mb-8 flex justify-center">
          <div className="h-14 w-14 rounded-full border border-kylro-gold/20 flex items-center justify-center">
            <Layers className="h-6 w-6 text-kylro-gold/50" />
          </div>
        </div>
        <h2 className="font-editorial text-3xl font-light text-kylro-ivory mb-3">Your canvas awaits</h2>
        <p className="text-kylro-ivory/35 text-sm font-light mb-8 tracking-wide">Create your first board.</p>
        <Button
          disabled={pending}
          onClick={() => organization && create(organization.id)}
          size="lg"
          className="uppercase tracking-luxury text-xs"
        >
          Create Board
        </Button>
      </motion.div>
    </div>
  );
};
