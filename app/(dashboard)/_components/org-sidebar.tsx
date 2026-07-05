"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LayoutDashboard, Star } from "lucide-react";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { KylroLogo } from "@/components/kylro/kylro-logo";

const clerkAppearance = {
  elements: {
    rootBox: { display: "flex", width: "100%" },
    organizationSwitcherTrigger: {
      padding: "10px 14px",
      width: "100%",
      borderRadius: "8px",
      border: "1px solid rgba(255,255,255,0.06)",
      backgroundColor: "rgba(255,255,255,0.02)",
      color: "#F5F1E8",
    },
  },
};

export const OrgSidebar = () => {
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites");

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="hidden lg:flex flex-col w-[220px] flex-shrink-0"
    >
      <div className="kylro-glass-strong rounded-xl p-6 h-full flex flex-col gap-y-8">
        <Link href="/">
          <KylroLogo size={32} />
        </Link>

        <OrganizationSwitcher hidePersonal appearance={clerkAppearance} />

        <nav className="space-y-1 flex-1">
          <NavItem href="/" icon={LayoutDashboard} label="Team Boards" isActive={!favorites} />
          <NavItem
            href={{ pathname: "/", query: { favorites: true } }}
            icon={Star}
            label="Favorites"
            isActive={!!favorites}
          />
        </nav>

        <div className="border-t border-white/[0.06] pt-6">
          <p className="text-[10px] uppercase tracking-luxury text-kylro-ivory/25 leading-relaxed">
            Less interface.<br />More experience.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

interface NavItemProps {
  href: string | { pathname: string; query: Record<string, boolean> };
  icon: React.ElementType;
  label: string;
  isActive: boolean;
}

const NavItem = ({ href, icon: Icon, label, isActive }: NavItemProps) => (
  <Link href={href}>
    <motion.div
      whileHover={{ x: 2 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className={cn(
        "relative flex items-center gap-3 px-3 py-3 rounded-lg text-sm transition-all duration-500",
        isActive
          ? "text-kylro-ivory bg-white/[0.04]"
          : "text-kylro-ivory/40 hover:text-kylro-ivory/70 hover:bg-white/[0.02]"
      )}
    >
      {isActive && (
        <motion.div
          layoutId="nav-gold-bar"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-4 bg-kylro-gold"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
      <Icon className={cn("h-4 w-4", isActive ? "text-kylro-gold" : "text-kylro-ivory/30")} />
      <span className="text-xs tracking-wide">{label}</span>
    </motion.div>
  </Link>
);
