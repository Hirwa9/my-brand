import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-white/10 placeholder:text-white/60 focus-visible:border-accent focus-visible:ring-accent/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm selection:bg-white/20 dark:bg-input/30 file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
