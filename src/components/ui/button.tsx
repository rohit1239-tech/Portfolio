import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
};

const buttonVariants = {
  default:
    "bg-blue-600 text-white shadow-[0_0_0_1px_rgba(59,130,246,0.2),0_10px_30px_rgba(59,130,246,0.25)] hover:bg-blue-500",
  outline:
    "border border-white/15 bg-white/5 text-zinc-100 backdrop-blur hover:border-blue-400/60 hover:bg-blue-500/10",
  ghost: "text-zinc-300 hover:bg-white/10 hover:text-white",
};

const buttonSizes = {
  default: "h-11 px-5 text-sm",
  sm: "h-9 px-3 text-sm",
  lg: "h-12 px-6 text-base",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    const baseClasses = cn(
      "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 disabled:pointer-events-none disabled:opacity-60",
      buttonVariants[variant],
      buttonSizes[size],
      className,
    );

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        className: cn(baseClasses, (children.props as { className?: string }).className),
        ...props,
      } as React.HTMLAttributes<HTMLElement>);
    }

    return (
      <button ref={ref} className={baseClasses} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
