import { ComponentProps } from "react";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { tv } from "tailwind-variants";

interface QuantityInputProps extends ComponentProps<"div"> {
  size?: "card";
}

const inputVariants = tv({
  base: "flex flex-1 items-center justify-between gap-1 rounded-md bg-base-button p-2",
  variants: {
    size: {
      card: "max-w-[4.5rem] h-full p-2 px-2 py-[0.3rem]",
    },
  },
});

export function QuantityInput({ size, ...props }: QuantityInputProps) {
  return (
    <div {...props} className={inputVariants({ size })}>
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
