"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useQuery } from "convex/react";
import { Hint } from "@/components/hint";
import { api } from "@/convex/_generated/api";
import { Actions } from "@/components/actions";
import { Button } from "@/components/ui/button";
import { Id } from "@/convex/_generated/dataModel";
import { useRenameModal } from "@/store/use-rename-modal";
import { KylroLogo } from "@/components/kylro/kylro-logo";

interface InfoProps {
  boardId: string;
};

const Separator = () => <div className="w-px h-4 bg-white/[0.06] mx-1" />;

export const Info = ({ boardId }: InfoProps) => {
  const { onOpen } = useRenameModal();
  const data = useQuery(api.board.get, { id: boardId as Id<"boards"> });

  if (!data) return <InfoSkeleton />;

  return (
    <div className="absolute top-4 left-4 kylro-glass-strong rounded-xl px-2 h-11 flex items-center kylro-elevation-2">
      <Hint label="Go to boards" side="bottom" sideOffset={10}>
        <Button asChild variant="board" className="px-2 rounded-lg">
          <Link href="/">
            <KylroLogo size={24} showWordmark={false} />
            <span className="font-editorial text-sm tracking-luxury uppercase kylro-gold-text ml-2">Kylro</span>
          </Link>
        </Button>
      </Hint>
      <Separator />
      <Hint label="Edit title" side="bottom" sideOffset={10}>
        <Button
          variant="board"
          className="text-sm font-light px-3 rounded-lg max-w-[180px] truncate text-kylro-ivory/70"
          onClick={() => onOpen(data._id, data.title)}
        >
          {data.title}
        </Button>
      </Hint>
      <Separator />
      <Actions id={data._id} title={data.title} side="bottom" sideOffset={10}>
        <Hint label="Menu" side="bottom" sideOffset={10}>
          <Button size="icon" variant="board" className="rounded-lg h-8 w-8">
            <Menu className="h-3.5 w-3.5" />
          </Button>
        </Hint>
      </Actions>
    </div>
  );
};

export const InfoSkeleton = () => (
  <div className="absolute top-4 left-4 kylro-glass-strong rounded-xl h-11 w-[260px] animate-pulse" />
);
