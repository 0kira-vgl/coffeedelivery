import Logo from "@public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

export function Header() {
  return (
    <header className="flex h-24 w-full justify-between px-40 py-8">
      <div>
        <Link href="/">
          <Image src={Logo} alt="Coffe Delivery Logo" />
        </Link>
      </div>

      <div className="flex gap-3">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 rounded-md bg-purple-300/50 p-2 text-purple-600"
        >
          <FaLocationDot className="size-5 text-purple-600" />
          Porto Alegre, RS
        </Link>

        <Link
          href="/"
          className="flex items-center justify-center rounded-md bg-yellow-400/30 px-3"
        >
          <FaShoppingCart className="size-5 text-yellow-600" />
        </Link>
      </div>
    </header>
  );
}
