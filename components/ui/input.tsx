import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-[3rem] rounded-md border border-white/10 focus:border-[1.5px] focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none focus-visible:border-accent selection:bg-white/20 selection:text-primary-foreground dark:bg-input/30 file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Input }
