export default function Home() {
  return (
    <main className="bg-white text-black">

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full bg-black text-white z-50">
        <div className="flex items-center justify-between px-10 py-4">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo-primary.png" className="w-12 h-12 object-contain" />
            <div>
              <div className="font-bold text-lg">DE LA CALLE</div>
              <div className="text-yellow-500 font-bold">AL NEGOCIO</div>
            </div>
          </div>

          {/* Menu */}
          <nav className="hidden md:flex gap-8 text-sm">
            <span>Start Here</span>
            <span>Permits & Legal</span>
            <span>Food Business</span>
            <span>Locations</span>
            <span>Business Setup</span>
            <span>Make Money</span>
            <span>Community</span>
          </nav>

          {/* Right */}
          <div className="flex gap-4">
            <button className="border px-3 py-1">ES</button>
            <div className="border px-3 py-1">🔍</div>
          </div>

        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative h-[90vh] flex items-center px-10">

        <div className="absolute inset-0">
          <img src="/hero.jpg" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-2xl text-white">
          <h1 className="text-6xl font-bold mb-4 leading-tight">
            DE LA CALLE <br />
            <span className="text-yellow-500">AL NEGOCIO</span>
          </h1>

          <p className="text-xl mb-6">
            From the Street to Business
          </p>

          <div className="flex gap-4">
            <button className="bg-yellow-500 text-black px-6 py-3 font-bold">
              EMPIEZA TU NEGOCIO
            </button>

            <button className="border border-white px-6 py-3">
              ENCUENTRA UBICACIONES
            </button>
          </div>
        </div>
      </section>

      {/* ================= ICON STRIP ================= */}
      <section className="bg-black text-white py-6 px-10 grid grid-cols-4 text-center text-sm">

        <div>
          <div className="text-yellow-500 text-xl mb-1">📘</div>
          Educación
          <div className="text-gray-400 text-xs">Guías paso a paso</div>
        </div>

        <div>
          <div className="text-yellow-500 text-xl mb-1">🤝</div>
          Apoyo
          <div className="text-gray-400 text-xs">Recursos y organizaciones</div>
        </div>

        <div>
          <div className="text-yellow-500 text-xl mb-1">📍</div>
          Ubicaciones
          <div className="text-gray-400 text-xs">Mejores zonas en LA</div>
        </div>

        <div>
          <div className="text-yellow-500 text-xl mb-1">📈</div>
          Crecimiento
          <div className="text-gray-400 text-xs">Estrategias reales</div>
        </div>

      </section>

      {/* ================= CHOOSE PATH ================= */}
      <section className="py-20 px-10 bg-gray-50">
        <h2 className="text-center text-3xl font-bold mb-12">
          Elige Tu Camino
        </h2>

        <div className="grid grid-cols-4 gap-6">

          {[
            {
              title: "Street Vendor",
              desc: "Empieza a vender legalmente y crece tu negocio."
            },
            {
              title: "Food Truck",
              desc: "Lleva tu comida a más lugares y más clientes."
            },
            {
              title: "Home-Based Food",
              desc: "Inicia tu negocio desde casa de manera legal."
            },
            {
              title: "Kiosk / Retail",
              desc: "Lleva tu negocio al siguiente nivel con un local."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
              <div className="w-16 h-16 bg-yellow-500 rounded-full mb-4"></div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= SYSTEM (YOUR POSTER TURNED SECTION) ================= */}
      <section className="py-20 px-10">

        <h2 className="text-3xl font-bold text-center mb-12">
          Cómo Funciona
        </h2>

        <div className="grid grid-cols-4 gap-8 text-center">

          {[
            {
              title: "Planning",
              desc: "Define tu concepto, menú y estrategia."
            },
            {
              title: "Permits",
              desc: "Licencias, salud y requisitos legales."
            },
            {
              title: "Locations",
              desc: "Encuentra zonas de alto tráfico."
            },
            {
              title: "Funding",
              desc: "Costos, inversión y financiamiento."
            }
          ].map((step, i) => (
            <div key={i}>
              <div className="bg-yellow-500 text-black font-bold py-2 mb-3">
                {step.title}
              </div>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="bg-black text-white text-center py-16 px-10">
        <h2 className="text-2xl font-bold mb-4">
          From Survival to Ownership
        </h2>

        <p className="max-w-xl mx-auto text-gray-400">
          We help turn real life struggles into real business opportunities.
          This is not theory. This is the blueprint to build something real.
        </p>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-100 py-10 text-center text-sm text-gray-500">
        © 2026 De La Calle Al Negocio — All Rights Reserved
      </footer>

    </main>
  )
}
