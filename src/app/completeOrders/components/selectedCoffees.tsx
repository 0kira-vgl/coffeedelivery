import { TitleText } from "@/components/typography";
import { CoffeeCartCard } from "./coffeeCartCard";
import { ConfirmationSection } from "./confirmationSection";

export function SelectedCoffees() {
  return (
    <div className="flex w-[40rem] flex-col gap-3">
      <TitleText className="text-lg font-bold text-base-subtitle">
        Cafés selecionados
      </TitleText>

      <div className="flex w-full flex-col rounded-[6px_44px_6px_44px] bg-base-card p-10">
        <CoffeeCartCard />
        <CoffeeCartCard />
        <CoffeeCartCard />

        <ConfirmationSection />
      </div>
    </div>
  );
}
