import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TitleTextProps extends ComponentProps<"h1"> {
  children?: ReactNode;
}

interface RegularTextProps extends ComponentProps<"p"> {
  children?: ReactNode;
}

export function TitleText(props: TitleTextProps) {
  return (
    <h1
      {...props}
      className={twMerge(
        "font-title text-5xl font-extrabold leading-[130%] text-base-title",
        props.className,
      )}
    >
      {props.children}
    </h1>
  );
}

export function RegularText(props: RegularTextProps) {
  return (
    <p
      {...props}
      className={twMerge(
        "text-regular-m leading-[130%] text-base-title",
        props.className,
      )}
    >
      {props.children}
    </p>
  );
}
