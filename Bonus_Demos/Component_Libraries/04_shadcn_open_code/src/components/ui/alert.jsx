import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils.js";

const alertVariants = cva("rounded-md border px-4 py-3 text-sm", {
  variants: {
    variant: {
      default: "border-slate-300 bg-slate-100 text-slate-900",
      success: "border-emerald-300 bg-emerald-50 text-emerald-950",
      warning: "border-amber-400 bg-amber-50 text-amber-950",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Alert({ className, variant, ...props }) {
  return (
    <div
      data-slot="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }) {
  return (
    <p
      data-slot="alert-title"
      className={cn("font-bold", className)}
      {...props}
    />
  );
}

function AlertDescription({ className, ...props }) {
  return (
    <p
      data-slot="alert-description"
      className={cn("mt-1 leading-6", className)}
      {...props}
    />
  );
}

export { Alert, AlertDescription, AlertTitle };
