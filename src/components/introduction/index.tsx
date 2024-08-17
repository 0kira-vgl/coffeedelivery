import Coffee from "@public/coffeeIntro.png";
import Image from "next/image";
import { RegularText, TitleText } from "../typography";
import { InfoWithIcon } from "../infoWithIcon";
import { FaShoppingCart } from "react-icons/fa";
import { PiPackageFill, PiTimerFill, PiCoffeeFill } from "react-icons/pi";

export function Introduction() {
  return (
    <section className="bg-pattern flex h-[34rem] w-full items-center justify-center bg-cover bg-center bg-no-repeat">
      <div className="mx-auto flex w-full max-w-[70rem] items-center justify-between gap-14">
        <div>
          <section className="space-y-5">
            <TitleText>
              Encontre o café perfeito <br /> para qualquer hora do dia
            </TitleText>

            <RegularText className="text-base-subtitle text-regular-l">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>

          <div className="mt-[4.125rem] grid w-full grid-cols-2 gap-y-5">
            <InfoWithIcon
              icon={<FaShoppingCart />}
              text="Compra simples e segura"
              iconBg="bg-brand-yellow-dark"
            />
            <InfoWithIcon
              icon={<PiPackageFill />}
              text="Embalagem mantém o café intacto"
              iconBg="bg-base-text"
            />
            <InfoWithIcon
              icon={<PiTimerFill />}
              text="Entrega rápida e rastreada"
              iconBg="bg-brand-yellow"
            />
            <InfoWithIcon
              icon={<PiCoffeeFill />}
              text="O café chega fresquinho até você"
              iconBg="bg-brand-purple"
            />
          </div>
        </div>

        <Image src={Coffee} alt="Coffee Ilustration" className="select-none" />
      </div>
    </section>
  );
}
