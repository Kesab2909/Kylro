"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { KylroLogo } from "@/components/kylro/kylro-logo";

export const EmptyOrg = () => (
  <div className="h-full flex flex-col items-center justify-center min-h-[60vh]">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="text-center max-w-md"
    >
      <KylroLogo size={40} className="justify-center mb-10" />
      <div className="mb-10 flex justify-center">
        <div className="h-16 w-16 rounded-full border border-kylro-gold/20 flex items-center justify-center">
          <Building2 className="h-7 w-7 text-kylro-gold/60" />
        </div>
      </div>
      <h2 className="font-editorial text-4xl font-light text-kylro-ivory tracking-editorial mb-4">
        Welcome to <span className="kylro-gold-text">Kylro</span>
      </h2>
      <p className="text-kylro-ivory/35 text-sm font-light tracking-wide leading-relaxed mb-10">
        The luxury workspace for visual thinkers. Create an organization to begin.
      </p>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="lg" className="uppercase tracking-luxury text-xs">
            Create Organization
          </Button>
        </DialogTrigger>
        <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
          <CreateOrganization />
        </DialogContent>
      </Dialog>
    </motion.div>
  </div>
);
