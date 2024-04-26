import { numberToPrice } from "../../../../utils/lib";
import { ProductData } from "../../../../utils/types";

export default function ProductCard({ name, image, price }: ProductData) {
  return (
    <div className="group flex flex-col rounded-xl p-2 cursor-pointer hover:bg-zinc-900 overflow-hidden flex-shrink-0 w-[200px] md:p-4 md:w-[260px]">
      <div className="max-w-[260px] max-h-[260px] my-4">
        <img
          className="group-hover:scale-105 transition-all duration-200 mjy-4 rounded-xl"
          src={image}
        />
      </div>

      <p className="font-bold text-lg whitespace-nowrap text-ellipsis overflow-hidden">
        {name}
      </p>

      <span className="text-emerald-400 font-bold text-lg">
        {numberToPrice(price)}
      </span>
    </div>
  );
}
