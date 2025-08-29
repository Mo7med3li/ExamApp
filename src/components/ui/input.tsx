// import * as React from "react";

// import { cn } from "@/lib/utils";

// const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
//   ({ className, type, ...props }, ref) => {
//     return (
//       <input
//         type={type}
//         className={cn(
//           "flex h-10 w-full rounded-md border border-main bg-background  px-3 py-2 text-base  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm shadow-inputShadow focus:outline-none",
//           className
//         )}
//         ref={ref}
//         {...props}
//       />
//     );
//   }
// );
// Input.displayName = "Input";

// export { Input };

import * as React from "react";
import { Eye, EyeOff, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const baseClasses =
  "flex h-10 w-full text-gray-400 placeholder:text-gray-400 border border-gray-200 bg-transparent p-3 focus-visible:border-blue-600 text-base disabled:cursor-not-allowed disabled:opacity-50 md:text-sm shadow-inputShadow focus:outline-none";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    // state
    const [hide, sethide] = React.useState(true);
    // Input type search
    if (type === "search") {
      return (
        <div className="relative">
          <input
            type={type}
            className={cn(baseClasses, "relative ps-10", className)}
            ref={ref}
            {...props}
          />
          <Search
            className={cn(
              "absolute start-4 top-1/2 z-50 mt-[1px] size-[18px] -translate-y-1/2 text-zinc-400 dark:text-zinc-50",
              props.disabled
            )}
          />
        </div>
      );
    }

    // functions
    function toggleType() {
      sethide(!hide);
    }
    if (type === "password") {
      return (
        <div className="relative">
          <input
            type={hide ? "password" : "text"}
            className={cn(baseClasses, "relative", className)}
            ref={ref}
            {...props}
          />
          {hide ? (
            <Eye
              onClick={() => {
                toggleType();
              }}
              className={cn(
                "absolute end-4 top-1/2 z-50 mt-[1px] size-[18px] -translate-y-1/2 text-zinc-400 dark:text-zinc-50",
                props.disabled
              )}
            />
          ) : (
            <EyeOff
              onClick={() => {
                toggleType();
              }}
              className={cn(
                "absolute end-4 top-1/2 z-50 mt-[1px] size-[18px] -translate-y-1/2 text-zinc-400 dark:text-zinc-50",
                props.disabled
              )}
            />
          )}
        </div>
      );
    }
    return (
      <input
        type={type}
        className={cn(baseClasses, className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
