import { RegularText } from "@/components/typography";
import { ReactNode } from "react";

type SectionTitleProps = {
  title: string;
  subtitle: string;
  icon: ReactNode;
};

export const SectionTitle = ({ title, subtitle, icon }: SectionTitleProps) => {
  return (
    <div className="flex gap-2">
      {icon}

      <div>
        <RegularText className="text-base-subtitle">{title}</RegularText>
        <RegularText className="text-sm">{subtitle}</RegularText>
      </div>
    </div>
  );
};
