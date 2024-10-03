import { ReactNode } from "react";

type PaymentInputProps = {
  icon: ReactNode;
  title: string;
};

export const PaymentInput = ({ icon, title }: PaymentInputProps) => {
  return (
    <div className="flex h-12 select-none items-center justify-start gap-3 rounded-md border border-base-button bg-base-button px-4 py-0 text-xs uppercase text-base-text transition hover:bg-base-hover">
      {icon}
      <span>{title}</span>
    </div>
  );
};
