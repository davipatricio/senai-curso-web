import { ChangeEvent, useState } from "react";

type SupportedPaymentMethods = keyof typeof PaymentMethods;

export interface RegisterProductState {
  name: string;
  description: string;
  base64: string;
  garantia: boolean;
  price: number;
  frete: number;
  quantity: number;
  paymentMethods: SupportedPaymentMethods[];
}

interface CreateProductFormProps {
  onAdd: (data: RegisterProductState) => void;
}

const PaymentMethods = {
  pix: "Pix",
  card: "Cartão de Crédito",
  boleto: "Boleto",
};

const initialProductData = {
  name: "",
  description: "",
  base64: "",
  garantia: false,
  price: 0,
  quantity: 0,
  frete: 0,
  paymentMethods: ["pix"],
} as RegisterProductState;

export default function CreateProductForm({ onAdd }: CreateProductFormProps) {
  const [data, setData] = useState<RegisterProductState>(initialProductData);

  const handleTextChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setData({
      ...data,
      [name]: checked,
    });
  };

  const handlePaymentMethod = (method: SupportedPaymentMethods) => () => {
    if (data.paymentMethods.includes(method))
      setData({
        ...data,
        paymentMethods: data.paymentMethods.filter((t) => t !== method),
      });
    else
      setData({
        ...data,
        paymentMethods: [...data.paymentMethods, method],
      });
  };

  const handleButtonSubmit = () => {
    onAdd(data);
    setData(initialProductData);
  };

  return (
    <>
      <label className="flex flex-col gap-2">
        <p className="font-bold text-lg">Nome do Produto</p>
        <input
          className="peer p-2 rounded-lg border border-neutral-700"
          type="text"
          placeholder="iPhone 15 Pro Apple 128GB, Câmera Tripla 48MP"
          name={"name"}
          value={data.name}
          onChange={handleTextChange}
          required
          minLength={4}
          maxLength={60}
        />
        <p className="hidden text-red-500 font-bold peer-[:not(:placeholder-shown):invalid]:flex">
          Insira um nome válido.
        </p>
      </label>
      <label className="flex flex-col gap-2">
        <p className="font-bold text-lg">Descrição do Produto</p>
        <textarea
          className="peer p-2 rounded-lg border border-neutral-700 min-h-[210px] max-h-[360px]"
          placeholder="O iPhone 15 Pro tem design robusto e leve em titânio aeroespacial. Na parte de trás, vidro..."
          name={"description"}
          value={data.description}
          onChange={handleTextChange}
          required
          minLength={10}
        />
        <p className="hidden text-red-500 font-bold peer-[:not(:placeholder-shown):invalid]:flex">
          Insira uma descrição válida com no mínimo 10 caracteres.
        </p>
      </label>
      <label className="flex flex-col gap-2">
        <p className="font-bold text-lg">Preço</p>
        <div className="flex gap-2 items-center">
          <span className="text-md font-bold text-zinc-200">R$</span>
          <input
            className="peer p-2 rounded-lg w-full border border-neutral-700"
            type="number"
            placeholder="7.899,32"
            min={1}
            max={50000}
            name={"price"}
            value={data.price === 0 ? "" : data.price}
            onChange={handleTextChange}
            required
          />
        </div>
        <p className="text-sm text-gray-300">
          O preço deve ser entre R$ 0,01 e R$ 50.000
        </p>
      </label>
      <label className="flex flex-col gap-2">
        <p className="font-bold text-lg">Frete</p>
        <div className="flex gap-2 items-center">
          <span className="text-md font-bold text-zinc-200">R$</span>
          <input
            className="p-2 rounded-lg w-full border border-neutral-700"
            type="number"
            placeholder="4,32"
            min={0}
            max={100}
            name={"frete"}
            value={data.frete === 0 ? "" : data.frete}
            onChange={handleTextChange}
            required
          />
        </div>
      </label>
      <label className="flex flex-col gap-2">
        <p className="font-bold text-lg">Estoque</p>
        <div className="flex gap-2">
          <input
            className="p-2 rounded-lg w-full border border-neutral-700"
            type="number"
            placeholder="1"
            min={1}
            max={100}
            name={"quantity"}
            value={data.quantity === 0 ? "" : data.quantity}
            onChange={handleTextChange}
            required
          />
        </div>
      </label>
      <label className="flex items-center gap-2">
        <p className="font-bold text-lg">Possui garantia?</p>
        <input
          className="p-2 size-4 rounded-lg border border-neutral-700"
          type="checkbox"
          checked={data.garantia}
          name={"garantia"}
          onChange={handleCheckbox}
        />
      </label>
      <div className="flex flex-col gap-2">
        <p className="font-bold text-lg">Metódos de Pagamento</p>

        <div className="flex gap-2">
          {(Object.keys(PaymentMethods) as SupportedPaymentMethods[]).map(
            (name) => (
              <label className="flex items-center gap-2">
                <input
                  className="p-2 size-4 rounded-lg border border-neutral-700"
                  type="checkbox"
                  checked={data.paymentMethods.includes(name)}
                  onChange={handlePaymentMethod(name)}
                />
                <p>{PaymentMethods[name]}</p>
              </label>
            ),
          )}
        </div>
      </div>

      <div>
        <button
          type="button"
          onClick={handleButtonSubmit}
          disabled={
            !data.name || !data.description || !data.price || !data.quantity
          }
          className="bg-emerald-700 hover:bg-emerald-800 focus:bg-emerald-800 group-invalid:cursor-not-allowed group-invalid:opacity-70 group-invalid:!bg-red-500 p-2 px-4 rounded-xl font-bold transition-all duration-500"
        >
          Publicar produto
        </button>
      </div>
    </>
  );
}
