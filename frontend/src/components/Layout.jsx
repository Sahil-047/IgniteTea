import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { useEffect } from "react";
import Lenis from 'lenis';

export default function Layout({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
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

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex-1 pb-8 md:pb-96">
        {children}
      </main>
      <Footer />
    </div>
  );
}
