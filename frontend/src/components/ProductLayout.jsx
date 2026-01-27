import { useState } from "react";
import { TeaCard } from "@/components/TeaCard";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ProductLayout({ title, products }) {
  const [expandedFilters, setExpandedFilters] = useState({
    teaType: true,
    harvest: false,
    teaForm: false,
  });

  const toggleFilter = (filterName) => {
    setExpandedFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  return (
    <div className="min-h-screen py-24 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Page Title */}
        <h1
          className="text-4xl md:text-6xl text-center mb-12 text-gray-700"
          style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 400 }}>
          {title}
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white p-6 space-y-6">
              {/* Tea Type Filter */}
              <div className="border-b border-gray-300 pb-4">
                <button
                  onClick={() => toggleFilter("teaType")}
                  className="flex items-center justify-between w-full mb-4"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                  <span className="text-sm tracking-widest text-gray-600 font-medium">TEA TYPE</span>
                  {expandedFilters.teaType ? (
                    <ChevronUp size={16} className="text-gray-600" />
                  ) : (
                    <ChevronDown size={16} className="text-gray-600" />
                  )}
                </button>
                {expandedFilters.teaType && (
                  <div className="space-y-2" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="mr-3 w-4 h-4" />
                      <span className="text-gray-600">Green Tea</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="mr-3 w-4 h-4" />
                      <span className="text-gray-600">White Tea</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="mr-3 w-4 h-4" />
                      <span className="text-gray-600">Black Tea</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="mr-3 w-4 h-4" />
                      <span className="text-gray-600">Oolong Tea</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="mr-3 w-4 h-4" />
                      <span className="text-gray-600">Herbal Tea</span>
                    </label>
                  </div>
                )}
              </div>

              {/* Harvest Filter */}
              <div className="border-b border-gray-300 pb-4">
                <button
                  onClick={() => toggleFilter("harvest")}
                  className="flex items-center justify-between w-full"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                  <span className="text-sm tracking-widest text-gray-600 font-medium">HARVEST</span>
                  {expandedFilters.harvest ? (
                    <ChevronUp size={16} className="text-gray-600" />
                  ) : (
                    <ChevronDown size={16} className="text-gray-600" />
                  )}
                </button>
                {expandedFilters.harvest && (
                  <div className="space-y-2 mt-4" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="mr-3 w-4 h-4" />
                      <span className="text-gray-600">Spring</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="mr-3 w-4 h-4" />
                      <span className="text-gray-600">Summer</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="mr-3 w-4 h-4" />
                      <span className="text-gray-600">Autumn</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="mr-3 w-4 h-4" />
                      <span className="text-gray-600">Winter</span>
                    </label>
                  </div>
                )}
              </div>

              {/* Tea Form Filter */}
              <div className="pb-4">
                <button
                  onClick={() => toggleFilter("teaForm")}
                  className="flex items-center justify-between w-full"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                  <span className="text-sm tracking-widest text-gray-600 font-medium">TEA FORM</span>
                  {expandedFilters.teaForm ? (
                    <ChevronUp size={16} className="text-gray-600" />
                  ) : (
                    <ChevronDown size={16} className="text-gray-600" />
                  )}
                </button>
                {expandedFilters.teaForm && (
                  <div className="space-y-2 mt-4" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="mr-3 w-4 h-4" />
                      <span className="text-gray-600">Loose Leaf</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="mr-3 w-4 h-4" />
                      <span className="text-gray-600">Tea Bags</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="mr-3 w-4 h-4" />
                      <span className="text-gray-600">Powder</span>
                    </label>
                  </div>
                )}
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1">
            {/* Product Grid */}
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <TeaCard
                  key={product.id}
                  brand={product.brand}
                  name={product.name}
                  weight={product.weight}
                  type={product.type}
                  images={product.images}
                  price={product.price}
                  rating={product.rating}
                  reviews={product.reviews}
                  isNew={product.isNew}
                  isBestSeller={product.isBestSeller}
                />
              ))}
            </div>

            {/* Show message if no products */}
            {products.length === 0 && (
              <div className="text-center py-20">
                <p
                  className="text-xl text-gray-500"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                  No products found.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
