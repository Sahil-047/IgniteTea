import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User, LogOut, Package, MapPin, Settings, Heart, ChevronRight } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { authService } from "@/services/authService";

export function AccountMenu({ open, onOpenChange }) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setIsAuthenticated(authService.isAuthenticated());
    
    if (authService.isAuthenticated()) {
      fetchUser();
    }

    const handleAuthChange = () => {
      const auth = authService.isAuthenticated();
      setIsAuthenticated(auth);
      if (auth) {
        fetchUser();
      } else {
        setUser(null);
      }
    };

    window.addEventListener('auth-change', handleAuthChange);
    window.addEventListener('storage', handleAuthChange);

    return () => {
      window.removeEventListener('auth-change', handleAuthChange);
      window.removeEventListener('storage', handleAuthChange);
    };
  }, []);

  const fetchUser = async () => {
    try {
      const response = await authService.getCurrentUser();
      if (response.success) {
        setUser(response.data.user);
      }
    } catch (error) {
      console.error('Failed to fetch user:', error);
    }
  };

  const handleLogout = () => {
    authService.logout();
    window.dispatchEvent(new Event('auth-change'));
    setIsAuthenticated(false);
    setUser(null);
    onOpenChange(false);
    navigate("/");
  };

  const handleMenuClick = (path) => {
    navigate(path);
    onOpenChange(false);
  };

  const menuItems = [
    {
      icon: User,
      label: "My Account",
      path: "/account",
      description: "View and edit your profile"
    },
    {
      icon: Package,
      label: "My Orders",
      path: "/account/orders",
      description: "View order history"
    },
    {
      icon: Heart,
      label: "Wishlist",
      path: "/account/wishlist",
      description: "Your saved items"
    },
    {
      icon: MapPin,
      label: "Addresses",
      path: "/account/addresses",
      description: "Manage delivery addresses"
    },
    {
      icon: Settings,
      label: "Settings",
      path: "/account/settings",
      description: "Account preferences"
    }
  ];

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent 
        side="right" 
        className="w-full sm:max-w-lg bg-white p-0 flex flex-col h-full">
        
        <SheetHeader className="px-6 py-4 border-b border-gray-200">
          {isAuthenticated && user ? (
            <>
              <SheetTitle 
                className="text-2xl text-gray-800 mb-2"
                style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 600 }}>
                Welcome back
              </SheetTitle>
              <div style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                <p className="text-lg font-semibold text-gray-800">
                  {user.first_name ? `${user.first_name} ${user.last_name || ''}`.trim() : 'User'}
                </p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </>
          ) : (
            <SheetTitle 
              className="text-2xl text-gray-800"
              style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 600 }}>
              Account
            </SheetTitle>
          )}
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {isAuthenticated ? (
            <div className="space-y-2">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={index}
                    onClick={() => handleMenuClick(item.path)}
                    className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors text-left group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg group-hover:bg-[#d9cda4] transition-colors">
                      <Icon className="h-5 w-5 text-gray-700 group-hover:text-gray-800" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p 
                        className="text-base font-medium text-gray-800 mb-1"
                        style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                        {item.label}
                      </p>
                      <p 
                        className="text-xs text-gray-500"
                        style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                        {item.description}
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <User className="h-10 w-10 text-gray-400" />
              </div>
              <p 
                className="text-xl text-gray-800 mb-2"
                style={{ fontFamily: "'Josefin Slab', serif" }}>
                Please login to continue
              </p>
              <p 
                className="text-sm text-gray-500 mb-6"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                Sign in to access your account
              </p>
              <Button
                onClick={() => {
                  onOpenChange(false);
                  navigate("/login");
                }}
                className="bg-[#d9cda4] hover:bg-[#d9cda4] text-gray-800 font-medium rounded-none"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                Login / Sign Up
              </Button>
            </div>
          )}
        </div>

        {isAuthenticated && (
          <div className="border-t border-gray-200 px-6 py-4">
            <Button
              onClick={handleLogout}
              variant="outline"
              className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 rounded-none"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
