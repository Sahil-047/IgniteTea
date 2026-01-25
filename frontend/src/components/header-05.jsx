import { Header } from "@/components/header";
import { useState, useEffect } from "react";
import { TeaCard } from "@/components/TeaCard";

// Import tea images for carousel
import blackTea from "@/assets/Tea Web/Black Tea/Black Tea Main (1).png";
import chamomileTea from "@/assets/Tea Web/Chamomile tea/chamomile tea main (1).png";
import earlGrey from "@/assets/Tea Web/Earl Grey/Earl Grey main (1).png";
import greenTea from "@/assets/Tea Web/Green Tea/Green Tea main (1).png";
import hibiscusTea from "@/assets/Tea Web/Hibiscus Tea/hibiscus tea main (1).png";
import jasmineTea from "@/assets/Tea Web/Jasmine Tea/jamine tea main (1).png";
import matchaTea from "@/assets/Tea Web/Matcha Tea/matcha tea main (1).png";
import oolongTea from "@/assets/Tea Web/Oolong Tea/oolong tea main (1).png";
import peppermintTea from "@/assets/Tea Web/Peppermint Tea/Peppermint Tea (1).png";
import whiteTea from "@/assets/Tea Web/White Tea/white tea main (1).png";

// Import tea images for cards (multiple images for carousel on hover)
import matchaCard1 from "@/assets/Tea Web/Matcha Tea/matcha tea main (1).png";
import matchaCard2 from "@/assets/Tea Web/Matcha Tea/matcha tea main (2).png";
import earlGreyCard1 from "@/assets/Tea Web/Earl Grey/Earl Grey main (1).png";
import earlGreyCard2 from "@/assets/Tea Web/Earl Grey/Earl Grey main (2).png";
import jasmineCard1 from "@/assets/Tea Web/Jasmine Tea/jamine tea main (1).png";
import jasmineCard2 from "@/assets/Tea Web/Jasmine Tea/jamine tea main (2).png";

// Import tea workers image
import teaWorkers from "@/assets/Tea Web/pexels-masudar-16721755.jpg";

export default function Header05() {
  const teaImages = [
    { name: "Black Tea", image: blackTea },
    { name: "Chamomile Tea", image: chamomileTea },
    { name: "Earl Grey", image: earlGrey },
    { name: "Green Tea", image: greenTea },
    { name: "Hibiscus Tea", image: hibiscusTea },
    { name: "Jasmine Tea", image: jasmineTea },
    { name: "Matcha Tea", image: matchaTea },
    { name: "Oolong Tea", image: oolongTea },
    { name: "Peppermint Tea", image: peppermintTea },
    { name: "White Tea", image: whiteTea },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teaImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [teaImages.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex-1">
        <section className="h-screen bg-white relative overflow-hidden z-10">
          {/* Carousel Container */}
          <div className="relative w-full h-full z-10">
            {/* Images */}
            <div className="relative w-full h-full z-10">
              {teaImages.map((tea, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={tea.image}
                    alt={tea.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
              {teaImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-black w-8'
                      : 'bg-black/40 hover:bg-black/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section> 

        <section className="min-h-screen py-16 px-4" style={{ backgroundColor: 'rgba(212, 233, 210, 0.3)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 
                className="text-2xl md:text-7xl font-light text-gray-600 mb-4"
                style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 400 }}> 
                Shop Premium Tea
              </h2>
              <p 
                className="text-lg md:text-xl text-gray-600"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                Best Sellers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-6xl mx-auto">
              <div>
                <TeaCard 
                  brand="IGNITE TEA"
                  name="HIMALAYAN SPRING"
                  weight="100 GM"
                  type="FIRST FLUSH LOOSE BLACK TEA"
                  images={[matchaCard1, matchaCard2]}
                  price={795}
                  rating={4.5}
                  reviews={70}
                />
              </div>
              <div>
                <TeaCard 
                  brand="IGNITE TEA"
                  name="SILVER TIPS IMPERIAL"
                  weight="50 GM"
                  type="LOOSE LEAF FULL MOON OOLONG TEA"
                  images={[earlGreyCard1, earlGreyCard2]}
                  price={1950}
                  rating={5}
                  reviews={17}
                />
              </div>
              <div>
                <TeaCard 
                  brand="IGNITE TEA"
                  name="DARJEELING BLACK TEA"
                  weight="500 GM"
                  type="LOOSE LEAF BLACK TEA"
                  images={[jasmineCard1, jasmineCard2]}
                  price={899}
                  rating={5}
                  reviews={19}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full h-screen overflow-hidden p-10" style={{ backgroundColor: 'rgba(212, 233, 210, 0.3)' }}>
          <img
            src={teaWorkers}
            alt="Tea workers harvesting tea leaves"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-10 bg-black/40"></div>
          <div className="absolute inset-10 grain-overlay pointer-events-none"></div>
          <div className="absolute inset-10 flex items-center justify-start z-10 pl-8 md:pl-16">
            <div className="text-left">
              <h2 
                className="text-2xl md:text-4xl lg:text-5xl font-light"
                style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 400, color: '#e9e5d2' }}>
                THE POETRY OF -
              </h2>
              <h2 
                className="text-2xl md:text-4xl lg:text-5xl font-light"
                style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 400, color: '#e9e5d2' }}>
                HERBS DANCING IN WATER
              </h2>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
