{/* ================= HERO ================= */}
<section className="pt-32 pb-20 bg-black text-white relative overflow-hidden">

  {/* BACKGROUND GLOW */}
  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/20 blur-[120px] rounded-full"></div>

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT TEXT */}
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

      {/* FLOAT CARD */}
      <div className="absolute -bottom-6 -left-6 bg-white text-black px-4 py-3 rounded-lg shadow-lg">
        <div className="text-sm font-semibold">Street Business</div>
        <div className="text-xs text-gray-500">Start → Grow → Scale</div>
      </div>

    </div>

  </div>
</section>
