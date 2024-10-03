import Logo from "@public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-24 w-full justify-center bg-base-background/20 backdrop-blur-sm">
      <div className="content-defaullContainer mx-auto flex w-full max-w-[70rem] items-center justify-between">
        <Link href="/">
          <Image src={Logo} alt="Coffe Delivery Logo" className="select-none" />
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="relative flex h-[2.3rem] min-w-[2.3rem] items-center justify-center gap-1 rounded-md bg-brand-purple/10"
          >
            <FaLocationDot size={20} className="text-brand-purple" />
            Porto Alegre, RS
          </Link>

          <Link
            href="/completeOrders"
            className="relative flex h-[2.3rem] min-w-[2.3rem] items-center justify-center gap-1 rounded-md bg-brand-yellow/10"
          >
            <FaShoppingCart size={20} className="text-brand-yellow" />
          </Link>
        </div>
      </div>
    </header>
  );
}
