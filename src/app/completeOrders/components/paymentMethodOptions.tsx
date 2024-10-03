import { CgCreditCard } from "react-icons/cg";
import { PaymentInput } from "./paymentInput";
import { AiOutlineBank } from "react-icons/ai";
import { FaPix } from "react-icons/fa6";

export function PaymentMethodOptions() {
  return (
    <div className="grid grid-cols-3 gap-3">
      <PaymentInput
        icon={<CgCreditCard className="size-4 text-brand-purple" />}
        title="Cartão de Crédito"
      />
      <PaymentInput
        icon={<AiOutlineBank className="size-4 text-brand-purple" />}
        title="Cartão de Débito"
      />
      <PaymentInput
        icon={<FaPix className="size-4 text-brand-purple" />}
        title="Pix"
      />
    </div>
  );
}
