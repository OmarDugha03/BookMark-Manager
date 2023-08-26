import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

export const paragraphVariants = cva("", {
  variants: {
    size: {
      h1: "px-2 py-4 text-2xl font-extrabold text-center lg:text-left text-slate-900 lg:text-4xl",
      h2: "pb-2 text-lg font-bold text-center text-slate-900 lg:text-2xl",
      h3: "pb-2 text-lg font-bold text-center text-slate-900 lg:text-2xl",
      h4: "px-2 pt-12 pb-4 text-lg font-bold text-center text-slate-900 lg:text-2xl",
      p: "py-4 text-center text-gray-500  md:text-center md:px-12",
    },
  },
});

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Text = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(paragraphVariants({ size, className }))}>
        {children}
      </p>
    );
  }
);

Text.displayName = "Text";

export default Text;
