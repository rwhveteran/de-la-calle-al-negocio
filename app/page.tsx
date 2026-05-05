export default function Home() {
  return (
    <main className="bg-[#f8f6f1] text-black">

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <img src="/logo.png" alt="Logo" className="h-14 object-contain" />

          {/* NAV */}
          <nav className="hidden md:flex gap-8 text-sm text-white">

            <div className="group relative">
              <a href="/start" className="hover:text-yellow-400">Start Here</a>
              <div className="absolute hidden group-hover:block bg-black p-4 mt-2 rounded shadow-lg">
                <a href="/start" className="block text-sm hover:text-yellow-400">Getting Started</a>
                <a href="/start" className="block text-sm hover:text-yellow-400">Step-by-Step</a>
              </div>
            </div>

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
      <section className="relative h-[85vh] flex items-center">

        {/* IMAGE */}
        <img
          src="/hero.jpg"
          alt="Food Truck Business"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* CLEAN GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            DE LA CALLE <br />
            <span className="text-yellow-400">AL NEGOCIO</span>
          </h1>

          <p className="mt-4 text-lg max-w-xl text-gray-200">
            From the Street to Business. Build your food business the right way — legal, structured, and built to grow.
          </p>

          <div className="mt-6 flex gap-4">
            <a href="/start" className="bg-yellow-500 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-400">
              Empieza Tu Negocio
            </a>
            <a href="/locations" className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black">
              Encuentra Ubicaciones
            </a>
          </div>

        </div>
      </section>

      {/* ================= FEATURE STRIP ================= */}
      <section className="bg-black text-white py-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          <div>
            <div className="text-yellow-400 text-xl mb-1">📘</div>
            Educación
          </div>

          <div>
            <div className="text-yellow-400 text-xl mb-1">🤝</div>
            Apoyo
          </div>

          <div>
            <div className="text-yellow-400 text-xl mb-1">📍</div>
            Ubicaciones
          </div>

          <div>
            <div className="text-yellow-400 text-xl mb-1">📈</div>
            Crecimiento
          </div>

        </div>
      </section>

      {/* ================= PREMIUM CARDS ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Elige Tu Camino
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {/* CARD */}
            {[
              {
                title: "Street Vendor",
                desc: "Empieza a vender legalmente",
                gradient: "from-green-800 to-green-600"
              },
              {
                title: "Food Truck",
                desc: "Lleva tu comida a más",
                gradient: "from-red-700 to-yellow-500"
              },
              {
                title: "Home-Based",
                desc: "Comienza desde casa",
                gradient: "from-yellow-600 to-orange-500"
              },
              {
                title: "Kiosk / Retail",
                desc: "Escala a ubicación fija",
                gradient: "from-emerald-700 to-lime-500"
              }
            ].map((card, i) => (

              <div
                key={i}
                className={`relative rounded-xl overflow-hidden shadow-xl transform hover:-translate-y-3 transition duration-500 bg-gradient-to-br ${card.gradient}`}
              >

                {/* VIDEO HOVER */}
                <video
                  className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition duration-500"
                  src="/video.mp4"
                  autoPlay
                  muted
                  loop
                />

                <div className="relative z-10 p-6 text-white bg-black/40 h-full flex flex-col justify-between">

                  <div>
                    <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-200">{card.desc}</p>
                  </div>

                  <div className="mt-6 text-right text-yellow-400">
                    →
                  </div>

                </div>
              </div>

            ))}

          </div>
        </div>
      </section>

    </main>
  )
}
