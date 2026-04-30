export default function Home() {
  return (
    <main className="bg-white text-black">
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
      {/* HERO SECTION */}
      <section className="h-[80vh] flex items-center px-10 bg-gray-100">
        <div>
          <h1 className="text-5xl font-bold mb-4">
            De La Calle <span className="text-yellow-500">Al Negocio</span>
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            From the Street to Business
          </p>

          <button className="bg-black text-white px-6 py-3 rounded">
            Empieza Tu Negocio
          </button>
        </div>
      </section>

      {/* SECTION: CHOOSE PATH */}
      <section className="py-16 px-10">
        <h2 className="text-3xl font-bold text-center mb-10">
          Elige Tu Camino
        </h2>

        <div className="grid grid-cols-4 gap-6">
          <div className="p-6 border rounded shadow">
            <h3 className="font-bold mb-2">Street Vendor</h3>
            <p className="text-sm text-gray-600">
              Empieza a vender legalmente.
            </p>
          </div>

          <div className="p-6 border rounded shadow">
            <h3 className="font-bold mb-2">Food Truck</h3>
            <p className="text-sm text-gray-600">
              Lleva tu comida a más clientes.
            </p>
          </div>

          <div className="p-6 border rounded shadow">
            <h3 className="font-bold mb-2">Home-Based</h3>
            <p className="text-sm text-gray-600">
              Cocina desde casa legalmente.
            </p>
          </div>

          <div className="p-6 border rounded shadow">
            <h3 className="font-bold mb-2">Kiosk</h3>
            <p className="text-sm text-gray-600">
              Escala a un local físico.
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}
