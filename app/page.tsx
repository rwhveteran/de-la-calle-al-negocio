export default function Home() {
  return (
    <main className="bg-[#fff7ea] text-black">

      {/* HEADER */}
      <header className="fixed top-0 left-0 z-50 w-full bg-[#080808] text-white border-b border-yellow-600/30">
        <div className="flex items-center justify-between px-8 py-4">

          {/* LOGO */}
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-full border-4 border-yellow-500 flex items-center justify-center text-yellow-500 font-black">
              🚚
            </div>

            <div className="leading-tight">
              <div className="text-xl font-black tracking-wide">DE LA CALLE</div>
              <div className="text-2xl font-black text-yellow-500">AL NEGOCIO</div>
              <div className="text-xs font-bold text-white">FROM THE STREET TO BUSINESS</div>
            </div>
          </div>

          {/* NAV */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-bold">

            <a href="/start" className="text-center hover:text-yellow-500">
              🚀<br />Start<br /><span className="text-yellow-500 text-xs">Empieza</span>
            </a>

            <a href="/permits" className="text-center hover:text-yellow-500">
              📄<br />Permits<br /><span className="text-yellow-500 text-xs">Legal</span>
            </a>

            <a href="/food" className="text-center hover:text-yellow-500">
              🌮<br />Food<br /><span className="text-yellow-500 text-xs">Negocio</span>
            </a>

            <a href="/locations" className="text-center hover:text-yellow-500">
              📍<br />Locations<br /><span className="text-yellow-500 text-xs">Zonas</span>
            </a>

            <a href="/setup" className="text-center hover:text-yellow-500">
              ⚙️<br />Setup<br /><span className="text-yellow-500 text-xs">Iniciar</span>
            </a>

            <a href="/money" className="text-center hover:text-yellow-500">
              💰<br />Money<br /><span className="text-yellow-500 text-xs">Ingresos</span>
            </a>

            <a href="/community" className="text-center hover:text-yellow-500">
              👥<br />Community<br /><span className="text-yellow-500 text-xs">Apoyo</span>
            </a>

          </nav>

          {/* RIGHT */}
          <div className="flex gap-3">
            <button className="border border-yellow-500 px-4 py-2 text-yellow-500 font-bold">ES</button>
            <button className="border border-yellow-500 px-4 py-2 text-yellow-500 font-bold">🔍</button>
          </div>

        </div>
      </header>

      {/* HERO */}
      <section className="relative h-[92vh] flex items-center px-10 pt-28">

        <div className="absolute inset-0">
          <img src="/hero.jpg" alt="Hero" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />
        </div>

        <div className="relative z-10 max-w-3xl text-white">
          <h1 className="text-6xl md:text-7xl font-black leading-tight">
            DE LA CALLE <br />
            <span className="text-yellow-500">AL NEGOCIO</span>
          </h1>

          <p className="mt-4 text-2xl font-bold">From the Street to Business</p>

          <div className="my-5 h-1 w-20 bg-yellow-500" />

          <p className="text-xl font-semibold">
            Tu sueño comienza aquí.
          </p>

          <p className="text-xl text-yellow-500 font-bold mb-8">
            We help you build a real business.
          </p>

          <div className="flex gap-5">
            <button className="bg-yellow-500 text-black px-7 py-4 font-black rounded">
              ➜ EMPIEZA TU NEGOCIO
            </button>

            <button className="border border-white px-7 py-4 font-black rounded text-white">
              📍 ENCUENTRA UBICACIONES
            </button>
          </div>
        </div>

      </section>

      {/* ICON STRIP */}
      <section className="bg-[#080808] text-white px-10 py-7">
        <div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto">

          <div className="flex items-center gap-4">
            <div className="text-5xl text-yellow-500">📖</div>
            <div>
              <h3 className="font-black">Educación</h3>
              <p className="text-sm text-gray-300">Guías paso a paso</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-5xl text-yellow-500">🤝</div>
            <div>
              <h3 className="font-black">Apoyo</h3>
              <p className="text-sm text-gray-300">Recursos reales</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-5xl text-yellow-500">📍</div>
            <div>
              <h3 className="font-black">Ubicaciones</h3>
              <p className="text-sm text-gray-300">Mejores zonas</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-5xl text-yellow-500">📈</div>
            <div>
              <h3 className="font-black">Crecimiento</h3>
              <p className="text-sm text-gray-300">Estrategias</p>
            </div>
          </div>

        </div>
      </section>

      {/* PATH SECTION */}
      <section className="px-10 py-16 bg-[#fff7ea]">

        <p className="text-center text-yellow-600 font-black text-sm">
          TU CAMINO EMPIEZA AQUÍ
        </p>

        <h2 className="text-center text-4xl font-black mb-12">
          Elige Tu Camino
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">

          {[
            ["🛒", "Street Vendor", "Empieza a vender legalmente"],
            ["🚚", "Food Truck", "Lleva tu comida a más clientes"],
            ["🏠", "Home-Based", "Empieza desde casa"],
            ["🏪", "Kiosk", "Escala tu negocio"]
          ].map(([icon, title, text]) => (
            <div key={title} className="bg-white rounded-2xl shadow-lg p-7">

              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-4xl mb-4">
                {icon}
              </div>

              <h3 className="text-xl font-black">{title}</h3>
              <p className="text-gray-600 text-sm mt-2">{text}</p>

            </div>
          ))}

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-10">
        <p className="font-black text-yellow-500">DE LA CALLE AL NEGOCIO</p>
        <p className="text-sm text-gray-400">From the Street to Business</p>
      </footer>

    </main>
  )
}
