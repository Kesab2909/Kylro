import Image from "next/image";
import { cn } from "@/lib/utils";

interface KylroLogoProps {
  size?: number;
  showWordmark?: boolean;
  className?: string;
}

export const KylroLogo = ({
  size = 40,
  showWordmark = true,
  className,
}: KylroLogoProps) => {
  return (
    <div className={cn("flex items-center gap-x-3", className)}>
      <div className="relative">
        <div className="absolute inset-0 rounded-lg bg-kylro-gold/10 blur-md scale-125" />
        <Image
          src="/logo.svg"
          alt="Kylro"
          height={size}
          width={size}
          className="relative"
        />
      </div>
      {showWordmark && (
        <span className="font-editorial font-semibold text-xl tracking-luxury uppercase kylro-gold-text">
          Kylro
        </span>
      )}
    </div>
  );
};
