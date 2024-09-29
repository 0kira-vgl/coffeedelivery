import { Header } from "@/components/header";
import { Introduction } from "@/components/introduction";
import { OurCoffees } from "@/components/introduction/ourCoffees";

export default function Home() {
  return (
    <div className="mb-[9.8rem]">
      <Header />
      <Introduction />
      <OurCoffees />
    </div>
  );
}
