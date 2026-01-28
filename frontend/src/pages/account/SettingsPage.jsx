import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-[#f2f8f1] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-4xl md:text-6xl font-light mb-8"
            style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 400 }}>
            Settings
          </h1>

          <div className="bg-white p-8 shadow-lg space-y-6">
            <div>
              <h2
                className="text-xl font-light mb-4"
                style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 600 }}>
                Account Preferences
              </h2>
              <div className="space-y-4" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700">Email Notifications</span>
                  <input type="checkbox" className="w-5 h-5" defaultChecked />
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700">SMS Notifications</span>
                  <input type="checkbox" className="w-5 h-5" />
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700">Marketing Emails</span>
                  <input type="checkbox" className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button
                className="bg-[#d9cda4] hover:bg-[#d9cda4] text-gray-800 font-medium rounded-none"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                Save Preferences
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
