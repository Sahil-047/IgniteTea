import { TeaCard } from "@/components/TeaCard";

// Import tea pot images
import teaPot1 from "@/assets/Tea Pots/Tea Pots  (1).png";
import teaPot2 from "@/assets/Tea Pots/Tea Pots  (2).png";
import teaPot3 from "@/assets/Tea Pots/Tea Pots  (3).png";
import teaPot4 from "@/assets/Tea Pots/Tea Pots  (4).png";
import teaPot5 from "@/assets/Tea Pots/Tea Pots  (5).png";
import teaPot6 from "@/assets/Tea Pots/Tea Pots  (6).png";

export default function TeaPots() {
  return (
    <section className="min-h-screen py-16 px-4" style={{ backgroundColor: 'rgba(212, 233, 210, 0.3)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            className="text-2xl md:text-7xl font-light text-gray-600 mb-4"
            style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 400 }}> 
            Tea Pots
          </h2>
          <p 
            className="text-lg md:text-xl text-gray-600"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            Premium Collection
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-6xl mx-auto">
          <div>
            <TeaCard 
              brand="IGNITE TEA"
              name="CLASSIC CERAMIC POT"
              weight="500 ML"
              type="HANDCRAFTED CERAMIC TEAPOT"
              images={[teaPot1, teaPot2]}
              price={1299}
              rating={4.8}
              reviews={45}
            />
          </div>
          <div>
            <TeaCard 
              brand="IGNITE TEA"
              name="GLASS INFUSER POT"
              weight="600 ML"
              type="PREMIUM GLASS TEAPOT WITH STAINLESS STEEL"
              images={[teaPot3, teaPot4]}
              price={1599}
              rating={5}
              reviews={32}
            />
          </div>
          <div>
            <TeaCard 
              brand="IGNITE TEA"
              name="CAST IRON TETSUBIN"
              weight="800 ML"
              type="TRADITIONAL JAPANESE CAST IRON TEAPOT"
              images={[teaPot5, teaPot6]}
              price={2499}
              rating={4.9}
              reviews={28}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
