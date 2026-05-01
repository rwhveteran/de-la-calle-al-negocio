export default function Home() {
  return (
    <main className="bg-[#fff7ea] text-black">

      {/* PREMIUM HEADER */}
      <header className="fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-black/70 border-b border-yellow-500/20">
        <div className="flex items-center justify-between px-8 py-4">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full border-2 border-yellow-500 flex items-center justify-center text-yellow-500 text-xl">
              🚚
            </div>

            <div>
              <div className="text-lg font-black tracking-wide text-white">DE LA CALLE</div>
              <div className="text-xl font-black text-yellow-500">AL NEGOCIO</div>
            </div>
          </div>

          {/* NAV */}
          <nav className="hidden lg:flex items-center gap-10 text-sm font-semibold text-white">

            {[
              ["🚀", "Start", "/start"],
              ["📄", "Permits", "/permits"],
              ["🌮", "Food", "/food"],
              ["📍", "Locations", "/locations"],
              ["⚙️", "Setup", "/setup"],
              ["💰", "Money", "/money"],
              ["👥", "Community", "/community"]
            ].map(([icon, label, link]) => (
              <a
                key={label}
                href={link}
                className="flex flex-col items-center gap-1 hover:text-yellow-400 transition duration-200"
              >
                <span className="text-lg">{icon}</span>
                {label}
              </a>
            ))}

          </nav>

          {/* RIGHT */}
          <div className="flex gap-3">
            <button className="border border-yellow-500 px-3 py-1 text-yellow-500 text-sm hover:bg-yellow-500 hover:text-black transition">
              ES
            </button>
            <button className="border border-yellow-500 px-3 py-1 text-yellow-500 text-sm hover:bg-yellow-500 hover:text-black transition">
              🔍
            </button>
          </div>

        </div>
      </header>

      {/* HERO */}
      <section className="relative h-[92vh] flex items-center px-10 pt-28">

        <div className="absolute inset-0">
          <img src="/hero.jpg" alt="Hero" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-3xl text-white">
          <h1 className="text-6xl md:text-7xl font-black leading-tight">
            DE LA CALLE <br />
            <span className="text-yellow-400">AL NEGOCIO</span>
          </h1>

          <p className="mt-5 text-xl text-gray-200 max-w-xl">
            Build your street food business the right way — legal, structured, and profitable.
          </p>

          <div className="flex gap-5 mt-8">
            <button className="bg-yellow-500 text-black px-6 py-3 font-bold rounded-lg shadow-lg hover:scale-105 transition">
              Start Now
            </button>

            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
              Explore Locations
            </button>
          </div>
        </div>

      </section>

      {/* ICON STRIP */}
      <section className="bg-black text-white px-10 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">

          {[
            ["📘", "Educación", "Guías paso a paso"],
            ["🤝", "Apoyo", "Recursos reales"],
            ["📍", "Ubicaciones", "Zonas clave"],
            ["📈", "Crecimiento", "Estrategias"]
          ].map(([icon, title, desc]) => (
            <div key={title} className="hover:scale-105 transition">
              <div className="text-yellow-400 text-4xl">{icon}</div>
              <h3 className="font-bold mt-2">{title}</h3>
              <p className="text-sm text-gray-400">{desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* PATH SECTION */}
      <section className="px-10 py-20 bg-[#fff7ea]">

        <h2 className="text-center text-4xl font-black mb-14">
          Choose Your Path
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">

          {[
            ["🛒", "Street Vendor"],
            ["🚚", "Food Truck"],
            ["🏠", "Home-Based"],
            ["🏪", "Kiosk"]
          ].map(([icon, title]) => (
            <div
              key={title}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-2 transition"
            >
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                {icon}
              </div>

              <h3 className="font-black text-lg">{title}</h3>
            </div>
          ))}

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-10">
        <p className="font-bold text-yellow-400">DE LA CALLE AL NEGOCIO</p>
        <p className="text-sm text-gray-400">From the Street to Business</p>
      </footer>

    </main>
  )
}
