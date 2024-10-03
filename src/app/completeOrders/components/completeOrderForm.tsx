import { TitleText } from "@/components/typography";
import { PiMapPinLine } from "react-icons/pi";
import { SectionTitle } from "./sectionTitle";
import { AddressForm } from "./addressForm";
import { BiDollar } from "react-icons/bi";
import { PaymentMethodOptions } from "./paymentMethodOptions";

export function CompleteOrderForm() {
  return (
    <div className="flex w-[40rem] flex-col gap-3">
      <TitleText className="text-lg text-base-subtitle">
        Complete seu pedido
      </TitleText>

      <section className="flex w-full flex-col gap-8 rounded-md bg-base-card p-10">
        <SectionTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<PiMapPinLine className="size-5 text-brand-yellow-dark" />}
        />

        <AddressForm />
      </section>

      <section className="flex w-full flex-col gap-8 rounded-md bg-base-card p-10">
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<BiDollar className="size-5 text-brand-purple" />}
        />

        <PaymentMethodOptions />
      </section>
    </div>
  );
}
