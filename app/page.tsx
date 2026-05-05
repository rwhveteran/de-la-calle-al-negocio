"use client";

export default function Home() {
  return (
    <main className="bg-[#f8f6f1] text-black">

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <img src="/logo.png" className="h-12" />

          <nav className="hidden md:flex gap-8 text-white text-sm">
            <a href="/start" className="hover:text-yellow-400">Start Here</a>
            <a href="/permits" className="hover:text-yellow-400">Permits & Legal</a>
            <a href="/food" className="hover:text-yellow-400">Food Business</a>
            <a href="/locations" className="hover:text-yellow-400">Locations</a>
            <a href="/setup" className="hover:text-yellow-400">Setup</a>
            <a href="/money" className="hover:text-yellow-400">Make Money</a>
            <a href="/community" className="hover:text-yellow-400">Community</a>
          </nav>

        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative h-[90vh] flex items-center">

        {/* IMAGE */}
        <img
          src="/hero.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <div className="max-w-xl">

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              DE LA CALLE <br />
              <span className="text-yellow-400">AL NEGOCIO</span>
            </h1>

            <p className="mt-4 text-lg">
              From the Street to Business. Build your food business the right way —
              legal, structured, and built to grow.
            </p>

            <div className="mt-6 flex gap-4">
              <a className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
                Empieza Tu Negocio
              </a>

              <a className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
                Encuentra Ubicaciones
              </a>
            </div>

          </div>
        </div>

      </section>

      {/* ================= FEATURE BAR ================= */}
      <section className="bg-black text-white py-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          <div>
            <div className="text-yellow-400 font-bold">Educación</div>
            <div className="text-sm text-gray-400">Guías paso a paso</div>
          </div>

          <div>
            <div className="text-yellow-400 font-bold">Apoyo</div>
            <div className="text-sm text-gray-400">Recursos reales</div>
          </div>

          <div>
            <div className="text-yellow-400 font-bold">Ubicaciones</div>
            <div className="text-sm text-gray-400">Zonas en LA</div>
          </div>

          <div>
            <div className="text-yellow-400 font-bold">Crecimiento</div>
            <div className="text-sm text-gray-400">Estrategias</div>
          </div>

        </div>
      </section>

      {/* ================= SECTION TITLE ================= */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold">Elige Tu Camino</h2>
        <p className="text-gray-500 mt-2">
          Start where you are. Build step by step.
        </p>
      </section>

      {/* ================= CLEAN CARDS ================= */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">

          <div className="p-6 rounded-xl shadow hover:shadow-2xl transition bg-gradient-to-br from-green-500 to-yellow-400 text-white">
            <h3 className="font-bold">Street Vendor</h3>
            <p className="text-sm mt-2">Start selling legally</p>
          </div>

          <div className="p-6 rounded-xl shadow hover:shadow-2xl transition bg-gradient-to-br from-red-500 to-yellow-400 text-white">
            <h3 className="font-bold">Food Truck</h3>
            <p className="text-sm mt-2">Increase profits</p>
          </div>

          <div className="p-6 rounded-xl shadow hover:shadow-2xl transition bg-gradient-to-br from-yellow-500 to-orange-400 text-white">
            <h3 className="font-bold">Home-Based</h3>
            <p className="text-sm mt-2">Start from home</p>
          </div>

          <div className="p-6 rounded-xl shadow hover:shadow-2xl transition bg-gradient-to-br from-green-600 to-green-400 text-white">
            <h3 className="font-bold">Kiosk / Retail</h3>
            <p className="text-sm mt-2">Grow to location</p>
          </div>

        </div>
      </section>

    </main>
  );
}
