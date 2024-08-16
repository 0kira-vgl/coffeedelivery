import { Timer } from "lucide-react";
import { FaShoppingCart } from "react-icons/fa";
import { PiPackageFill } from "react-icons/pi";
import { PiCoffeeFill } from "react-icons/pi";

export function Introduction() {
  return (
    <div className="container h-screen w-full">
      <div className="max-w-[36.75rem]">
        <h1 className="font-baloo text-titleBase text-5xl font-extrabold">
          Encontre o café perfeito <br /> para qualquer hora do dia
        </h1>
        <p className="text-subtitle text-xl">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <div className="grid grid-cols-2">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full bg-yellow-600 p-2 text-white">
                <FaShoppingCart className="size-4" />
              </div>
              <span className="text-textBase font-medium">
                Compra simples e segura
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full bg-amber-300 p-2 text-white">
                <Timer className="size-4" />
              </div>
              <span className="text-textBase font-medium">
                Entrega rápida e rastreada
              </span>
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full bg-zinc-600 p-2 text-white">
                <PiPackageFill className="size-4" />
              </div>
              <span className="text-textBase font-medium">
                Embalagem mantém o café intacto
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full bg-purple-600 p-2 text-white">
                <PiCoffeeFill className="size-4" />
              </div>
              <span className="text-textBase font-medium">
                O café chega fresquinho até você
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
