import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const PhoneMenu = () => {
  const [openSection, setOpenSection] = useState(null);

  const mainNav = [
    {
      title: "SHOP",
      items: [
        { label: "All Products", href: "/shop/all" },
        { label: "New Arrivals", href: "/shop/new-arrivals" },
        { label: "Best Sellers", href: "/shop/best-sellers" },
      ],
    },
    {
      title: "Teaware",
      items: [
        { label: "Teapots", href: "/teaware/teapots" },
        { label: "Cups & Mugs", href: "/teaware/cups-mugs" },
        { label: "Accessories", href: "/teaware/accessories" },
      ],
    },
    {
      title: "Gifts",
      items: [
        { label: "Gift Sets", href: "/gifts/sets" },
        { label: "Gift Cards", href: "/gifts/cards" },
        { label: "Custom Gifts", href: "/gifts/custom" },
      ],
    },
    {
      title: "Subscription",
      items: [{ label: "Subscription", href: "/subscription" }],
    },
    {
      title: "Encyclopedia",
      items: [
        { label: "Tea Types", href: "/encyclopedia/tea-types" },
        { label: "Brewing Guide", href: "/encyclopedia/brewing-guide" },
        { label: "History", href: "/encyclopedia/history" },
      ],
    },
  ];

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <nav className="flex flex-col py-6" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
      {mainNav.map((item, index) => (
        <div key={item.title} className="border-b border-black/10">
          <button
            onClick={() => toggleSection(index)}
            className="w-full px-6 py-3 text-left text-black text-sm hover:bg-black/5 transition-colors flex items-center justify-between">
            <span>{item.title}</span>
            <ChevronDown 
              className={`h-4 w-4 transition-transform ${openSection === index ? 'rotate-180' : ''}`} 
            />
          </button>
          {openSection === index && (
            <div className="bg-black/5">
              {item.items.map((subItem) => (
                <Link
                  key={subItem.label}
                  to={subItem.href}
                  className="block px-8 py-2 text-sm text-black/80 hover:text-black hover:bg-black/5 transition-colors">
                  {subItem.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
      <div className="border-b border-black/10">
        <Link
          to="/visit"
          className="block w-full px-6 py-3 text-left text-black text-sm hover:bg-black/5 transition-colors">
          VISIT US
        </Link>
      </div>
    </nav>
  );
};

export { PhoneMenu };
