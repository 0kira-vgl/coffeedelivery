import Image from "next/image";
import { RegularText } from "@/components/typography";
import { QuantityInput } from "@/components/quantityInput";
import { BiTrash } from "react-icons/bi";

import Coffee from "@public/coffees/americano.png";

export const CoffeeCartCard = () => {
  return (
    <div className="mt-6 flex w-full items-center justify-between border-b border-base-button pb-6">
      <div className="flex items-center gap-6">
        <Image src={Coffee} alt="." className="size-16" />
        <div>
          <RegularText className="text-base-subtitle">
            Expresso Tradicional
          </RegularText>

          <div className="mt-2 flex h-8 items-center gap-2">
            <QuantityInput size="card" />
            <button className="flex h-full items-center gap-1 rounded-md bg-base-button px-2 py-0 text-xs text-base-text transition hover:bg-base-hover">
              <BiTrash className="size-4 text-brand-purple" />
              <span>REMOVER</span>
            </button>
          </div>
        </div>
      </div>

      <p className="self-start font-bold">R$ 9,90</p>
    </div>
  );
};
