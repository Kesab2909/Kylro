"use client";

import { motion } from "framer-motion";
import { useOrganization, useUser } from "@clerk/nextjs";
import { Clock, Layers, Users } from "lucide-react";

interface DashboardHeroProps {
  boardCount?: number;
  isFavorites?: boolean;
}

export const DashboardHero = ({
  boardCount = 0,
  isFavorites = false,
}: DashboardHeroProps) => {
  const { organization } = useOrganization();
  const { user } = useUser();

  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const firstName = user?.firstName || "there";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative mb-16 pt-4"
    >
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-[11px] uppercase tracking-luxury text-kylro-gold/70 mb-5"
          >
            {organization?.name || "Workspace"}
          </motion.p>

          <h1 className="font-editorial text-5xl md:text-6xl lg:text-7xl font-light tracking-editorial text-kylro-ivory leading-[1.05]">
            {greeting()},<br />
            <span className="kylro-gold-text font-medium">{firstName}.</span>
          </h1>

          <p className="text-kylro-ivory/40 mt-6 text-sm font-light tracking-wide max-w-md leading-relaxed">
            {isFavorites
              ? "Your curated collection."
              : "The luxury workspace for visual thinkers."}
          </p>
        </div>

        <div className="flex gap-4">
          <StatWidget icon={Layers} label="Boards" value={boardCount.toString()} delay={0.25} />
          <StatWidget icon={Users} label="Team" value={organization ? "Active" : "—"} delay={0.35} />
          <StatWidget icon={Clock} label="Status" value="Live" delay={0.45} highlight />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-14 border-t border-white/[0.06] pt-8"
      >
        <p className="text-[10px] uppercase tracking-luxury text-kylro-ivory/30 mb-5">
          Recent Activity
        </p>
        <div className="flex gap-8 overflow-x-auto pb-2">
          <TimelineItem
            text={isFavorites ? "Browsing favorites" : "Workspace ready"}
            time="Now"
          />
          <TimelineItem
            text={`${boardCount} board${boardCount !== 1 ? "s" : ""} available`}
            time="Synced"
          />
          <TimelineItem
            text="Collaboration active"
            time="Always"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const StatWidget = ({
  icon: Icon,
  label,
  value,
  delay,
  highlight,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  delay: number;
  highlight?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="kylro-glass-subtle rounded-xl px-5 py-4 min-w-[110px]"
  >
    <Icon className={`h-3.5 w-3.5 mb-3 ${highlight ? "text-kylro-gold" : "text-kylro-ivory/30"}`} />
    <p className="text-[10px] uppercase tracking-luxury text-kylro-ivory/30 mb-1">{label}</p>
    <p className="font-editorial text-2xl font-light text-kylro-ivory">{value}</p>
  </motion.div>
);

const TimelineItem = ({ text, time }: { text: string; time: string }) => (
  <div className="flex-shrink-0 flex items-baseline gap-4 min-w-[180px]">
    <span className="text-[10px] uppercase tracking-luxury text-kylro-gold/50 w-12">{time}</span>
    <span className="text-sm font-light text-kylro-ivory/60">{text}</span>
  </div>
);
