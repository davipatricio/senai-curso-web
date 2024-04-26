import { ProductData } from "../../../utils/types";
import ProductCard from "./product-card";

interface ProductSectionProps {
  title: string;
  products: ProductData[];
}

export default function ProductSection({
  title,
  products,
}: ProductSectionProps) {
  return (
    <section className="flex flex-col gap-4 rounded-xl p-4 bg-neutral-950 w-full overflow-x-auto">
      <h1 className="font-bold text-2xl">{title}</h1>

      <div className="flex gap-2">
        {products.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </div>
    </section>
  );
}
