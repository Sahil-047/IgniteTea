import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/navigation";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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
                  <Link to="/shop/all" className="block group">
                    <div 
                      className="mb-3 text-xl font-semibold hover:text-black text-black/80"
                      style={{ fontFamily: "'Overpass', sans-serif" }}>
                      All Products
                    </div>
                  </Link>
                  <Link to="/shop/new-arrivals" className="block group">
                    <div 
                      className="mb-3 text-xl font-semibold hover:text-black text-black/80"
                      style={{ fontFamily: "'Overpass', sans-serif" }}>
                      New Arrivals
                    </div>
                  </Link>
                  <Link to="/shop/best-sellers" className="block group">
                    <div 
                      className="mb-3 text-xl font-semibold hover:text-black text-black/80"
                      style={{ fontFamily: "'Overpass', sans-serif" }}>
                      Best Sellers
                    </div>
                  </Link>
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
                  <Link to="/teaware/teapots" className="block group">
                    <div 
                      className="mb-3 text-xl font-semibold hover:text-black text-black/80"
                      style={{ fontFamily: "'Overpass', sans-serif" }}>
                      Teapots
                    </div>
                  </Link>
                  <Link to="/teaware/cups-mugs" className="block group">
                    <div 
                      className="mb-3 text-xl font-semibold hover:text-black text-black/80"
                      style={{ fontFamily: "'Overpass', sans-serif" }}>
                      Cups & Mugs
                    </div>
                  </Link>
                  <Link to="/teaware/accessories" className="block group">
                    <div 
                      className="mb-3 text-xl font-semibold hover:text-black text-black/80"
                      style={{ fontFamily: "'Overpass', sans-serif" }}>
                      Accessories
                    </div>
                  </Link>
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
                  <Link to="/gifts/sets" className="block group">
                    <div 
                      className="mb-3 text-xl font-semibold hover:text-black text-black/80"
                      style={{ fontFamily: "'Overpass', sans-serif" }}>
                      Gift Sets
                    </div>
                  </Link>
                  <Link to="/gifts/cards" className="block group">
                    <div 
                      className="mb-3 text-xl font-semibold hover:text-black text-black/80"
                      style={{ fontFamily: "'Overpass', sans-serif" }}>
                      Gift Cards
                    </div>
                  </Link>
                  <Link to="/gifts/custom" className="block group">
                    <div 
                      className="mb-3 text-xl font-semibold hover:text-black text-black/80"
                      style={{ fontFamily: "'Overpass', sans-serif" }}>
                      Custom Gifts
                    </div>
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* 4. Subscription */}
          <NavigationMenuItem>
            <Link
              to="/subscription"
              className="inline-flex h-10 items-center justify-center px-4 py-2 text-sm text-black/90 hover:text-black transition-colors"
              style={{ fontFamily: "'Overpass', sans-serif" }}>
              Subscription
            </Link>
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
                  <Link to="/encyclopedia/tea-types" className="block group">
                    <div 
                      className="mb-3 text-xl font-semibold hover:text-black text-black/80"
                      style={{ fontFamily: "'Overpass', sans-serif" }}>
                      Tea Types
                    </div>
                  </Link>
                  <Link to="/encyclopedia/brewing-guide" className="block group">
                    <div 
                      className="mb-3 text-xl font-semibold hover:text-black text-black/80"
                      style={{ fontFamily: "'Overpass', sans-serif" }}>
                      Brewing Guide
                    </div>
                  </Link>
                  <Link to="/encyclopedia/history" className="block group">
                    <div 
                      className="mb-3 text-xl font-semibold hover:text-black text-black/80"
                      style={{ fontFamily: "'Overpass', sans-serif" }}>
                      History
                    </div>
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* 6. VISIT US - Simple link */}
          <NavigationMenuItem>
            <Link 
              to="/visit" 
              className="inline-flex h-10 items-center justify-center px-4 py-2 text-sm transition-colors focus:outline-none text-black/90 hover:text-black"
              style={{ fontFamily: "'Overpass', sans-serif" }}>
              VISIT US
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
