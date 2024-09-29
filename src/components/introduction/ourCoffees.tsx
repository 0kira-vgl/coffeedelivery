import { coffees } from "@/data/coffees";
import { TitleText } from "../typography";
import { CoffeeCard } from "./coffeeCard";

export function OurCoffees() {
  return (
    <section className="mx-auto mt-8 w-full max-w-[70rem]">
      <TitleText className="text-3xl text-base-subtitle">
        Nossos cafés
      </TitleText>

      <div className="mt-14 grid w-full grid-cols-4 gap-x-8 gap-y-10">
        {coffees.map((coffee) => {
          return <CoffeeCard key={coffee.id} coffee={coffee} />;
        })}
      </div>
    </section>
  );
}
