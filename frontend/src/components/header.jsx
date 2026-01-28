/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Equal, User } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menus } from "@/components/menus";
import { PhoneMenu } from "@/components/phone-menus";
import { Search } from "@/components/search";
import { Cart } from "@/components/Cart";
import { Login } from "@/components/Login";
import { AccountMenu } from "@/components/AccountMenu";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "@/services/authService";

const Header = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [loginOpen, setLoginOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status
  useEffect(() => {
    setIsAuthenticated(authService.isAuthenticated());
    
    // Listen for storage changes (when token is set/removed in other tabs)
    const handleStorageChange = () => {
      setIsAuthenticated(authService.isAuthenticated());
    };
    
    // Listen for custom auth-change event (when login/logout happens in same tab)
    const handleAuthChange = () => {
      setIsAuthenticated(authService.isAuthenticated());
    };
    
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('auth-change', handleAuthChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('auth-change', handleAuthChange);
    };
  }, []);

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

  const handleUserIconClick = () => {
    if (isAuthenticated) {
      setAccountMenuOpen(true);
    } else {
      setLoginOpen(true);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 h-12 flex justify-center w-full bg-white z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
      <div className="w-full max-w-4xl flex justify-center gap-6">
        <div className="flex w-full items-center justify-between">
          <Link
            to="/"
            aria-label="home"
            className="flex gap-2 px-6 whitespace-nowrap items-center mr-8">
            <span
              className="text-black text-lg "
              style={{ fontFamily: "'Boldonse', sans-serif", fontWeight: 'normal' }}>
              IgniteTea
            </span>
          </Link>

          <Menus />
          <Sheet>
            <div className="flex items-center px-2 gap-2 ml-8">
              <Search />
              <Cart />
              <button
                onClick={handleUserIconClick}
                aria-label="User account"
                className="h-9 w-9 flex items-center justify-center text-black hover:text-black/80">
                <User className="h-6 w-6" />
              </button>
              <Login
                open={loginOpen}
                onOpenChange={setLoginOpen}
                onLoginSuccess={(data) => {
                  console.log("Login successful:", data);
                  setIsAuthenticated(true);
                  setLoginOpen(false);
                  // Dispatch custom event to notify other components
                  window.dispatchEvent(new Event('auth-change'));
                  setAccountMenuOpen(true);
                }}
              />
              <AccountMenu 
                open={accountMenuOpen} 
                onOpenChange={setAccountMenuOpen} 
              />
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
