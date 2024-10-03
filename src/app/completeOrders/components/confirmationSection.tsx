import { Button } from "@/components/button";
import { RegularText } from "@/components/typography";

export const ConfirmationSection = () => {
  return (
    <section className="flex flex-col gap-[0.8rem]">
      <div className="flex items-center justify-between">
        <RegularText className="text-sm">Total de itens</RegularText>
        <RegularText>R$ 9,90</RegularText>
      </div>

      <div className="flex items-center justify-between">
        <RegularText className="text-sm">Entrega</RegularText>
        <RegularText>R$ 3,50</RegularText>
      </div>

      <div className="flex items-center justify-between">
        <RegularText className="text-xl font-bold text-base-subtitle">
          Total
        </RegularText>
        <RegularText className="text-xl font-bold text-base-subtitle">
          R$ 33,20
        </RegularText>
      </div>

      <Button className="mt-[0.7rem]">Confirmar Pedido</Button>
    </section>
  );
};
