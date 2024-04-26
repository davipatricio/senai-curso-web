import Header from "./components/header";
import ProductSection from "./components/home/product-section";
import { mostSelledProducts, promoProducts } from "./utils/products";

export default function App() {
  return (
    <>
      <Header />
      <main className="flex w-full min-h-[calc(100vh-80px)]">
        <aside className="hidden sm:flex min-h-full max-w-[260px] bg-red-600">
          a
        </aside>

        <div className="flex flex-col gap-2 w-full p-2 sm:p-4 md:p-10 h-fit">
          <ProductSection title="Em promoção" products={promoProducts} />
          <ProductSection title="Mais vendidos" products={mostSelledProducts} />
        </div>
      </main>
    </>
  );
}
