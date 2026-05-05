export default function Home() {
  return (
    <main className="bg-[#f8f6f1] text-black">

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <img src="/logo.png" alt="Logo" className="h-12 object-contain" />

          <nav className="hidden md:flex gap-8 text-sm text-white font-medium">
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

        <img
          src="/hero.jpg"
          alt="Food Truck Business"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <div className="max-w-xl">

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              DE LA CALLE
              <br />
              <span className="text-yellow-400">AL NEGOCIO</span>
            </h1>

            <p className="mt-4 text-lg text-gray-200">
              From the Street to Business. Build your food business the right way — legal, structured, and built to grow.
            </p>

            <div className="mt-6 flex gap-4">
              <a href="/start" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
                Empieza Tu Negocio
              </a>

              <a href="/locations" className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
                Encuentra Ubicaciones
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CARDS ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-2">
            Elige Tu Camino
          </h2>

          <p className="text-center text-gray-500 mb-10">
            Start where you are. Build step by step.
          </p>

          <div className="grid md:grid-cols-4 gap-6">

            {/* CARD 1 */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">

              <video
                src="/videos/vendor.mp4"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
                muted
                loop
                autoPlay
                playsInline
              />

              <div className="bg-gradient-to-br from-green-700 via-green-600 to-yellow-400 p-6 relative z-10 text-white group-hover:opacity-0 transition">

                <h3 className="font-bold text-lg">Street Vendor</h3>
                <p className="text-sm mt-2">
                  Start selling legally from the street
                </p>

              </div>

            </div>

            {/* CARD 2 */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">

              <video
                src="/videos/truck.mp4"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
                muted
                loop
                autoPlay
                playsInline
              />

              <div className="bg-gradient-to-br from-red-700 via-red-500 to-yellow-400 p-6 relative z-10 text-white group-hover:opacity-0 transition">

                <h3 className="font-bold text-lg">Food Truck</h3>
                <p className="text-sm mt-2">
                  Expand your reach and increase profits
                </p>

              </div>

            </div>

            {/* CARD 3 */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">

              <video
                src="/videos/home.mp4"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
                muted
                loop
                autoPlay
                playsInline
              />

              <div className="bg-gradient-to-br from-yellow-600 via-yellow-500 to-orange-400 p-6 relative z-10 text-white group-hover:opacity-0 transition">

                <h3 className="font-bold text-lg">Home-Based</h3>
                <p className="text-sm mt-2">
                  Start from your own kitchen
                </p>

              </div>

            </div>

            {/* CARD 4 */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">

              <video
                src="/videos/store.mp4"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
                muted
                loop
                autoPlay
                playsInline
              />

              <div className="bg-gradient-to-br from-emerald-700 via-emerald-500 to-lime-400 p-6 relative z-10 text-white group-hover:opacity-0 transition">

                <h3 className="font-bold text-lg">Kiosk / Retail</h3>
                <p className="text-sm mt-2">
                  Build toward a permanent location
                </p>

              </div>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
