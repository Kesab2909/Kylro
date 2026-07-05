"use client";

import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { CreateOrganization } from "@clerk/nextjs";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Hint } from "@/components/hint";

export const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint label="Create organization" side="right" align="start" sideOffset={20}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="h-full w-full rounded-lg flex items-center justify-center border border-dashed border-white/[0.08] hover:border-kylro-gold/30 hover:bg-kylro-gold/5 transition-all duration-500 group"
            >
              <Plus className="h-3.5 w-3.5 text-kylro-ivory/25 group-hover:text-kylro-gold transition-colors duration-500" />
            </motion.button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};
