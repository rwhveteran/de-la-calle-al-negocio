export default function Home() {
  return (
    <main className="bg-[#f8f6f1] text-black">

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black text-white border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full border-2 border-yellow-500 flex items-center justify-center">
              <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
            </div>
            <div>
              <div className="text-sm font-bold tracking-wide">DE LA CALLE</div>
              <div className="text-yellow-500 font-bold">AL NEGOCIO</div>
            </div>
          </div>

          {/* NAV */}
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="/start" className="hover:text-yellow-500 transition">Start</a>
            <a href="/permits" className="hover:text-yellow-500 transition">Permits</a>
            <a href="/food" className="hover:text-yellow-500 transition">Food</a>
            <a href="/locations" className="hover:text-yellow-500 transition">Locations</a>
            <a href="/setup" className="hover:text-yellow-500 transition">Setup</a>
            <a href="/money" className="hover:text-yellow-500 transition">Money</a>
            <a href="/community" className="hover:text-yellow-500 transition">Community</a>
          </nav>

        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-20 bg-black text-white relative overflow-hidden">

        {/* GLOW EFFECT */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/20 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              DE LA CALLE
              <br />
              <span className="text-yellow-500">AL NEGOCIO</span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              Turn street hustle into a real business — structured, legal, and built to grow.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="/start" className="bg-yellow-500 text-black px-6 py-3 rounded font-semibold hover:scale-105 transition">
                Start Now
              </a>

              <a href="/locations" className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition">
                Explore Locations
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src="/hero.jpg"
              className="rounded-xl shadow-2xl hover:scale-105 transition duration-500"
            />

            <div className="absolute -bottom-6 -left-6 bg-white text-black px-4 py-3 rounded-lg shadow-lg">
              <div className="text-sm font-semibold">Street Business</div>
              <div className="text-xs text-gray-500">Start → Grow → Scale</div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= PATH SECTION ================= */}
      <section className="py-20 bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold">Choose Your Path</h2>
          <p className="text-gray-600 mt-2">Start where you are. Build step by step.</p>

          <div className="grid md:grid-cols-4 gap-6 mt-10">

            {[
              ["Street Vendor", "Sell legally and grow from the street."],
              ["Food Truck", "Expand your reach and increase profits."],
              ["Home-Based Food", "Start small from your own kitchen."],
              ["Kiosk / Retail", "Build toward a permanent location."]
            ].map(([title, desc], i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-100"
              >
                <div className="h-12 w-12 bg-yellow-500/20 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-gray-600 mt-2">{desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= VALUE SECTION ================= */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">

          {[
            ["Education", "Step-by-step guidance"],
            ["Support", "Resources & organizations"],
            ["Locations", "Best selling areas"],
            ["Growth", "Proven strategies"]
          ].map(([title, desc], i) => (
            <div key={i}>
              <div className="h-12 w-12 bg-yellow-500/20 rounded-full mx-auto mb-4"></div>
              <h4 className="font-semibold text-lg">{title}</h4>
              <p className="text-sm text-gray-400">{desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= LEGAL SYSTEM SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold">
            Built for Real-World Compliance
          </h2>

          <p className="text-gray-600 mt-4">
            Permits, inspections, city rules — we break it down so you don’t get shut down.
            This isn’t theory. This is survival.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">

            {[
              "Permit Guidance",
              "Inspection Readiness",
              "Legal Protection"
            ].map((item, i) => (
              <div key={i} className="border p-6 rounded-lg">
                <div className="font-semibold">{item}</div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} De La Calle Al Negocio
      </footer>

    </main>
  );
}
