import ProductLayout from "@/components/ProductLayout";
import matchaTea1 from "@/assets/Tea Web/Matcha Tea/matcha tea main (1).png";
import matchaTea2 from "@/assets/Tea Web/Matcha Tea/matcha tea main (2).png";
import jasmine1 from "@/assets/Tea Web/Jasmine Tea/jamine tea main (1).png";
import jasmine2 from "@/assets/Tea Web/Jasmine Tea/jamine tea main (2).png";
import hibiscus1 from "@/assets/Tea Web/Hibiscus Tea/hibiscus tea main (1).png";
import hibiscus2 from "@/assets/Tea Web/Hibiscus Tea/hibiscus tea main (2).png";
import whiteTea1 from "@/assets/Tea Web/White Tea/white tea main (1).png";
import whiteTea2 from "@/assets/Tea Web/White Tea/white tea main (2).png";
import oolongTea1 from "@/assets/Tea Web/Oolong Tea/oolong tea main (1).png";
import oolongTea3 from "@/assets/Tea Web/Oolong Tea/oolong tea main (3).png";
import earlGrey1 from "@/assets/Tea Web/Earl Grey/Earl Grey main (1).png";
import earlGrey2 from "@/assets/Tea Web/Earl Grey/Earl Grey main (2).png";

export default function NewArrivals() {
  const products = [
    {
      id: 1,
      brand: "IGNITE TEA",
      name: "CEREMONIAL MATCHA",
      weight: "30 GM",
      type: "MATCHA TEA",
      images: [matchaTea1, matchaTea2],
      price: 1250,
      rating: 4.9,
      reviews: 203,
      isNew: true,
    },
    {
      id: 2,
      brand: "IGNITE TEA",
      name: "JASMINE PEARLS",
      weight: "50 GM",
      type: "GREEN TEA",
      images: [jasmine1, jasmine2],
      price: 950,
      rating: 4.8,
      reviews: 145,
      isNew: true,
    },
    {
      id: 3,
      brand: "IGNITE TEA",
      name: "HIBISCUS SUNSET",
      weight: "50 GM",
      type: "HERBAL TEA",
      images: [hibiscus1, hibiscus2],
      price: 525,
      rating: 4.6,
      reviews: 98,
      isNew: true,
    },
    {
      id: 4,
      brand: "IGNITE TEA",
      name: "MOONLIGHT WHITE",
      weight: "50 GM",
      type: "WHITE TEA",
      images: [whiteTea1, whiteTea2],
      price: 1450,
      rating: 4.8,
      reviews: 97,
      isNew: true,
    },
    {
      id: 5,
      brand: "IGNITE TEA",
      name: "SILVER TIPS IMPERIAL",
      weight: "50 GM",
      type: "OOLONG TEA",
      images: [oolongTea1, oolongTea3],
      price: 1950,
      rating: 4.9,
      reviews: 89,
      isNew: true,
    },
    {
      id: 6,
      brand: "IGNITE TEA",
      name: "EARL GREY SUPREME",
      weight: "100 GM",
      type: "BLACK TEA",
      images: [earlGrey1, earlGrey2],
      price: 850,
      rating: 4.7,
      reviews: 178,
      isNew: true,
    },
  ];

  return <ProductLayout title="New Arrivals" products={products} />;
}
