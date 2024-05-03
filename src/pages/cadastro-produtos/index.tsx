import { FormEvent, ChangeEvent, useState } from "react";

interface RegisterProductState {
  name: string;
  description: string;
  base64: string;
  garantia: boolean;
  price: number;
  frete: number;
  quantity: number;
  paymentMethods: ("pix" | "card" | "boleto")[];
}

export default function CadastroProdutos() {
  const [data, setData] = useState<RegisterProductState>({
    name: "",
    description: "",
    base64: "",
    garantia: false,
    price: 0,
    quantity: 0,
    frete: 0,
    paymentMethods: ["pix"],
  });

  const handleTextChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

  const handlePaymentMethod =
    (method: RegisterProductState["paymentMethods"][0]) => () => {
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Ainda não fiz.");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="font-bold text-2xl">Cadastro de Produtos</h1>

      <div className="flex flex-col gap-4 my-10 max-w-[620px] w-full">
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
            name={"descriptionasd"}
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
              max={10000}
              name={"price"}
              value={data.price === 0 ? "" : data.price}
              onChange={handleTextChange}
              required
            />
          </div>
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
            required
          />
        </label>

        <div className="flex flex-col gap-2">
          <p className="font-bold text-lg">Metódos de Pagamento</p>
          <div className="flex gap-2">
            <label className="flex items-center gap-2">
              <input
                className="p-2 size-4 rounded-lg border border-neutral-700"
                type="checkbox"
                checked={data.paymentMethods.includes("pix")}
                onChange={handlePaymentMethod("pix")}
              />
              <p>Pix</p>
            </label>

            <label className="flex items-center gap-2">
              <input
                className="p-2 size-4 rounded-lg border border-neutral-700"
                type="checkbox"
                checked={data.paymentMethods.includes("card")}
                onChange={handlePaymentMethod("card")}
              />
              <p>Cartão de Crédito</p>
            </label>

            <label className="flex items-center gap-2">
              <input
                className="p-2 size-4 rounded-lg border border-neutral-700"
                type="checkbox"
                checked={data.paymentMethods.includes("boleto")}
                onChange={handlePaymentMethod("boleto")}
              />
              <p>Boleto</p>
            </label>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="bg-emerald-700 hover:bg-emerald-800 focus:bg-emerald-800 p-2 px-4 rounded-xl font-bold"
          >
            Enviar produto
          </button>
        </div>
      </div>
    </form>
  );
}
