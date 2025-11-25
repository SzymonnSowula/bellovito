import type { Feature } from "@/types";

export const features: Feature[] = [
  {
    id: "pasta",
    title: "Domowy Makaron",
    description: "Świeżo przygotowywany codziennie według tradycyjnych technik z wysokiej jakości mąki semolino.",
    image: "/images/pasta.png",
    price: "45 zł"
  },
  {
    id: "pizza",
    title: "Pizza z Pieca Opalanego Drewnem",
    description: "Autentyczny styl neapolitański z pomidorami San Marzano i mozzarellą z mleka bawołów.",
    image: "/images/pizza.png",
    price: "42 zł"
  },
  {
    id: "dessert",
    title: "Dolce Vita",
    description: "Wykwintne desery, w tym nasze firmowe Tiramisu, które osłodzą Twój wieczór.",
    image: "/images/tiramisu.png",
    price: "28 zł"
  }
];
