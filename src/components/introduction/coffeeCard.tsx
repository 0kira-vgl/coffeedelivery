import Image from "next/image";
import { RegularText, TitleText } from "../typography";
import { QuantityInput } from "../quantityInput";
import { FaShoppingCart } from "react-icons/fa";

import Coffee from "../../../public/coffee.png";
import { FormatPrice } from "@/utils/formatPrice";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const formattedPrice = FormatPrice(coffee.price);

  return (
    <div className="flex w-full flex-col items-center justify-center rounded-[6px_36px_6px_36px] bg-base-card p-5 pt-0 text-center">
      <Image
        src={`/coffees/${coffee.photo}`}
        alt="."
        className="-mt-5"
        width={100}
        height={100}
        quality={100}
      />

      <div className="mb-5 mt-4 flex w-full flex-wrap items-center justify-center gap-1">
        {coffee.tags.map((tag) => (
          <span
            key={`${coffee.id}${tag}`}
            className="rounded-full bg-brand-yellow-light px-2 py-1 text-xs font-bold uppercase text-brand-yellow-dark"
          >
            {tag}
          </span>
        ))}

        <TitleText className="mt-2 text-xl font-bold text-base-subtitle">
          {coffee.name}
        </TitleText>

        <RegularText className="mb-8 text-sm text-base-label">
          {coffee.description}
        </RegularText>
      </div>

      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-1">
          <RegularText className="text-sm text-base-text">R$</RegularText>
          <TitleText className="text-2xl font-bold text-base-text">
            {formattedPrice}
          </TitleText>
        </div>

        <div className="flex w-[7.5rem]">
          <QuantityInput />

          <button className="ml-[0.3rem] flex size-[2.375rem] items-center justify-center rounded-md border-none bg-brand-purple-dark text-base-card transition hover:bg-brand-purple">
            <FaShoppingCart className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
