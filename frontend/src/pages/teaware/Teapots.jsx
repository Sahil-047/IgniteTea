import ProductLayout from "@/components/ProductLayout";
import teapot1 from "@/assets/Tea Pots/Tea Pots  (1).png";
import teapot2 from "@/assets/Tea Pots/Tea Pots  (2).png";
import teapot3 from "@/assets/Tea Pots/Tea Pots  (3).png";
import teapot4 from "@/assets/Tea Pots/Tea Pots  (4).png";
import teapot5 from "@/assets/Tea Pots/Tea Pots  (5).png";
import teapot6 from "@/assets/Tea Pots/Tea Pots  (6).png";
import teapot7 from "@/assets/Tea Pots/Tea Pots  (7).png";
import teapot8 from "@/assets/Tea Pots/Tea Pots  (8).png";

export default function Teapots() {
  const products = [
    {
      id: 1,
      brand: "IGNITE TEA",
      name: "CLASSIC CERAMIC POT",
      weight: "500 ML",
      type: "TRADITIONAL CLAY",
      images: [teapot1, teapot2],
      price: 1299,
      rating: 4.8,
      reviews: 95,
    },
    {
      id: 2,
      brand: "IGNITE TEA",
      name: "GLASS INFUSER POT",
      weight: "600 ML",
      type: "MODERN BOROSILICATE",
      images: [teapot3, teapot4],
      price: 999,
      rating: 4.6,
      reviews: 82,
    },
    {
      id: 3,
      brand: "IGNITE TEA",
      name: "CAST IRON TETSUBIN",
      weight: "800 ML",
      type: "JAPANESE STYLE",
      images: [teapot5, teapot6],
      price: 2499,
      rating: 4.9,
      reviews: 110,
    },
    {
      id: 4,
      brand: "IGNITE TEA",
      name: "PORCELAIN GAIWAN",
      weight: "150 ML",
      type: "CHINESE STYLE",
      images: [teapot7, teapot8],
      price: 899,
      rating: 4.7,
      reviews: 76,
    },
    {
      id: 5,
      brand: "IGNITE TEA",
      name: "VINTAGE TEAPOT",
      weight: "700 ML",
      type: "HANDCRAFTED",
      images: [teapot1, teapot3],
      price: 1899,
      rating: 4.8,
      reviews: 64,
    },
    {
      id: 6,
      brand: "IGNITE TEA",
      name: "MODERN MINIMALIST",
      weight: "450 ML",
      type: "CONTEMPORARY",
      images: [teapot2, teapot4],
      price: 1499,
      rating: 4.7,
      reviews: 89,
    },
  ];

  return <ProductLayout title="Teapots" products={products} />;
}
