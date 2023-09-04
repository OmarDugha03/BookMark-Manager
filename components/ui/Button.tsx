import { cn } from "../../lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "active:scale-95 inline-flex font-bold tracking-wider hover:font-medium items-center justify-center rounded-md text-sm  transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900",
  {
    variants: {
      variant: {
        default:
          " text-bold border-transparent outline-none text-white hover:bg-slate-900",
        outline: "rounded-lg   hover:bg-white",
        subtle:
          "text-slate-900 font-medium transition-all duration-200 ease-in-out delay-100 hover:text-white hover:bg-slate-900 px-2 py-4  border border-slate-900 rounded-lg mr-2 mb-2",
        ghost:
          "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
        mine: "bg-[#5368df] hover:bg-slate-900 hover:text-white font-bold text-white   transition-all duration-100 ease-linear delay-100  focus:outline-none focus:ring-1 shadow-xl  rounded-lg  mb-2",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
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
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
export { buttonVariants };

/* box-shadow: 0 shadow-[-1px_0px_34px_5px_#5368df]  20px 50px rgba(8, 112, 184, 0.7)0 20px 50px rgba(8, 112, 184, 0.7); */
