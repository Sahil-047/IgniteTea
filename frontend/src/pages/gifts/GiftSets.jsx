import ProductLayout from "@/components/ProductLayout";
import giftImage from "@/assets/gift.png";
import tinCaddies from "@/assets/tin caddies.png";
import premiumImage from "@/assets/premium.png";
import looseLeaf from "@/assets/loose leaf.png";

export default function GiftSets() {
  const products = [
    {
      id: 1,
      brand: "IGNITE TEA",
      name: "SIGNATURE GIFT BOX",
      weight: "4 X 50 GM",
      type: "ASSORTED LOOSE LEAF",
      images: [giftImage, premiumImage],
      price: 2499,
      rating: 4.9,
      reviews: 132,
      isBestSeller: true,
    },
    {
      id: 2,
      brand: "IGNITE TEA",
      name: "TIN CADDY COLLECTION",
      weight: "3 X 75 GM",
      type: "CURATED SELECTION",
      images: [tinCaddies, giftImage],
      price: 1999,
      rating: 4.8,
      reviews: 98,
      isNew: true,
    },
    {
      id: 3,
      brand: "IGNITE TEA",
      name: "TEA LOVER'S DUO",
      weight: "2 X 100 GM",
      type: "PREMIUM LOOSE LEAF",
      images: [premiumImage, looseLeaf],
      price: 1599,
      rating: 4.7,
      reviews: 76,
    },
    {
      id: 4,
      brand: "IGNITE TEA",
      name: "DISCOVERY SAMPLER",
      weight: "6 X 25 GM",
      type: "TASTING SET",
      images: [looseLeaf, giftImage],
      price: 1299,
      rating: 4.6,
      reviews: 64,
    },
    {
      id: 5,
      brand: "IGNITE TEA",
      name: "EVENING RITUAL SET",
      weight: "3 X 50 GM",
      type: "CALMING BLENDS",
      images: [giftImage, looseLeaf],
      price: 1799,
      rating: 4.8,
      reviews: 54,
    },
    {
      id: 6,
      brand: "IGNITE TEA",
      name: "MORNING ENERGY BOX",
      weight: "3 X 75 GM",
      type: "BRIGHT & BOLD",
      images: [premiumImage, tinCaddies],
      price: 1899,
      rating: 4.7,
      reviews: 47,
    },
  ];

  return <ProductLayout title="Gifts" products={products} />;
}
