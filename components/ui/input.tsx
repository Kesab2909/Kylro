import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2 text-sm text-kylro-ivory placeholder:text-kylro-ivory/25 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-kylro-gold/30 disabled:cursor-not-allowed disabled:opacity-40 transition-all duration-500",
        className
      )}
      ref={ref}
      {...props}
    />
  )
)
Input.displayName = "Input"

export { Input }
