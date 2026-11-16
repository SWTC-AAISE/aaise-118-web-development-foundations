import { cn } from "../../lib/utils.js";

function Input({ className, type = "text", ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 shadow-sm outline-none placeholder:text-slate-500 focus-visible:border-slate-700 focus-visible:outline-[3px] focus-visible:outline-offset-3 focus-visible:outline-amber-500 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
