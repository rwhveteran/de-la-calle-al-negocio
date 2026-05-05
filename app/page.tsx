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
      <section className="pt-32 pb-20 bg-gradient-to-r from-black to-neutral-800 text-white">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            DE LA CALLE
            <br />
            <span className="text-yellow-500">AL NEGOCIO</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-xl">
            Build your street food business the right way — legal, structured, and built to last.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="/start" className="bg-yellow-500 text-black px-6 py-3 rounded font-semibold hover:opacity-90 transition">
              Start Now
            </a>
            <a href="/locations" className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition">
              Explore Locations
            </a>
          </div>

        </div>
      </section>

      {/* ================= PATH SECTION ================= */}
      <section className="py-20">
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
                className="bg-white rounded-xl p-6 shadow hover:shadow-xl transition duration-300"
              >
                <div className="h-12 w-12 bg-yellow-500/20 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-gray-600 mt-2">{desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= VALUE STRIP ================= */}
      <section className="bg-black text-white py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">

          {[
            ["Education", "Step-by-step guides"],
            ["Support", "Resources & organizations"],
            ["Locations", "Best selling zones"],
            ["Growth", "Real strategies that work"]
          ].map(([title, desc], i) => (
            <div key={i}>
              <div className="h-10 w-10 bg-yellow-500/20 mx-auto mb-3 rounded-full"></div>
              <h4 className="font-semibold">{title}</h4>
              <p className="text-sm text-gray-400">{desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} De La Calle Al Negocio
      </footer>

    </main>
  );
}
