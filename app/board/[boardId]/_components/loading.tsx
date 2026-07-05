import { Loader } from "lucide-react";
import { InfoSkeleton } from "./info";
import { ToolbarSkeleton } from "./toolbar";
import { ParticipantsSkeleton } from "./participants";

export const Loading = () => (
  <main
    className="h-full w-full relative touch-none flex items-center justify-center"
    style={{ backgroundColor: "#F5F1E8" }}
  >
    <div className="kylro-glass-strong rounded-xl p-5">
      <Loader className="h-5 w-5 text-kylro-gold animate-spin" />
    </div>
    <InfoSkeleton />
    <ParticipantsSkeleton />
    <ToolbarSkeleton />
  </main>
);
