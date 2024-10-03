import { CompleteOrderForm } from "./components/completeOrderForm";
import { SelectedCoffees } from "./components/selectedCoffees";

export default function CompleteOrders() {
  return (
    <form className="mx-auto mt-10 flex w-full max-w-[70rem] justify-between gap-8">
      <CompleteOrderForm />
      <SelectedCoffees />
    </form>
  );
}
