import ProductLayout from "@/components/ProductLayout";
import teapot5 from "@/assets/Tea Pots/Tea Pots  (5).png";
import teapot6 from "@/assets/Tea Pots/Tea Pots  (6).png";
import teapot7 from "@/assets/Tea Pots/Tea Pots  (7).png";
import teapot8 from "@/assets/Tea Pots/Tea Pots  (8).png";
import teapot9 from "@/assets/Tea Pots/Tea Pots  (9).png";
import teapot10 from "@/assets/Tea Pots/Tea Pots  (10).png";
import teapot11 from "@/assets/Tea Pots/Tea Pots  (11).png";
import teapot1 from "@/assets/Tea Pots/Tea Pots  (1).png";

export default function CupsMugs() {
  const products = [
    {
      id: 1,
      brand: "IGNITE TEA",
      name: "CERAMIC TEA CUPS",
      weight: "SET OF 4",
      type: "TRADITIONAL",
      images: [teapot5, teapot6],
      price: 799,
      rating: 4.7,
      reviews: 142,
    },
    {
      id: 2,
      brand: "IGNITE TEA",
      name: "GLASS DOUBLE WALL",
      weight: "SET OF 2",
      type: "MODERN",
      images: [teapot7, teapot8],
      price: 699,
      rating: 4.8,
      reviews: 118,
    },
    {
      id: 3,
      brand: "IGNITE TEA",
      name: "JAPANESE YUNOMI",
      weight: "SET OF 2",
      type: "AUTHENTIC",
      images: [teapot9, teapot10],
      price: 899,
      rating: 4.6,
      reviews: 87,
    },
    {
      id: 4,
      brand: "IGNITE TEA",
      name: "TRAVEL MUG",
      weight: "450 ML",
      type: "INSULATED",
      images: [teapot11, teapot1],
      price: 1299,
      rating: 4.9,
      reviews: 203,
    },
    {
      id: 5,
      brand: "IGNITE TEA",
      name: "PORCELAIN MUGS",
      weight: "SET OF 4",
      type: "CLASSIC",
      images: [teapot5, teapot7],
      price: 1099,
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 6,
      brand: "IGNITE TEA",
      name: "ARTISAN CUPS",
      weight: "SET OF 6",
      type: "HANDMADE",
      images: [teapot6, teapot8],
      price: 1599,
      rating: 4.8,
      reviews: 94,
    },
  ];

  return <ProductLayout title="Cups & Mugs" products={products} />;
}
