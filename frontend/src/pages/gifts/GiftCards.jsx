import ProductLayout from "@/components/ProductLayout";
import giftImage from "@/assets/gift.png";
import premiumImage from "@/assets/premium.png";
import looseLeaf from "@/assets/loose leaf.png";

export default function GiftCards() {
  const products = [
    {
      id: 1,
      brand: "IGNITE TEA",
      name: "DIGITAL GIFT CARD",
      weight: "₹500 - ₹2,000",
      type: "INSTANT EMAIL",
      images: [giftImage, premiumImage],
      price: 500,
      rating: 4.9,
      reviews: 210,
      isBestSeller: true,
    },
    {
      id: 2,
      brand: "IGNITE TEA",
      name: "PRINTED GIFT CARD",
      weight: "₹1,000 - ₹5,000",
      type: "PREMIUM CARD",
      images: [premiumImage, giftImage],
      price: 1000,
      rating: 4.8,
      reviews: 134,
      isNew: true,
    },
    {
      id: 3,
      brand: "IGNITE TEA",
      name: "TEA EXPERIENCE CARD",
      weight: "TEA + SESSION",
      type: "TASTING CREDIT",
      images: [looseLeaf, giftImage],
      price: 2500,
      rating: 4.7,
      reviews: 87,
    },
    {
      id: 4,
      brand: "IGNITE TEA",
      name: "CELEBRATION CARD",
      weight: "₹2,500 - ₹10,000",
      type: "SPECIAL OCCASIONS",
      images: [giftImage, looseLeaf],
      price: 2500,
      rating: 4.8,
      reviews: 65,
    },
  ];

  return <ProductLayout title="Gift Cards" products={products} />;
}
