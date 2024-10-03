import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentProps<"button"> {
  children: string;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        "rounded-md bg-brand-yellow px-[2.8rem] py-3 text-sm font-bold uppercase text-base-white transition hover:bg-brand-yellow-dark disabled:cursor-not-allowed disabled:opacity-15",
        props.className,
      )}
    >
      {children}
    </button>
  );
};
