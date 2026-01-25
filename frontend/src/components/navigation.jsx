import React, { useEffect, useState } from "react";

// Navigation Menu Components
const NavigationMenu = ({ children }) => (
  <nav className="relative z-50 flex items-center justify-center">
    {children}
  </nav>
);

const NavigationMenuList = ({ children }) => (
  <ul className="flex items-center justify-center space-x-1 list-none">
    {children}
  </ul>
);

const NavigationMenuItem = ({
  children,
  onMouseEnter,
  onMouseLeave,
}) => (
  <li 
    onMouseEnter={onMouseEnter} 
    onMouseLeave={onMouseLeave}
    className="relative">
    {children}
  </li>
);

const NavigationMenuTrigger = ({
  children,
  isActive = false,
}) => (
  <button
    className={`inline-flex h-10 items-center justify-center px-4 py-2 text-sm transition-colors focus:outline-none ${
      isActive ? "text-black" : "text-black/90 hover:text-black"
    }`}
    style={{ fontFamily: "'Overpass', sans-serif" }}>
    {children}
  </button>
);

const NavigationMenuContent = ({
  children,
  isOpen = false,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setVisible(true); // mount immediately
    } else {
      // delay unmount until after fade-out
      const timeout = setTimeout(() => setVisible(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!visible) return null;

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`fixed inset-x-0 top-12 z-[60] bg-white pt-4 overflow-x-hidden
        transform transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
      `}>
      <div 
        className="w-full max-w-4xl mx-auto px-8 py-12"
        style={{ fontFamily: "'Overpass', sans-serif" }}>
        {children}
      </div>
    </div>
  );
};

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
};
