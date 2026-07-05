"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Hint } from "@/components/hint";

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
};

export const Item = ({ id, name, imageUrl }: ItemProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();
  const isActive = organization?.id === id;

  const onClick = () => {
    if (!setActive) return;
    setActive({ organization: id });
  };

  return (
    <div className="aspect-square relative">
      <Hint label={name} side="right" align="start" sideOffset={20}>
        <motion.button
          onClick={onClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="relative w-full h-full rounded-lg overflow-hidden"
        >
          {isActive && (
            <motion.div
              layoutId="org-active"
              className="absolute inset-0 rounded-lg ring-1 ring-kylro-gold/60"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <Image
            fill
            alt={name}
            src={imageUrl}
            className={cn(
              "object-cover rounded-lg transition-opacity duration-500",
              isActive ? "opacity-100" : "opacity-50 hover:opacity-80"
            )}
          />
        </motion.button>
      </Hint>
    </div>
  );
};
