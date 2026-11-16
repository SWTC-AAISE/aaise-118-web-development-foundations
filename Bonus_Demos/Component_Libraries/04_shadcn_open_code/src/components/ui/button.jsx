import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils.js";

const buttonVariants = cva(
  "inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-bold transition-colors focus-visible:outline-[3px] focus-visible:outline-offset-3 focus-visible:outline-amber-500 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-teal-700 text-white hover:bg-teal-800",
        outline: "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Button({ className, variant, ...props }) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
