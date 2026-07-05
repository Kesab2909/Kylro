"use client";

import { motion } from "framer-motion";
import { KylroLogo } from "@/components/kylro/kylro-logo";

export const Loading = () => (
  <div className="h-full w-full flex flex-col justify-center items-center bg-kylro-bg">
    <motion.div
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <KylroLogo size={44} />
    </motion.div>
    <div className="mt-8 h-px w-16 bg-gradient-to-r from-transparent via-kylro-gold/40 to-transparent" />
  </div>
);
