import ProductLayout from "@/components/ProductLayout";
import blackTea1 from "@/assets/Tea Web/Black Tea/Black Tea Main (1).png";
import blackTea2 from "@/assets/Tea Web/Black Tea/Black Tea Main (2).png";
import greenTea1 from "@/assets/Tea Web/Green Tea/Green Tea main (1).png";
import greenTea2 from "@/assets/Tea Web/Green Tea/Green Tea main (2).png";
import matchaTea1 from "@/assets/Tea Web/Matcha Tea/matcha tea main (1).png";
import matchaTea2 from "@/assets/Tea Web/Matcha Tea/matcha tea main (2).png";
import earlGrey1 from "@/assets/Tea Web/Earl Grey/Earl Grey main (1).png";
import earlGrey2 from "@/assets/Tea Web/Earl Grey/Earl Grey main (2).png";
import chamomile1 from "@/assets/Tea Web/Chamomile tea/chamomile tea main (1).png";
import chamomile2 from "@/assets/Tea Web/Chamomile tea/chamomile tea main (2).png";
import jasmine1 from "@/assets/Tea Web/Jasmine Tea/jamine tea main (1).png";
import jasmine2 from "@/assets/Tea Web/Jasmine Tea/jamine tea main (2).png";

export default function BestSellers() {
  const products = [
    {
      id: 1,
      brand: "IGNITE TEA",
      name: "HIMALAYAN SPRING",
      weight: "100 GM",
      type: "BLACK TEA",
      images: [blackTea1, blackTea2],
      price: 795,
      rating: 4.8,
      reviews: 124,
      isBestSeller: true,
    },
    {
      id: 2,
      brand: "IGNITE TEA",
      name: "SUMMER SOLSTICE",
      weight: "50 GM",
      type: "GREEN TEA",
      images: [greenTea1, greenTea2],
      price: 650,
      rating: 4.7,
      reviews: 156,
      isBestSeller: true,
    },
    {
      id: 3,
      brand: "IGNITE TEA",
      name: "CEREMONIAL MATCHA",
      weight: "30 GM",
      type: "MATCHA TEA",
      images: [matchaTea1, matchaTea2],
      price: 1250,
      rating: 4.9,
      reviews: 203,
      isBestSeller: true,
    },
    {
      id: 4,
      brand: "IGNITE TEA",
      name: "EARL GREY SUPREME",
      weight: "100 GM",
      type: "BLACK TEA",
      images: [earlGrey1, earlGrey2],
      price: 850,
      rating: 4.7,
      reviews: 178,
      isBestSeller: true,
    },
    {
      id: 5,
      brand: "IGNITE TEA",
      name: "CHAMOMILE BLISS",
      weight: "50 GM",
      type: "HERBAL TEA",
      images: [chamomile1, chamomile2],
      price: 550,
      rating: 4.6,
      reviews: 112,
      isBestSeller: true,
    },
    {
      id: 6,
      brand: "IGNITE TEA",
      name: "JASMINE PEARLS",
      weight: "50 GM",
      type: "GREEN TEA",
      images: [jasmine1, jasmine2],
      price: 950,
      rating: 4.8,
      reviews: 145,
      isBestSeller: true,
    },
  ];

  return <ProductLayout title="Best Sellers" products={products} />;
}
