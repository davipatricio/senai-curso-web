import { ProductData } from "./types";

export const mostSelledProducts = [
  {
    id: "headset-gamer-rise-mode-g1-preto-rmhsg1fb",
    name: "Headset Gamer Rise Mode G1, Drivers 50mm, P2, Preto - RM-HS-G1-FB",
    image:
      "https://images.kabum.com.br/produtos/fotos/483202/headset-gamer-rise-mode-g1-drivers-50mm-p2-preto-rm-hs-g1-fb_1712066527_gg.jpg",
    price: 179.99,
  },
  {
    id: "teclado-mecanico-hyperx-alloy-mkw100-preto-switch-red",
    name: "Teclado Mecânico Gamer HyperX Alloy MKW100, RGB, Switch Red, Full Size, US, Preto",
    image:
      "https://images.kabum.com.br/produtos/fotos/371586/teclado-mecanico-gamer-hyperx-alloy-mkw100-rgb-switch-red-full-size-layout-us-4p5e1aa-aba_1660832224_gg.jpg",
    price: 349.99,
  },
] as ProductData[];

export const promoProducts = [
  {
    id: "mouse-gamer-redragon-cobra-rgb-preto-m711-v2",
    name: "Mouse Gamer Redragon Cobra, Chroma RGB, 10000DPI, 7 Botões, Preto - M711 V2",
    image:
      "https://images.kabum.com.br/produtos/fotos/94555/mouse-gamer-redragon-cobra-chroma-rgb-12400dpi-7-botoes-preto-m711-v2_1656018617_gg.jpg",
    price: 119.99,
  },
  {
    id: "iphone-15-pro-max-256gb-48mp-preto-titanio",
    name: 'iPhone 15 Pro Max Apple 256GB, Câmera Dupla 48MP, Tela 6.7", Preto Titânio',
    image:
      "https://images.kabum.com.br/produtos/fotos/486306/iphone-15-apple-pro-max-256gb-titanio-preto-tela-de-6-7-camera-dupla-de-48mp-ios-mu773be-a_1699651983_gg.jpg",
    price: 11577.99,
  },
] as ProductData[];

export const AllProducts = [...promoProducts, ...mostSelledProducts];
