import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

export function QuantityInput() {
  return (
    <div className="flex flex-1 items-center justify-between gap-1 rounded-md bg-base-button p-2">
      <button
        type="button"
        className="flex size-3.5 items-center border-none bg-transparent text-brand-purple transition disabled:opacity-40"
      >
        <FiMinus className="size-5" />
      </button>

      <input
        type="number"
        value={1}
        readOnly
        className="w-full bg-transparent text-center focus:outline-none"
      />

      <button
        type="button"
        className="flex size-3.5 items-center border-none bg-transparent text-brand-purple transition disabled:opacity-40"
      >
        <FiPlus className="size-5" />
      </button>
    </div>
  );
}
