export default function Home() {
  return (
    <main className="bg-white text-black">

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full bg-black text-white z-50">
        <div className="flex items-center justify-between px-10 py-4">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-yellow-500 w-10 h-10 rounded-full"></div>
            <div>
              <div className="font-bold text-lg">DE LA CALLE</div>
              <div className="text-yellow-500 font-bold">AL NEGOCIO</div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-10 text-sm items-center">

            <span className="flex flex-col items-center hover:text-yellow-500 cursor-pointer">
              🚀
              <span>Start Here</span>
            </span>

            <span className="flex flex-col items-center hover:text-yellow-500 cursor-pointer">
              📄
              <span>Permits & Legal</span>
            </span>

            <span className="flex flex-col items-center hover:text-yellow-500 cursor-pointer">
              🌮
              <span>Food Business</span>
            </span>

            <span className="flex flex-col items-center hover:text-yellow-500 cursor-pointer">
              📍
              <span>Locations</span>
            </span>

            <span className="flex flex-col items-center hover:text-yellow-500 cursor-pointer">
              ⚙️
              <span>Business Setup</span>
            </span>

            <span className="flex flex-col items-center hover:text-yellow-500 cursor-pointer">
              💰
              <span>Make Money</span>
            </span>

            <span className="flex flex-col items-center hover:text-yellow-500 cursor-pointer">
              👥
              <span>Community</span>
            </span>

          </nav>

          {/* Right Side */}
          <div className="flex gap-4 items-center">
            <button className="border px-3 py-1">ES</button>
            <div className="border px-3 py-1">🔍</div>
          </div>

        </div>
      </header>

      {/* HEADER SPACER */}
      <div className="h-[90px]" />

      {/* ================= HERO ================= */}
      <section className="relative h-[85vh] flex items-center px-10">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/hero.jpg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-2xl text-white">

          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-4">
            DE LA CALLE <br />
            <span className="text-yellow-500">AL NEGOCIO</span>
          </h1>

          <p className="text-xl md:text-2xl mb-2 font-medium">
            From the Street to Business
          </p>

          <p className="text-lg text-gray-300 mb-6">
            Tu sueño comienza aquí. <br />
            We help you get your first food truck.
          </p>

          <div className="flex gap-4">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-400 transition">
              Empieza Tu Negocio
            </button>

            <button className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition">
              Encuentra Ubicaciones
            </button>
          </div>

        </div>
      </section>

      {/* ================= INFO BAR ================= */}
      <section className="bg-black text-white py-6 px-10">
        <div className="grid md:grid-cols-4 gap-6 text-center">

          <div>
            📘
            <p className="font-semibold">Educación</p>
            <p className="text-sm text-gray-400">Guías paso a paso</p>
          </div>

          <div>
            🤝
            <p className="font-semibold">Apoyo</p>
            <p className="text-sm text-gray-400">Recursos y organizaciones</p>
          </div>

          <div>
            📍
            <p className="font-semibold">Ubicaciones</p>
            <p className="text-sm text-gray-400">Mejores zonas en LA</p>
          </div>

          <div>
            📈
            <p className="font-semibold">Crecimiento</p>
            <p className="text-sm text-gray-400">Estrategias reales</p>
          </div>

        </div>
      </section>

      {/* ================= CHOOSE PATH ================= */}
      <section className="py-20 px-10 bg-gray-100">

        <h2 className="text-4xl font-bold text-center mb-14">
          Elige Tu Camino
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="bg-yellow-400 w-16 h-16 flex items-center justify-center rounded-full mb-4 text-xl">
              🛒
            </div>
            <h3 className="font-bold text-lg">Street Vendor</h3>
            <p className="text-gray-600 text-sm">
              Empieza a vender legalmente y crece tu negocio.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="bg-yellow-400 w-16 h-16 flex items-center justify-center rounded-full mb-4 text-xl">
              🚚
            </div>
            <h3 className="font-bold text-lg">Food Truck</h3>
            <p className="text-gray-600 text-sm">
              Lleva tu comida a más lugares y más clientes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="bg-yellow-400 w-16 h-16 flex items-center justify-center rounded-full mb-4 text-xl">
              🏠
            </div>
            <h3 className="font-bold text-lg">Home-Based Food</h3>
            <p className="text-gray-600 text-sm">
              Inicia tu negocio desde casa de manera legal.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="bg-yellow-400 w-16 h-16 flex items-center justify-center rounded-full mb-4 text-xl">
              🏪
            </div>
            <h3 className="font-bold text-lg">Kiosk / Retail</h3>
            <p className="text-gray-600 text-sm">
              Lleva tu negocio al siguiente nivel.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}
