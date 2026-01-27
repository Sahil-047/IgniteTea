import ProductLayout from "@/components/ProductLayout";
import teapot2 from "@/assets/Tea Pots/Tea Pots  (2).png";
import teapot3 from "@/assets/Tea Pots/Tea Pots  (3).png";
import teapot4 from "@/assets/Tea Pots/Tea Pots  (4).png";
import teapot9 from "@/assets/Tea Pots/Tea Pots  (9).png";
import teapot10 from "@/assets/Tea Pots/Tea Pots  (10).png";
import teapot11 from "@/assets/Tea Pots/Tea Pots  (11).png";
import tinCaddies from "@/assets/tin caddies.png";
import looseLeaf from "@/assets/loose leaf.png";

export default function Accessories() {
  const products = [
    {
      id: 1,
      brand: "IGNITE TEA",
      name: "TEA INFUSER SET",
      weight: "SET OF 3",
      type: "STAINLESS STEEL",
      images: [teapot2, teapot3],
      price: 499,
      rating: 4.6,
      reviews: 167,
    },
    {
      id: 2,
      brand: "IGNITE TEA",
      name: "BAMBOO TEA TRAY",
      weight: "30 x 20 CM",
      type: "NATURAL",
      images: [teapot4, teapot9],
      price: 1299,
      rating: 4.8,
      reviews: 93,
    },
    {
      id: 3,
      brand: "IGNITE TEA",
      name: "TEA STORAGE TINS",
      weight: "SET OF 4",
      type: "AIRTIGHT",
      images: [tinCaddies, teapot10],
      price: 899,
      rating: 4.7,
      reviews: 128,
    },
    {
      id: 4,
      brand: "IGNITE TEA",
      name: "TEA SCOOP SET",
      weight: "SET OF 3",
      type: "BAMBOO",
      images: [looseLeaf, teapot11],
      price: 399,
      rating: 4.5,
      reviews: 145,
    },
    {
      id: 5,
      brand: "IGNITE TEA",
      name: "DIGITAL TIMER",
      weight: "MAGNETIC",
      type: "ELECTRONIC",
      images: [teapot2, teapot4],
      price: 799,
      rating: 4.6,
      reviews: 112,
    },
    {
      id: 6,
      brand: "IGNITE TEA",
      name: "TEA TOWEL SET",
      weight: "SET OF 3",
      type: "COTTON",
      images: [teapot3, teapot9],
      price: 599,
      rating: 4.4,
      reviews: 89,
    },
  ];

  return <ProductLayout title="Tea Accessories" products={products} />;
}
