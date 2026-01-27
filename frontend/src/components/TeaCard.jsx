import { Button } from "@/components/ui/button";
import { Star, Heart } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function TeaCard({ brand, name, weight, type, images, price, rating, reviews, isNew, isBestSeller }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
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
      className="overflow-visible bg-transparent aspect-square flex flex-col relative max-w-sm mx-auto w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex-1 min-h-0 overflow-visible bg-transparent relative px-4">
        {images && images.length > 0 && (
          <div className={`relative w-full h-full overflow-hidden transition-all duration-500 ease-out ${
            isHovered ? 'scale-125 -translate-y-8 shadow-2xl z-50' : 'scale-100 translate-y-0 z-10'
          }`}>
            {/* Wishlist Heart Icon */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsFavorite(!isFavorite);
              }}
              className="absolute top-2 right-2 z-[100] p-1.5 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300"
              aria-label="Add to wishlist">
              <Heart
                size={16}
                className={`transition-all duration-300 ${
                  isFavorite ? "fill-red-500 stroke-red-500" : "stroke-gray-600"
                }`}
              />
            </button>
            
            {/* NEW Ribbon Badge */}
            {isNew && (
              <div className="absolute top-0 left-0 z-[100] overflow-hidden w-24 h-24 pointer-events-none">
                <div 
                  className="absolute top-4 -left-8 w-32 text-center text-white text-xs font-bold tracking-wider py-1 shadow-md transform -rotate-45"
                  style={{ 
                    fontFamily: "'Rajdhani', sans-serif",
                    backgroundColor: '#dc2626'
                  }}>
                  NEW
                </div>
              </div>
            )}

            {/* BEST SELLER Ribbon Badge with Stars */}
            {isBestSeller && (
              <div className="absolute top-0 left-0 z-[100] overflow-hidden w-24 h-24 pointer-events-none">
                <div 
                  className="absolute top-4 -left-8 w-32 text-center text-white text-xs font-bold tracking-wider py-1 shadow-md transform -rotate-45 flex items-center justify-center gap-1"
                  style={{ 
                    fontFamily: "'Rajdhani', sans-serif",
                    backgroundColor: '#f59e0b'
                  }}>
                  <span className="text-[10px]">★</span>
                  <span>BEST</span>
                  <span className="text-[10px]">★</span>
                </div>
              </div>
            )}
            
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${name} ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
                  index === currentImageIndex 
                    ? 'opacity-100' 
                    : 'opacity-0'
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
          className="w-full bg-[#d9cda4] hover:bg-[#d9cda4] text-gray-800 font-medium rounded-none"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}>
          ADD TO CART
        </Button>
      </div>
    </div>
  );
}
