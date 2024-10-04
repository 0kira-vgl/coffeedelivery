import { InfoWithIcon } from "@/components/infoWithIcon";
import { RegularText, TitleText } from "@/components/typography";
import Delivery from "@public/delivery.svg";
import Image from "next/image";
import { BiDollar } from "react-icons/bi";
import { PiMapPinFill, PiTimerFill } from "react-icons/pi";

export default function OrderSuccess() {
  return (
    <div className="mx-auto mt-20 flex w-full max-w-[70rem] flex-col gap-10">
      <div>
        <TitleText className="text-3xl text-brand-yellow-dark">
          Uhu! Pedido confirmado
        </TitleText>
        <RegularText className="text-xl text-base-subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section className="flex items-center justify-between">
        <div className="orderSuccess">
          <InfoWithIcon
            icon={<PiMapPinFill />}
            iconBg="bg-brand-purple"
            text={
              <RegularText className="text-base-subtitle">
                Entrega em{" "}
                <span className="font-bold">
                  Rua João Daniel Martinelli, 102
                </span>
                <br />
                Farrapos - Porto Alegre, RS
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<PiTimerFill />}
            iconBg="bg-brand-yellow"
            text={
              <RegularText className="text-base-subtitle">
                Previsão de entrega
                <br />
                <span className="font-bold">20 min - 30 min</span>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<BiDollar />}
            iconBg="bg-brand-yellow-dark"
            text={
              <RegularText className="text-base-subtitle">
                Pagamento na entrega
                <br />
                <span className="font-bold">Cartão de Crédito</span>
              </RegularText>
            }
          />
        </div>

        <Image src={Delivery} alt="Delivery" />
      </section>
    </div>
  );
}
