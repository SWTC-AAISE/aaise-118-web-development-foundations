import { cn } from "../../lib/utils.js";

function Label({ className, ...props }) {
  return (
    <label
      data-slot="label"
      className={cn("text-sm font-semibold text-slate-900", className)}
      {...props}
    />
  );
}

export { Label };
