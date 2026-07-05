"use client";

import { motion } from "framer-motion";
import { UserButton, OrganizationSwitcher, useOrganization } from "@clerk/nextjs";
import { Bell, Search } from "lucide-react";

import { SearchInput } from "./search-input";
import { InviteButton } from "./invite-button";
import { NewBoardButton } from "./new-board-button";
import { Hint } from "@/components/hint";

const clerkMobileAppearance = {
  elements: {
    rootBox: { display: "flex", width: "100%", maxWidth: "376px" },
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

export const Navbar = () => {
  const { organization } = useOrganization();

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="kylro-glass-strong rounded-xl mb-8 px-5 py-3.5 flex items-center gap-x-4"
    >
      <div className="hidden lg:flex lg:flex-1">
        <SearchInput />
      </div>

      <div className="block lg:hidden flex-1">
        <OrganizationSwitcher hidePersonal appearance={clerkMobileAppearance} />
      </div>

      <div className="flex items-center gap-x-3">
        {organization && (
          <>
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5">
              <div className="w-1 h-1 rounded-full bg-kylro-gold animate-pulse-gold" />
              <span className="text-[10px] uppercase tracking-luxury text-kylro-ivory/30">Live</span>
            </div>

            <Hint label="Notifications">
              <button className="h-8 w-8 rounded-lg flex items-center justify-center hover:bg-white/[0.04] transition-colors duration-500 relative">
                <Bell className="h-3.5 w-3.5 text-kylro-ivory/30" />
                <span className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-kylro-gold" />
              </button>
            </Hint>

            <Hint label="Search">
              <button className="lg:hidden h-8 w-8 rounded-lg flex items-center justify-center hover:bg-white/[0.04] transition-colors">
                <Search className="h-3.5 w-3.5 text-kylro-ivory/30" />
              </button>
            </Hint>

            <NewBoardButton orgId={organization.id} compact />
            <InviteButton />
          </>
        )}

        <div className="ring-1 ring-white/[0.08] rounded-full">
          <UserButton appearance={{ elements: { avatarBox: "h-8 w-8" } }} />
        </div>
      </div>
    </motion.div>
  );
};
