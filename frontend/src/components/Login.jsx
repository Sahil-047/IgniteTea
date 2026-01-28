import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { authService } from "@/services/authService";

export function Login({ open, onOpenChange, onLoginSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isLogin) {
        // Login
        const response = await authService.loginUser(
          formData.email,
          formData.password
        );
        
        if (response.success) {
          onLoginSuccess?.(response.data);
          onOpenChange(false);
          // Reset form
          setFormData({
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            phone: "",
          });
        }
      } else {
        // Register
        const response = await authService.registerUser({
          email: formData.email,
          password: formData.password,
          first_name: formData.first_name,
          last_name: formData.last_name,
          phone: formData.phone,
        });

        if (response.success) {
          onLoginSuccess?.(response.data);
          onOpenChange(false);
          // Reset form
          setFormData({
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            phone: "",
          });
        }
      }
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError("");
    setFormData({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      phone: "",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle
            style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 600 }}>
            {isLogin ? "Login" : "Create Account"}
          </DialogTitle>
          <DialogDescription
            style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            {isLogin
              ? "Enter your email and password to login"
              : "Create a new account to get started"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div
              className="p-3 text-sm text-red-600 bg-red-50 rounded"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              {error}
            </div>
          )}

          {!isLogin && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium mb-1"
                    style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-[#d9cda4]"
                    style={{ fontFamily: "'Rajdhani', sans-serif" }}
                    required={!isLogin}
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium mb-1"
                    style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-[#d9cda4]"
                    style={{ fontFamily: "'Rajdhani', sans-serif" }}
                    required={!isLogin}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-1"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-[#d9cda4]"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}
                />
              </div>
            </>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-[#d9cda4]"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-[#d9cda4]"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
              required
              minLength={6}
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#d9cda4] hover:bg-[#d9cda4] text-gray-800 font-medium rounded-none"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            {loading ? "Please wait..." : isLogin ? "Login" : "Create Account"}
          </Button>
        </form>

        <div className="text-center">
          <button
            type="button"
            onClick={toggleMode}
            className="text-sm text-gray-600 hover:text-gray-800 underline"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            {isLogin
              ? "Don't have an account? Sign up"
              : "Already have an account? Login"}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
