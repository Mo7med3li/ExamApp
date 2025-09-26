import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:bg-slate-200 disabled:text-slate-400 dark:disabled:bg-slate-700 dark:disabled:text-slate-500 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-btnshadow",
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600",
        outline:
          "border border-blue-600 text-slate-800 bg-blue-50 hover:bg-blue-100 dark:border-blue-400 dark:text-slate-200 dark:bg-blue-900/20 dark:hover:bg-blue-900/30",
        secondary:
          "bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { icon?: () => React.ReactNode; spinner?: boolean }
>(
  (
    { className, variant, size, icon, spinner, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const content = (
      <>
        {props.children}
        {spinner ? (
          <LoaderCircle className="mt-[2px] size-[18px] animate-spin-fast" />
        ) : (
          icon?.()
        )}
      </>
    );

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {asChild ? props.children : content}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
