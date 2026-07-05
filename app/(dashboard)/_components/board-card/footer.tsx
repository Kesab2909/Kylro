import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterProps {
  title: string;
  authorLabel: string;
  createdAtLabel: string;
  isFavorite: boolean;
  onClick: () => void;
  disabled: boolean;
};

export const Footer = ({
  title,
  authorLabel,
  createdAtLabel,
  isFavorite,
  onClick,
  disabled,
}: FooterProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    onClick();
  };

  return (
    <div className="relative px-4 py-3.5 border-t border-white/[0.04]">
      <p className="text-sm font-light text-kylro-ivory/80 truncate max-w-[calc(100%-24px)] tracking-wide">
        {title}
      </p>
      <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[10px] text-kylro-ivory/30 truncate mt-1 tracking-wide">
        {authorLabel} · {createdAtLabel}
      </p>
      <button
        disabled={disabled}
        onClick={handleClick}
        className={cn(
          "absolute top-3.5 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 p-1",
          disabled && "cursor-not-allowed opacity-40",
          isFavorite && "opacity-100"
        )}
      >
        <Star
          className={cn(
            "h-3.5 w-3.5 transition-colors duration-500",
            isFavorite
              ? "fill-kylro-gold text-kylro-gold"
              : "text-kylro-ivory/25 hover:text-kylro-gold"
          )}
        />
      </button>
    </div>
  );
};
