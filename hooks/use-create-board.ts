"use client";

import { useState, useCallback } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";

import { api } from "@/convex/_generated/api";

export const useCreateBoard = () => {
  const router = useRouter();
  const createBoard = useMutation(api.board.create);
  const [pending, setPending] = useState(false);

  const create = useCallback(
    (orgId: string) => {
      if (pending) return;

      setPending(true);
      createBoard({ orgId, title: "Untitled" })
        .then((id) => {
          toast.success("Board created");
          router.push(`/board/${id}`);
        })
        .catch(() => toast.error("Failed to create board"))
        .finally(() => setPending(false));
    },
    [createBoard, pending, router]
  );

  return { create, pending };
};
