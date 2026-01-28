import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function AddressesPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-[#f2f8f1] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1
              className="text-4xl md:text-6xl font-light"
              style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 400 }}>
              My Addresses
            </h1>
            <Button
              className="bg-[#d9cda4] hover:bg-[#d9cda4] text-gray-800 font-medium rounded-none"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              <Plus className="h-4 w-4 mr-2" />
              Add Address
            </Button>
          </div>

          <div className="bg-white p-8 shadow-lg">
            <div className="text-center py-12">
              <p
                className="text-lg text-gray-600"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                No addresses saved. Add your first delivery address.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
