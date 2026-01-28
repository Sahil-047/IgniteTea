import Layout from "@/components/Layout";

export default function OrdersPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-[#f2f8f1] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-4xl md:text-6xl font-light mb-8"
            style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 400 }}>
            My Orders
          </h1>

          <div className="bg-white p-8 shadow-lg">
            <div className="text-center py-12">
              <p
                className="text-lg text-gray-600"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                No orders yet. Start shopping to see your orders here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
