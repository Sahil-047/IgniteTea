import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function TeaCard({ brand, name, weight, type, images, price, rating, reviews }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isHovered && images && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000); // Change image every 2 seconds on hover
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      // Reset to first image when not hovering
      setCurrentImageIndex(0);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, images]);

  return (
    <div 
      className="overflow-hidden bg-transparent aspect-square flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex-1 min-h-0 overflow-hidden bg-transparent">
        {images && images.length > 0 && (
          <div className="relative w-full h-full">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${name} ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 scale-125 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="p-4 space-y-2 flex-shrink-0">
        {/* Brand */}
        <p 
          className="text-xs uppercase tracking-wide text-gray-600"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}>
          {brand}
        </p>
        
        {/* Product Name with Weight and Type */}
        <h3 
          className="text-base font-semibold text-black leading-tight"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}>
          {name} | {weight} | {type}
        </h3>
        
        {/* Rating and Reviews */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < fullStars
                    ? 'fill-yellow-400 text-yellow-400'
                    : i === fullStars && hasHalfStar
                    ? 'fill-yellow-400/50 text-yellow-400'
                    : 'fill-gray-300 text-gray-300'
                }`}
              />
            ))}
          </div>
          <span 
            className="text-sm text-gray-600"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            {reviews} REVIEWS
          </span>
        </div>
        
        {/* Price */}
        <p 
          className="text-xl font-bold text-black"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}>
          RS. {price.toLocaleString('en-IN')}.00
        </p>
      </div>
      <div className="p-4 pt-0 flex-shrink-0">
        <Button 
          className="w-full bg-[#f5f5dc] hover:bg-[#e8e8d0] text-gray-800 font-medium rounded-none"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}>
          ADD TO CART
        </Button>
      </div>
    </div>
  );
}
