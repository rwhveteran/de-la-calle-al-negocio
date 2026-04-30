export default function Home() {
  return (
    <main className="bg-[#fff7ea] text-black">
      <header className="fixed top-0 left-0 z-50 w-full bg-[#080808] text-white border-b border-yellow-600/30">
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full border-4 border-yellow-500 flex items-center justify-center text-yellow-500 font-black">
              🚚
            </div>

            <div className="leading-tight">
              <div className="text-2xl font-black tracking-wide">DE LA CALLE</div>
              <div className="text-3xl font-black text-yellow-500">AL NEGOCIO</div>
              <div className="text-xs font-bold text-white">FROM THE STREET TO BUSINESS</div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-bold">
            <a href="#" className="text-center hover:text-yellow-500">🚀<br />Start Here<br /><span className="text-yellow-500 text-xs">Empieza Aquí</span></a>
            <a href="#" className="text-center hover:text-yellow-500">📄<br />Permits & Legal<br /><span className="text-yellow-500 text-xs">Permisos</span></a>
            <a href="#" className="text-center hover:text-yellow-500">🌮<br />Food Business<br /><span className="text-yellow-500 text-xs">Negocio</span></a>
            <a href="#" className="text-center hover:text-yellow-500">📍<br />Locations<br /><span className="text-yellow-500 text-xs">Ubicaciones</span></a>
            <a href="#" className="text-center hover:text-yellow-500">⚙️<br />Business Setup<br /><span className="text-yellow-500 text-xs">Iniciar</span></a>
            <a href="#" className="text-center hover:text-yellow-500">💰<br />Make Money<br /><span className="text-yellow-500 text-xs">Ingresos</span></a>
            <a href="#" className="text-center hover:text-yellow-500">👥<br />Community<br /><span className="text-yellow-500 text-xs">Apoyo</span></a>
          </nav>

          <div className="flex gap-3">
            <button className="border border-yellow-500 px-4 py-2 text-yellow-500 font-bold">ES</button>
            <button className="border border-yellow-500 px-4 py-2 text-yellow-500 font-bold">🔍</button>
          </div>
        </div>
      </header>

      <section className="relative h-[92vh] flex items-center px-10 pt-28">
        <div className="absolute inset-0">
          <img src="/hero.jpg" className="h-full w-full object-cover" />
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

      <section className="bg-[#080808] text-white px-10 py-7">
        <div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="text-5xl text-yellow-500">📖</div>
            <div><h3 className="font-black">Educación</h3><p className="text-sm text-gray-300">Guías paso a paso</p></div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-5xl text-yellow-500">🤝</div>
            <div><h3 className="font-black">Apoyo</h3><p className="text-sm text-gray-300">Recursos y organizaciones</p></div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-5xl text-yellow-500">📍</div>
            <div><h3 className="font-black">Ubicaciones</h3><p className="text-sm text-gray-300">Mejores zonas en LA</p></div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-5xl text-yellow-500">📈</div>
            <div><h3 className="font-black">Crecimiento</h3><p className="text-sm text-gray-300">Estrategias reales</p></div>
          </div>
        </div>
      </section>

      <section className="px-10 py-16 bg-[#fff7ea]">
        <p className="text-center text-yellow-600 font-black text-sm">
          TU CAMINO EMPIEZA AQUÍ
        </p>

        <h2 className="text-center text-4xl font-black mb-12">
          Elige Tu Camino
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            ["🛒", "Street Vendor", "Vendedor en la Calle", "Empieza a vender legalmente y crece tu negocio."],
            ["🚚", "Food Truck", "Camión de Comida", "Lleva tu comida a más lugares y más clientes."],
            ["🏠", "Home-Based Food", "Comida desde Casa", "Inicia tu negocio desde casa de manera legal."],
            ["🏪", "Kiosk / Retail", "Kiosco / Local", "Lleva tu negocio al siguiente nivel con un local."]
          ].map(([icon, title, sub, text]) => (
            <div className="bg-white rounded-2xl shadow-lg p-7 min-h-[220px]" key={title}>
              <div className="w-24 h-24 rounded-full bg-yellow-400 flex items-center justify-center text-5xl mb-5">
                {icon}
              </div>
              <h3 className="text-xl font-black">{title}</h3>
              <p className="font-semibold text-gray-600 mb-4">{sub}</p>
              <p className="text-sm font-medium">{text}</p>
              <div className="text-yellow-600 text-3xl text-right mt-4">→</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-10 py-20 bg-white">
        <h2 className="text-center text-4xl font-black mb-4">
          The Street Food Success Map
        </h2>

        <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12">
          A simple roadmap for turning a street food idea into a legal, organized, income-producing operation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {[
            ["PLANNING", "Choose your food concept, menu, pricing, season, and business type."],
            ["PERMITS", "Understand legal selling, health rules, seller permits, and city requirements."],
            ["LOCATIONS", "Find legal, high-traffic areas where customers already gather."],
            ["FUNDING", "Estimate startup costs, equipment, insurance, branding, and working capital."],
            ["FOOD HANDLING", "Operate safely with sanitation, storage, commissary, and inspection readiness."]
          ].map(([title, text]) => (
            <div className="border-2 border-yellow-500 rounded-xl p-6 bg-[#111] text-white" key={title}>
              <h3 className="text-yellow-500 font-black text-xl mb-3">{title}</h3>
              <p className="text-sm text-gray-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-black text-white text-center py-10">
        <p className="font-black text-yellow-500">DE LA CALLE AL NEGOCIO</p>
        <p className="text-sm text-gray-400">From the Street to Business</p>
      </footer>
    </main>
  );
}
