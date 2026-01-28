import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { authService } from "@/services/authService";

export default function AccountPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      if (!authService.isAuthenticated()) {
        navigate("/login");
        return;
      }

      try {
        const response = await authService.getCurrentUser();
        if (response.success) {
          setUser(response.data.user);
        }
      } catch (err) {
        setError(err.message || "Failed to load user data");
        if (err.message.includes("token") || err.message.includes("401")) {
          authService.logout();
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    authService.logout();
    // Dispatch custom event to notify header of logout
    window.dispatchEvent(new Event('auth-change'));
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f2f8f1]">
        <p style={{ fontFamily: "'Rajdhani', sans-serif" }}>Loading...</p>
      </div>
    );
  }

  if (error && !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f2f8f1]">
        <div className="text-center">
          <p className="text-red-600 mb-4" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            {error}
          </p>
          <Button
            onClick={() => navigate("/login")}
            className="bg-[#d9cda4] hover:bg-[#d9cda4] text-gray-800"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            Go to Login
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-[#f2f8f1] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-4xl md:text-6xl font-light mb-8"
          style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 400 }}>
          My Account
        </h1>

        <div className="bg-white p-8 shadow-lg">
          <div className="mb-6">
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 600 }}>
              Profile Information
            </h2>
            
            {user && (
              <div className="space-y-4" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="text-lg">{user.email}</p>
                </div>
                {user.first_name && (
                  <div>
                    <p className="text-sm text-gray-600">Name</p>
                    <p className="text-lg">
                      {user.first_name} {user.last_name || ""}
                    </p>
                  </div>
                )}
                {user.phone && (
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="text-lg">{user.phone}</p>
                  </div>
                )}
                {user.address && (
                  <div>
                    <p className="text-sm text-gray-600">Address</p>
                    <p className="text-lg">{user.address}</p>
                  </div>
                )}
                {(user.city || user.state) && (
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="text-lg">
                      {[user.city, user.state, user.postal_code]
                        .filter(Boolean)
                        .join(", ")}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          <Button
            onClick={handleLogout}
            className="bg-[#d9cda4] hover:bg-[#d9cda4] text-gray-800 font-medium rounded-none"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            Logout
          </Button>
        </div>
      </div>
      </div>
    </Layout>
  );
}
