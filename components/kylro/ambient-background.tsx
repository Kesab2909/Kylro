"use client";

import { motion } from "framer-motion";

export const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-kylro-bg" />
      <div className="absolute inset-0 kylro-noise" />

      <motion.div
        className="absolute -top-[20%] left-[20%] w-[55%] h-[55%] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 65%)",
        }}
        animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[-10%] right-[10%] w-[45%] h-[45%] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(184,115,51,0.05) 0%, transparent 65%)",
        }}
        animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(212,175,55,0.04), transparent)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245,241,232,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,241,232,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
};
