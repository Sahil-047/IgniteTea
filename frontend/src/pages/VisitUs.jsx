export default function VisitUs() {
  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 
          className="text-4xl md:text-6xl font-light text-gray-700 mb-8"
          style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 400 }}>
          Visit Us
        </h1>
        <p 
          className="text-lg md:text-xl text-gray-600 mb-8"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}>
          Experience IgniteTea in person
        </p>
        <div className="space-y-6">
          <div>
            <h3 
              className="text-2xl text-gray-700 mb-2"
              style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 600 }}>
              Our Location
            </h3>
            <p 
              className="text-lg text-gray-600"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              123 Tea Garden Lane<br />
              Darjeeling, West Bengal 734101<br />
              India
            </p>
          </div>
          <div>
            <h3 
              className="text-2xl text-gray-700 mb-2"
              style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 600 }}>
              Opening Hours
            </h3>
            <p 
              className="text-lg text-gray-600"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              Monday - Saturday: 9:00 AM - 6:00 PM<br />
              Sunday: 10:00 AM - 4:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
