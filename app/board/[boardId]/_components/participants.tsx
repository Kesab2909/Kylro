"use client";

import { connectionIdToColor } from "@/lib/utils";
import { useOthers, useSelf } from "@/liveblocks.config";
import { UserAvatar } from "./user-avatar";

const MAX_SHOWN_USERS = 2;

export const Participants = () => {
  const users = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = users.length > MAX_SHOWN_USERS;

  return (
    <div className="absolute h-11 top-4 right-4 kylro-glass-strong rounded-xl px-3 flex items-center kylro-elevation-2">
      <div className="flex gap-x-2 items-center">
        {users.length > 0 && (
          <div className="flex items-center gap-1.5 mr-2">
            <div className="w-1 h-1 rounded-full bg-kylro-gold animate-pulse-gold" />
            <span className="text-[9px] uppercase tracking-luxury text-kylro-ivory/30 hidden sm:inline">
              {users.length + 1}
            </span>
          </div>
        )}
        {users.slice(0, MAX_SHOWN_USERS).map(({ connectionId, info }) => (
          <UserAvatar
            key={connectionId}
            borderColor={connectionIdToColor(connectionId)}
            src={info?.picture}
            name={info?.name}
            fallback={info?.name?.[0] || "T"}
          />
        ))}
        {currentUser && (
          <UserAvatar
            borderColor={connectionIdToColor(currentUser.connectionId)}
            src={currentUser.info?.picture}
            name={`${currentUser.info?.name} (You)`}
            fallback={currentUser.info?.name?.[0]}
          />
        )}
        {hasMoreUsers && (
          <UserAvatar
            name={`${users.length - MAX_SHOWN_USERS} more`}
            fallback={`+${users.length - MAX_SHOWN_USERS}`}
          />
        )}
      </div>
    </div>
  );
};

export const ParticipantsSkeleton = () => (
  <div className="absolute h-11 top-4 right-4 kylro-glass-strong rounded-xl w-[100px] animate-pulse" />
);
