import ProductLayout from "@/components/ProductLayout";
import giftImage from "@/assets/gift.png";
import premiumImage from "@/assets/premium.png";
import looseLeaf from "@/assets/loose leaf.png";
import tinCaddies from "@/assets/tin caddies.png";

export default function CustomGifts() {
  const products = [
    {
      id: 1,
      brand: "IGNITE TEA",
      name: "BUILD-YOUR-OWN BOX",
      weight: "4 X 50 GM",
      type: "PERSONALISED SELECTION",
      images: [giftImage, looseLeaf],
      price: 2599,
      rating: 4.9,
      reviews: 118,
      isBestSeller: true,
    },
    {
      id: 2,
      brand: "IGNITE TEA",
      name: "NAME-ENGRAVED TIN SET",
      weight: "3 X 75 GM",
      type: "CUSTOM TIN CADDIES",
      images: [tinCaddies, giftImage],
      price: 2899,
      rating: 4.8,
      reviews: 74,
      isNew: true,
    },
    {
      id: 3,
      brand: "IGNITE TEA",
      name: "WEDDING FAVOUR SET",
      weight: "20 MINI TINS",
      type: "EVENT SPECIAL",
      images: [premiumImage, tinCaddies],
      price: 4999,
      rating: 4.7,
      reviews: 52,
    },
    {
      id: 4,
      brand: "IGNITE TEA",
      name: "CORPORATE GIFTING BOX",
      weight: "10 CURATED BOXES",
      type: "BULK CUSTOM",
      images: [giftImage, premiumImage],
      price: 9999,
      rating: 4.8,
      reviews: 39,
    },
  ];

  return <ProductLayout title="Custom Gifts" products={products} />;
}
