export default function MonthlyPlans() {
  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 
          className="text-4xl md:text-6xl font-light text-gray-700 mb-8"
          style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 400 }}>
          Monthly Plans
        </h1>
        <p 
          className="text-lg md:text-xl text-gray-600"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}>
          Subscribe to receive curated teas every month
        </p>
      </div>
    </div>
  )
}
