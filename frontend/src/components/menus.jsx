import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/navigation";
import { useState, useEffect, useRef } from "react";

export function Menus() {
  const [activeMenu, setActiveMenu] = useState(null);
  const closeTimeoutRef = useRef(null);

  const handleMouseEnter = (menuName) => {
    // Clear any pending close timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    // Add a delay before closing to allow mouse movement
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 300); // 300ms delay for more forgiveness
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="hidden md:block">
      <NavigationMenu>
        <NavigationMenuList>
          {/* 1. SHOP */}
          <NavigationMenuItem
            onMouseEnter={() => handleMouseEnter("shop")}
            onMouseLeave={handleMouseLeave}>
            <NavigationMenuTrigger isActive={activeMenu === "shop"}>
              SHOP
            </NavigationMenuTrigger>
            <NavigationMenuContent 
              isOpen={activeMenu === "shop"}
              onMouseEnter={() => handleMouseEnter("shop")}
              onMouseLeave={handleMouseLeave}>
              <ul className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full">
                <li>
                  <a href="#" className="block group">
                    <div 
                      className="mb-3 text-xl font-semibold hover:text-black text-black/80"
                      style={{ fontFamily: "'Overpass', sans-serif" }}>
                      All Products
                    </div>
                  </a>
                  <a href="#" className="block group">
                    <div 
                      className="mb-3 text-xl font-semibold hover:text-black text-black/80"
                      style={{ fontFamily: "'Overpass', sans-serif" }}>
                      New Arrivals
                    </div>
                  </a>
                  <a href="#" className="block group">
                    <div 
                      className="mb-3 text-xl font-semibold hover:text-black text-black/80"
                      style={{ fontFamily: "'Overpass', sans-serif" }}>
                      Best Sellers
                    </div>
                  </a>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* 2. Teaware */}
          <NavigationMenuItem
            onMouseEnter={() => handleMouseEnter("teaware")}
            onMouseLeave={handleMouseLeave}>
            <NavigationMenuTrigger isActive={activeMenu === "teaware"}>
              Teaware
            </NavigationMenuTrigger>
            <NavigationMenuContent 
              isOpen={activeMenu === "teaware"}
              onMouseEnter={() => handleMouseEnter("teaware")}
              onMouseLeave={handleMouseLeave}>
              <ul className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full">
                <li>
                  <a href="#" className="block group">
                    <div 
                      className="mb-3 text-xl font-semibold hover:text-black text-black/80"
                      style={{ fontFamily: "'Overpass', sans-serif" }}>
                      Teapots
                    </div>
                  </a>
                  <a href="#" className="block group">
                    <div 
                      className="mb-3 text-xl font-semibold hover:text-black text-black/80"
                      style={{ fontFamily: "'Overpass', sans-serif" }}>
                      Cups & Mugs
                    </div>
                  </a>
                  <a href="#" className="block group">
                    <div 
                      className="mb-3 text-xl font-semibold hover:text-black text-black/80"
                      style={{ fontFamily: "'Overpass', sans-serif" }}>
                      Accessories
                    </div>
                  </a>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* 3. Gifts */}
          <NavigationMenuItem
            onMouseEnter={() => handleMouseEnter("gifts")}
            onMouseLeave={handleMouseLeave}>
            <NavigationMenuTrigger isActive={activeMenu === "gifts"}>
              Gifts
            </NavigationMenuTrigger>
            <NavigationMenuContent 
              isOpen={activeMenu === "gifts"}
              onMouseEnter={() => handleMouseEnter("gifts")}
              onMouseLeave={handleMouseLeave}>
              <ul className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full">
                <li>
                  <a href="#" className="block group">
                    <div 
                      className="mb-3 text-xl font-semibold hover:text-black text-black/80"
                      style={{ fontFamily: "'Overpass', sans-serif" }}>
                      Gift Sets
                    </div>
                  </a>
                  <a href="#" className="block group">
                    <div 
                      className="mb-3 text-xl font-semibold hover:text-black text-black/80"
                      style={{ fontFamily: "'Overpass', sans-serif" }}>
                      Gift Cards
                    </div>
                  </a>
                  <a href="#" className="block group">
                    <div 
                      className="mb-3 text-xl font-semibold hover:text-black text-black/80"
                      style={{ fontFamily: "'Overpass', sans-serif" }}>
                      Custom Gifts
                    </div>
                  </a>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* 4. Subscription */}
          <NavigationMenuItem
            onMouseEnter={() => handleMouseEnter("subscription")}
            onMouseLeave={handleMouseLeave}>
            <NavigationMenuTrigger isActive={activeMenu === "subscription"}>
              Subscription
            </NavigationMenuTrigger>
            <NavigationMenuContent 
              isOpen={activeMenu === "subscription"}
              onMouseEnter={() => handleMouseEnter("subscription")}
              onMouseLeave={handleMouseLeave}>
              <ul className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full">
                <li>
                  <a href="#" className="block group">
                    <div 
                      className="mb-3 text-xl font-semibold hover:text-black text-black/80"
                      style={{ fontFamily: "'Overpass', sans-serif" }}>
                      Monthly Plans
                    </div>
                  </a>
                  <a href="#" className="block group">
                    <div 
                      className="mb-3 text-xl font-semibold hover:text-black text-black/80"
                      style={{ fontFamily: "'Overpass', sans-serif" }}>
                      Quarterly Plans
                    </div>
                  </a>
                  <a href="#" className="block group">
                    <div 
                      className="mb-3 text-xl font-semibold hover:text-black text-black/80"
                      style={{ fontFamily: "'Overpass', sans-serif" }}>
                      Custom Plans
                    </div>
                  </a>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* 5. Encyclopedia */}
          <NavigationMenuItem
            onMouseEnter={() => handleMouseEnter("encyclopedia")}
            onMouseLeave={handleMouseLeave}>
            <NavigationMenuTrigger isActive={activeMenu === "encyclopedia"}>
              Encyclopedia
            </NavigationMenuTrigger>
            <NavigationMenuContent 
              isOpen={activeMenu === "encyclopedia"}
              onMouseEnter={() => handleMouseEnter("encyclopedia")}
              onMouseLeave={handleMouseLeave}>
              <ul className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full">
                <li>
                  <a href="#" className="block group">
                    <div 
                      className="mb-3 text-xl font-semibold hover:text-black text-black/80"
                      style={{ fontFamily: "'Overpass', sans-serif" }}>
                      Tea Types
                    </div>
                  </a>
                  <a href="#" className="block group">
                    <div 
                      className="mb-3 text-xl font-semibold hover:text-black text-black/80"
                      style={{ fontFamily: "'Overpass', sans-serif" }}>
                      Brewing Guide
                    </div>
                  </a>
                  <a href="#" className="block group">
                    <div 
                      className="mb-3 text-xl font-semibold hover:text-black text-black/80"
                      style={{ fontFamily: "'Overpass', sans-serif" }}>
                      History
                    </div>
                  </a>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* 6. VISIT US - Simple link */}
          <NavigationMenuItem>
            <a 
              href="#" 
              className="inline-flex h-10 items-center justify-center px-4 py-2 text-sm transition-colors focus:outline-none text-black/90 hover:text-black"
              style={{ fontFamily: "'Overpass', sans-serif" }}>
              VISIT US
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
