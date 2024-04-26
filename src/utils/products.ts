import { ProductData } from "./types";

export const mostSelledProducts = [
  ...Array.from({ length: 5 }).fill({
    name: "Headset Gamer Rise Mode G1, Drivers 50mm, P2, Preto - RM-HS-G1-FB",
    image:
      "https://images.kabum.com.br/produtos/fotos/483202/headset-gamer-rise-mode-g1-drivers-50mm-p2-preto-rm-hs-g1-fb_1712066527_gg.jpg",
    price: 179.99,
  }),
] as ProductData[];
