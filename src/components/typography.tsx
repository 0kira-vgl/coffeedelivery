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
        "text-base-title font-title text-5xl font-extrabold leading-[130%]",
        props.className,
      )}
    >
      {props.children}
    </h1>
  );
}

export function RegularText(props: TitleTextProps) {
  return (
    <p
      {...props}
      className={twMerge(
        "text-regular-m text-base-title leading-[130%]",
        props.className,
      )}
    >
      {props.children}
    </p>
  );
}
