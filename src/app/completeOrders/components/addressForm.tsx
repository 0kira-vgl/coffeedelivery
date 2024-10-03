import { Input } from "@/components/input";

export function AddressForm() {
  return (
    <div className="grid w-full grid-flow-dense grid-cols-[12.5rem_17.25rem_3.75rem] gap-x-3 gap-y-4">
      <Input
        placeholder="CEP"
        type="number"
        className="col-span-3 max-w-[12.5rem]"
      />
      <Input placeholder="Rua" className="col-span-3" />
      <Input placeholder="Número" type="number" />
      <Input placeholder="Complemento" className="col-span-2" />
      <Input placeholder="Bairro" />
      <Input placeholder="Cidade" />
      <Input placeholder="UF" />
    </div>
  );
}
