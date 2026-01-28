import subscriptionWallpaper from "@/assets/subscription wallpaper.png";

export default function Subscription() {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-[#f2f8f1]"
    >
      <div className="w-full max-w-5xl px-4 py-16 mx-auto">
        <img
          src={subscriptionWallpaper}
          alt="Subscription"
          className="w-full h-auto object-contain mx-auto"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Monthly Ritual",
              price: "₹1,499",
              note: "Every month",
              perks: ["3 artisan teas", "Brewing guide", "Free shipping"],
            },
            {
              title: "Seasonal Select",
              price: "₹3,999",
              note: "Every 3 months",
              perks: ["5 rare teas", "Tasting notes", "Priority access"],
            },
            {
              title: "Collector's Circle",
              price: "₹7,999",
              note: "Every 6 months",
              perks: ["Limited editions", "Ceremonial blends", "Member gifts"],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 bg-white/70 border border-[#d4e9d2] p-8"
            >
              <div>
                <h3
                  className="text-xl md:text-2xl text-gray-700"
                  style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 600 }}
                >
                  {plan.title}
                </h3>
                <p
                  className="text-3xl md:text-4xl text-gray-700 mt-3"
                  style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600 }}
                >
                  {plan.price}
                </p>
                <p
                  className="text-sm md:text-base text-gray-500 mt-1"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}
                >
                  {plan.note}
                </p>
              </div>

              <ul className="space-y-3">
                {plan.perks.map((perk, perkIndex) => (
                  <li
                    key={perkIndex}
                    className="text-sm md:text-base text-gray-600"
                    style={{ fontFamily: "'Rajdhani', sans-serif" }}
                  >
                    {perk}
                  </li>
                ))}
              </ul>

              <button
                className="mt-auto px-8 py-3 bg-[#d9cda4] hover:bg-[#d9cda4] text-gray-800 font-medium text-base rounded-none transition-colors duration-300"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                DISCOVER
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
