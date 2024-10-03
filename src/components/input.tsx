import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends ComponentProps<"input"> {}

export const Input = ({ ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={twMerge(
        "flex h-[2.625rem] items-center justify-between rounded border border-base-button bg-base-input px-3 py-0 text-xs text-base-text placeholder:text-base-label focus:border-brand-yellow-dark",
        props.className,
      )}
    />
  );
};
