import ProductSection from "../components/home/product-section";
import { mostSelledProducts, promoProducts } from "../utils/products";

export default function IndexPage() {
  return (
    <>
      <ProductSection title="Em promoção" products={promoProducts} />
      <ProductSection title="Mais vendidos" products={mostSelledProducts} />
    </>
  );
}
