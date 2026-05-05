export default function Home() {
  return (
    <main className="bg-[#f8f6f1] text-black">

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <img
            src="/logo.png"
            alt="De La Calle Al Negocio"
            className="h-12 object-contain"
          />

          {/* NAV */}
          <nav className="hidden md:flex gap-8 text-sm text-white font-medium">
            <a href="/start" className="hover:text-yellow-400 transition">Start Here</a>
            <a href="/permits" className="hover:text-yellow-400 transition">Permits & Legal</a>
            <a href="/food" className="hover:text-yellow-400 transition">Food Business</a>
            <a href="/locations" className="hover:text-yellow-400 transition">Locations</a>
            <a href="/setup" className="hover:text-yellow-400 transition">Setup</a>
            <a href="/money" className="hover:text-yellow-400 transition">Make Money</a>
            <a href="/community" className="hover:text-yellow-400 transition">Community</a>
          </nav>

        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative h-[90vh] flex items-center">

        {/* BACKGROUND IMAGE */}
        <img
          src="/hero.jpg"
          alt="Food Truck Business"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* CLEAN GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

        {/* HERO CONTENT */}
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

      {/* ================= VALUE BAR ================= */}
      <section className="bg-black text-white py-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          <div>
            <div className="text-yellow-400 text-2xl mb-1">📘</div>
            <div className="font-semibold">Educación</div>
            <div className="text-sm text-gray-400">Guías paso a paso</div>
          </div>

          <div>
            <div className="text-yellow-400 text-2xl mb-1">🤝</div>
            <div className="font-semibold">Apoyo</div>
            <div className="text-sm text-gray-400">Recursos reales</div>
          </div>

          <div>
            <div className="text-yellow-400 text-2xl mb-1">📍</div>
            <div className="font-semibold">Ubicaciones</div>
            <div className="text-sm text-gray-400">Zonas en LA</div>
          </div>

          <div>
            <div className="text-yellow-400 text-2xl mb-1">📈</div>
            <div className="font-semibold">Crecimiento</div>
            <div className="text-sm text-gray-400">Estrategias reales</div>
          </div>

        </div>
      </section>

      {/* ================= PATH SECTION ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-2">
            Elige Tu Camino
          </h2>

          <p className="text-center text-gray-500 mb-10">
            Start where you are. Build step by step.
          </p>

          <div className="grid md:grid-cols-4 gap-6">

            {/* CARD */}
            <div className="group bg-white rounded-xl p-6 shadow hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-100 relative overflow-hidden">

              {/* HOVER VIDEO */}
              <video
                src="/videos/vendor.mp4"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition"
                muted
                loop
                autoPlay
              />

              <div className="relative z-10">
                <div className="text-yellow-400 text-4xl mb-3">🌮</div>
                <h3 className="font-bold text-lg">Street Vendor</h3>
                <p className="text-sm text-gray-500 mt-2">Start selling legally</p>
              </div>

            </div>

            {/* CARD */}
            <div className="group bg-white rounded-xl p-6 shadow hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-100 relative overflow-hidden">

              <video
                src="/videos/truck.mp4"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition"
                muted
                loop
                autoPlay
              />

              <div className="relative z-10">
                <div className="text-yellow-400 text-4xl mb-3">🚚</div>
                <h3 className="font-bold text-lg">Food Truck</h3>
                <p className="text-sm text-gray-500 mt-2">Expand your reach</p>
              </div>

            </div>

            {/* CARD */}
            <div className="group bg-white rounded-xl p-6 shadow hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-100 relative overflow-hidden">

              <video
                src="/videos/home.mp4"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition"
                muted
                loop
                autoPlay
              />

              <div className="relative z-10">
                <div className="text-yellow-400 text-4xl mb-3">🏠</div>
                <h3 className="font-bold text-lg">Home-Based</h3>
                <p className="text-sm text-gray-500 mt-2">Start from home</p>
              </div>

            </div>

            {/* CARD */}
            <div className="group bg-white rounded-xl p-6 shadow hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-100 relative overflow-hidden">

              <video
                src="/videos/store.mp4"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition"
                muted
                loop
                autoPlay
              />

              <div className="relative z-10">
                <div className="text-yellow-400 text-4xl mb-3">🏪</div>
                <h3 className="font-bold text-lg">Kiosk / Retail</h3>
                <p className="text-sm text-gray-500 mt-2">Scale up your business</p>
              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  )
}
