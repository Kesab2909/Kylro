import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-light tracking-wide transition-all duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-kylro-gold/40 disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        default: "bg-kylro-gold/10 border border-kylro-gold/30 text-kylro-gold hover:bg-kylro-gold/15 hover:border-kylro-gold/50",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-white/[0.08] bg-transparent hover:bg-white/[0.04] text-kylro-ivory/70",
        secondary: "bg-kylro-copper/10 border border-kylro-copper/20 text-kylro-copper hover:bg-kylro-copper/15",
        ghost: "hover:bg-white/[0.04] text-kylro-ivory/60",
        link: "text-kylro-gold underline-offset-4 hover:underline",
        board: "hover:bg-kylro-gold/10 hover:text-kylro-gold text-kylro-ivory/40 rounded-md",
        boardActive: "bg-kylro-gold/10 text-kylro-gold rounded-md",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-11 rounded-lg px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
