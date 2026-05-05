export default function Home() {
  return (
    <main className="bg-[#f8f6f1] text-black">

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
        <div className="flex items-center gap-4">

  <img
    src="/logo.png"
    alt="De La Calle Al Negocio"
    className="h-12 w-12 object-contain"
  />

  <div>
    <div className="text-white text-sm font-bold tracking-wide">DE LA CALLE</div>
    <div className="text-yellow-500 font-bold">AL NEGOCIO</div>
  </div>

</div>

          {/* NAV */}
          <nav className="hidden md:flex gap-8 text-sm font-medium text-white">
            <a href="/start" className="hover:text-yellow-500 transition">Start Here</a>
            <a href="/permits" className="hover:text-yellow-500 transition">Permits & Legal</a>
            <a href="/food" className="hover:text-yellow-500 transition">Food Business</a>
            <a href="/locations" className="hover:text-yellow-500 transition">Locations</a>
            <a href="/setup" className="hover:text-yellow-500 transition">Setup</a>
            <a href="/money" className="hover:text-yellow-500 transition">Make Money</a>
            <a href="/community" className="hover:text-yellow-500 transition">Community</a>
          </nav>

        </div>
      </header>

      {/* ================= HERO (FULL IMAGE) ================= */}
      <section className="relative h-[90vh] w-full">

        {/* BACKGROUND IMAGE */}
        <img
          src="/hero.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">

          <div className="text-white max-w-xl">

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              DE LA CALLE
              <br />
              <span className="text-yellow-500">AL NEGOCIO</span>
            </h1>

            <p className="mt-4 text-xl font-semibold">
              From the Street to Business
            </p>

            <p className="mt-4 text-gray-300">
              Tu sueño comienza aquí. Build your food business the right way — legal, structured, and built to grow.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="/start" className="bg-yellow-500 text-black px-6 py-3 rounded font-semibold hover:scale-105 transition">
                Empieza Tu Negocio
              </a>

              <a href="/locations" className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition">
                Encuentra Ubicaciones
              </a>
            </div>

          </div>
        </div>

      </section>

      {/* ================= VALUE STRIP ================= */}
      <section className="bg-black text-white py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">

          {[
            ["Educación", "Guías paso a paso"],
            ["Apoyo", "Recursos y organizaciones"],
            ["Ubicaciones", "Mejores zonas en LA"],
            ["Crecimiento", "Estrategias reales"]
          ].map(([title, desc], i) => (
            <div key={i}>
              <div className="h-12 w-12 bg-yellow-500/20 rounded-full mx-auto mb-3"></div>
              <h4 className="font-semibold">{title}</h4>
              <p className="text-sm text-gray-400">{desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= PATH ================= */}
      <section className="py-24 bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="text-yellow-600 font-semibold">TU CAMINO EMPIEZA AQUÍ</p>
          <h2 className="text-4xl font-bold mt-2">Elige Tu Camino</h2>

          <div className="grid md:grid-cols-4 gap-8 mt-12">

            {[
              ["Street Vendor", "Empieza a vender legalmente"],
              ["Food Truck", "Lleva tu comida a más"],
              ["Home-Based Food", "Inicia desde casa"],
              ["Kiosk / Retail", "Escala tu negocio"]
            ].map(([title, desc], i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-8 shadow hover:shadow-2xl hover:-translate-y-2 transition border"
              >
                <div className="h-14 w-14 bg-yellow-500/20 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-gray-600 mt-2">{desc}</p>
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
