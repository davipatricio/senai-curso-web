import { useParams } from "react-router-dom";
import { AllProducts } from "../../../utils/products";
import { useMemo } from "react";
import { numberToPrice } from "../../../utils/lib";

export default function ProductPage() {
  const { id } = useParams();
  const product = useMemo(
    () => AllProducts.find((product) => product.id === id),
    [id]
  );

  if (!product) {
    throw new Error("Not found");
  }

  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-x-10 gap-y-4 lg:flex-row w-full">
        <div className="max-w-[344px] m-auto sm:m-0 max-h-[344px] w-full h-full rounded-2xl overflow-hidden flex-shrink-[0.1]">
          <img src={product.image} className="hover:scale-110" />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <p className="font-bold max-w-[670px] text-xl md:text-2xl">
              {product.name}
            </p>

            <span className="text-red-400 line-through font-bold">
              De {numberToPrice(product.price * 1.1)}
            </span>

            <span className="text-emerald-400 font-bold text-2xl">
              {numberToPrice(product.price)}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <button
              type="button"
              className="my-2 w-fit bg-emerald-700 hover:bg-emerald-800 focus:bg-emerald-800 text-xl p-2 px-4 rounded-xl font-bold"
            >
              Adquirir
            </button>

            <span className="text-neutral-200">
              Formas de pagamentos aceitas: Pix, cartão de crédito e boleto*
            </span>
            <span className="text-neutral-300">
              * O pagamento em boleto pode demorar até 3 dias úteis para ser
              aprovado.
            </span>
          </div>
        </div>
      </header>

      <section className="text-md md:w-[80%]">
        <h1 className="text-2xl font-bold my-2">Descrição</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          non est elementum erat euismod rhoncus eget vitae turpis. Vestibulum
          porta aliquet metus in vehicula. Cras accumsan purus dictum posuere
          lacinia. Proin a lorem mi. Mauris tincidunt convallis condimentum.
          Etiam accumsan at erat in mattis. Quisque quis egestas arcu, eget
          porta mi. Quisque lobortis imperdiet faucibus. Donec eu dictum nunc.
          Morbi porta enim quam, quis tempus arcu eleifend ac. Ut tincidunt
          magna eget risus feugiat tristique. Donec venenatis sem vel nulla
          facilisis, maximus ornare orci ultrices. Nam vitae sem sapien.
        </p>
      </section>
    </div>
  );
}
