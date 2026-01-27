import { useState } from "react";
import { ShoppingBag, X, Plus, Minus, Trash2 } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Cart() {
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    // Sample cart items - in real app, this would come from state management
    {
      id: 1,
      name: "HIMALAYAN SPRING",
      type: "First Flush Loose Black Tea",
      weight: "100 GM",
      price: 795,
      quantity: 1,
      image: "/tea-placeholder.png"
    },
    {
      id: 2,
      name: "SILVER TIPS IMPERIAL",
      type: "Loose Leaf Full Moon Oolong Tea",
      weight: "50 GM",
      price: 1950,
      quantity: 2,
      image: "/tea-placeholder.png"
    }
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 100; // Fixed shipping cost
  const total = subtotal + shipping;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="h-9 w-9 text-black hover:text-black/80 relative">
          <ShoppingBag className="h-6 w-6" />
          {cartItems.length > 0 && (
            <span 
              className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </button>
      </SheetTrigger>
      
      <SheetContent 
        side="right" 
        className="w-full sm:max-w-lg bg-white p-0 flex flex-col h-full">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 
            className="text-2xl text-gray-800"
            style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 600 }}>
            Shopping Cart
          </h2>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
              <p 
                className="text-xl text-gray-500"
                style={{ fontFamily: "'Josefin Slab', serif" }}>
                Your cart is empty
              </p>
              <p 
                className="text-sm text-gray-400 mt-2"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                Add some tea to get started
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 pb-4 border-b border-gray-100 last:border-0">
                  {/* Item Image */}
                  <div className="w-24 h-24 bg-gray-100 rounded flex-shrink-0">
                    {/* Placeholder for image */}
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <ShoppingBag className="h-8 w-8" />
                    </div>
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 min-w-0">
                    <h3 
                      className="text-sm font-semibold text-gray-800 mb-1"
                      style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                      IGNITE TEA {item.name}
                    </h3>
                    <p 
                      className="text-xs text-gray-500 mb-2"
                      style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                      {item.weight} | {item.type}
                    </p>
                    <p 
                      className="text-base font-bold text-gray-800"
                      style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                      RS. {(item.price * item.quantity).toLocaleString('en-IN')}.00
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-7 h-7 flex items-center justify-center border border-gray-300 hover:bg-gray-100 rounded transition-colors">
                        <Minus className="h-3 w-3 text-gray-600" />
                      </button>
                      <span 
                        className="w-8 text-center text-sm font-medium"
                        style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-7 h-7 flex items-center justify-center border border-gray-300 hover:bg-gray-100 rounded transition-colors">
                        <Plus className="h-3 w-3 text-gray-600" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto p-1 hover:bg-red-50 rounded transition-colors">
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer - Summary and Checkout */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
            {/* Price Summary */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span 
                  className="text-gray-600"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                  Subtotal
                </span>
                <span 
                  className="text-gray-800 font-medium"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                  RS. {subtotal.toLocaleString('en-IN')}.00
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span 
                  className="text-gray-600"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                  Shipping
                </span>
                <span 
                  className="text-gray-800 font-medium"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                  RS. {shipping.toLocaleString('en-IN')}.00
                </span>
              </div>
              <div className="flex justify-between text-lg pt-2 border-t border-gray-300">
                <span 
                  className="text-gray-800 font-semibold"
                  style={{ fontFamily: "'Josefin Slab', serif" }}>
                  Total
                </span>
                <span 
                  className="text-gray-800 font-bold"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                  RS. {total.toLocaleString('en-IN')}.00
                </span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              className="w-full bg-[#d9cda4] hover:bg-[#d9cda4] text-gray-800 py-3 px-6 rounded-none transition-colors duration-300"
              style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600 }}>
              PROCEED TO CHECKOUT
            </button>

            <button
              onClick={() => setOpen(false)}
              className="w-full mt-2 bg-transparent hover:bg-gray-100 text-gray-700 py-3 px-6 rounded-none transition-colors duration-300 border border-gray-300"
              style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 500 }}>
              CONTINUE SHOPPING
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
