import { Header } from "@/components/header";
import { useState, useEffect, useRef } from "react";
import { TeaCard } from "@/components/TeaCard";
import TeaPots from "@/components/TeaPots";
import Footer from "@/components/footer";
import Lenis from "lenis";

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

// Import tea process image
import teaProcess from "@/assets/tea process.png";

// Import premium collection images
import premiumImage from "@/assets/premium.png";
import looseLeafImage from "@/assets/loose leaf.png";
import giftImage from "@/assets/gift.png";
import tinCaddiesImage from "@/assets/tin caddies.png";

// Import night harvesting image
import teaHarvestingNight from "@/assets/tea harvesting night.jpg";

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
  const [poetryVisible, setPoetryVisible] = useState(false);
  const [nightTextVisible, setNightTextVisible] = useState(false);
  const poetrySectionRef = useRef(null);
  const nightSectionRef = useRef(null);
  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teaImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [teaImages.length]);

  useEffect(() => {
    const section = poetrySectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPoetryVisible(true);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = nightSectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNightTextVisible(true);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex-1 pb-8 md:pb-96">
        <section className="h-screen bg-white relative overflow-hidden z-10">
          {/* Carousel Container */}
          <div className="relative w-full h-full z-10">
            {/* Images */}
            <div className="relative w-full h-full z-10">
              {teaImages.map((tea, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
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
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${index === currentIndex
                    ? 'bg-black w-8'
                    : 'bg-black/40 hover:bg-black/60'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="min-h-screen py-16 px-4 pb-32 md:pb-40" style={{ backgroundColor: '#f2f8f1' }}>
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

        <TeaPots />

        <section className="min-h-screen py-16 px-4" style={{ backgroundColor: '#f2f8f1' }}>
          <div className="max-w-7xl mx-auto">
            {/* Section Heading */}
            <div className="text-center ">
              <h2
                className="text-2xl md:text-7xl font-light text-gray-600"
                style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 400 }}>
                Processing of tea
              </h2>
              <p
                className="text-lg md:text-xl text-gray-600 mb-4"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                How We Pick the best tea
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Tea Process Image */}
              <div className="mb-12">
                <img
                  src={teaProcess}
                  alt="Tea Production Process"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Description Text - Two Columns */}
              <div className="max-w-6xl mx-auto mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
                  <div>
                    <p
                      className="text-lg md:text-xl text-gray-700 leading-relaxed"
                      style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                      Makaibari spans over six ridges, and the tea cultivation is surrounded by forests and wildlife. A variety of fruits, wild flowers and woods grow along with the tea, untamed and unmanaged - as nature would have it.
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-lg md:text-xl text-gray-700 leading-relaxed"
                      style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                      This intense spiritual union among the land, plant life and people has given birth to all of the innovations and developments of unique products and methods of farming, like a six-tier permaculture system.
                    </p>
                  </div>
                </div>

                {/* Learn More Button */}
                <div className="text-center">
                  <button
                    className="px-12 py-4 bg-[#d9cda4] hover:bg-[#d9cda4] text-gray-800 font-medium text-lg rounded-none transition-colors duration-300"
                    style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={poetrySectionRef}
          className="relative w-full h-screen overflow-hidden z-20"
          style={{
            backgroundColor: "#f2f8f1",
            backgroundImage: `url(${teaWorkers})`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 grain-overlay pointer-events-none"></div>
          <div className="relative z-30 flex items-center justify-start px-8 md:px-16 h-full">
            <div className="text-left">
              <h2
                className="text-2xl md:text-4xl lg:text-3xl font-light"
                style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 400, color: "#e9e5d2" }}>
                {"THE POETRY OF -".split(" ").map((word, index) => (
                  <span
                    key={`${word}-${index}`}
                    className={`inline-block transition-all duration-700 ease-out ${poetryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                      }`}
                    style={{ transitionDelay: `${index * 90}ms` }}>
                    {word}&nbsp;
                  </span>
                ))}
              </h2>
              <h2
                className="text-2xl md:text-4xl lg:text-4xl font-light"
                style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 400, color: "#e9e5d2" }}>
                {"HERBS DANCING IN WATER".split(" ").map((word, index) => (
                  <span
                    key={`${word}-${index}`}
                    className={`inline-block transition-all duration-700 ease-out ${poetryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                      }`}
                    style={{ transitionDelay: `${(index + 4) * 90}ms` }}>
                    {word}&nbsp;
                  </span>
                ))}
              </h2>
            </div>
          </div>
        </section>

        <section className="py-20 px-4" style={{ backgroundColor: "#f2f8f1" }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-2xl md:text-7xl font-light text-gray-600"
                style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 400 }}>
                A World in a Cup
              </h2>
              <p
                className="text-lg md:text-xl text-gray-600 mt-4"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                Let our teas take you far from the everyday
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { image: premiumImage, name: "Premium Tea" },
                { image: looseLeafImage, name: "Loose Leaf" },
                { image: giftImage, name: "Gift Sets" },
                { image: tinCaddiesImage, name: "Tin Caddies" },
              ].map((item, index) => (
                <div key={index} className="group flex flex-col items-center gap-4">
                  <p
                    className="text-lg md:text-xl text-gray-600 tracking-wide uppercase"
                    style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                    {item.name}
                  </p>
                  <div className="w-full aspect-square overflow-visible">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-2 shadow-none group-hover:shadow-2xl"
                    />
                  </div>
                  <button
                    className="px-8 py-3 bg-[#d9cda4] hover:bg-[#d9cda4] text-gray-800 font-medium text-base rounded-none transition-colors duration-300"
                    style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                    DISCOVER
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>


        <div className="w-full bg-[#f2f8f1]">
          <div className="max-w-[450px] mx-auto border-t border-[#748e73]"></div>
        </div>
        <section className="py-20 px-4" style={{ backgroundColor: "#f2f8f1" }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-2xl md:text-7xl font-light text-gray-600"
                style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 400 }}>
                Subscription
              </h2>
              <p
                className="text-lg md:text-xl text-gray-600 mt-4"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                Curated deliveries for every ritual
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Monthly Ritual",
                  price: "₹1,499",
                  note: "Every month",
                  perks: ["3 artisan teas", "Brewing guide", "Free shipping"],
                },
                {
                  title: "Seasonal Select",
                  price: "₹3,999",
                  note: "Every 3 months",
                  perks: ["5 rare teas", "Tasting notes", "Priority access"],
                },
                {
                  title: "Collector's Circle",
                  price: "₹7,999",
                  note: "Every 6 months",
                  perks: ["Limited editions", "Ceremonial blends", "Member gifts"],
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-6 bg-white/70 border border-[#d4e9d2] p-8">
                  <div>
                    <h3
                      className="text-xl md:text-2xl text-gray-700"
                      style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 600 }}>
                      {plan.title}
                    </h3>
                    <p
                      className="text-3xl md:text-4xl text-gray-700 mt-3"
                      style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600 }}>
                      {plan.price}
                    </p>
                    <p
                      className="text-sm md:text-base text-gray-500 mt-1"
                      style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                      {plan.note}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {plan.perks.map((perk, perkIndex) => (
                      <li
                        key={perkIndex}
                        className="text-sm md:text-base text-gray-600"
                        style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                        {perk}
                      </li>
                    ))}
                  </ul>

                  <button
                    className="mt-auto px-8 py-3 bg-[#d9cda4] hover:bg-[#d9cda4] text-gray-800 font-medium text-base rounded-none transition-colors duration-300"
                    style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                    DISCOVER
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20" style={{ backgroundColor: "#f2f8f1" }}>
          <div className="max-w-7xl mx-10 mb-2 mb-6">
            <p
              className="text-lg md:text-5xl text-[#748e73]"
              style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 400 }}>
              Where people,
            </p>
          </div>
          <div className="relative w-full h-screen overflow-hidden z-20">
            <img
              src={teaHarvestingNight}
              alt="Tea harvesting at night"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 grain-overlay pointer-events-none"></div>
          </div>
          <p
            className="text-lg mt-4 flex flex-row-reverse pr-10 md:text-5xl text-[#748e73]"
            style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 400 }}>
            and nature create as one.
          </p>
          <div className="max-w-7xl mx-10 flex flex-row items-center pt-10">
            <p className="text-lg md:text-md text-[#748e73]"
              style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 800 }}>
              IGNITE TEA IS A UNION OF MANY HANDS AND ELEMENTS —
              THE LAND, THE LEAF, <br />
              AND THE MAKERS — MOVING AS ONE TO SUSTAIN A LIVING CRAFT
              AND PRESERVE THE SOUL OF TEA.
            </p>
          </div>
        </section>


        <Footer />
      </main>
    </div>
  );
}
