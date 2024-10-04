import { ReactNode } from "react";

interface InfoWithIconProps {
  icon: ReactNode;
  text: string | ReactNode;
  iconBg: string;
}

export function InfoWithIcon({ icon, text, iconBg }: InfoWithIconProps) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex size-8 items-center justify-center rounded-full text-base-white ${iconBg}`}
      >
        {icon}
      </div>
      {typeof text === "string" ? <p>{text}</p> : text}
    </div>
  );
}
