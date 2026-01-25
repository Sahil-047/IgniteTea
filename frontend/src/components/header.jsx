/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { ShoppingBag, Equal } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menus } from "@/components/menus";
import { PhoneMenu } from "@/components/phone-menus";
import { Search } from "@/components/search";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Hide navbar when scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 h-12 flex justify-center w-full bg-white z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
      <div className="w-full max-w-4xl flex justify-center gap-6">
        <div className="flex w-full items-center justify-between">
          <a
            href="#"
            aria-label="home"
            className="flex gap-2 px-6 whitespace-nowrap items-center mr-8">
            <span
              className="text-black text-lg "
              style={{ fontFamily: "'Boldonse', sans-serif", fontWeight: 'normal' }}>
              IgniteTea
            </span>
          </a>

          <Menus />
          <Sheet>
            <div className="flex items-center px-2 gap-2 ml-8">
              <Search />
              <button className="h-9 w-9 text-black hover:text-black/80 relative">
                <ShoppingBag className="h-6 w-6" />
              </button>
              <SheetTrigger asChild>
                <button className="h-9 w-9 text-black hover:text-black/80 lg:hidden">
                  <Equal className="h-6 w-6" />
                </button>
              </SheetTrigger>
            </div>
            <SheetContent
              side="right"
              className="w-[300px] bg-white/90 backdrop-blur-lg border-muted-foreground p-0">
              <PhoneMenu />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export { Header };
