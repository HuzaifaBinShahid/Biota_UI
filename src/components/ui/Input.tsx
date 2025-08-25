import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full h-[46px] rounded-[4px] gap-[10px] px-3 py-3 border border-[#F1F2F4] bg-white text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-600 transition-colors",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
