export default function Home() {
  return (
    <main className="bg-white text-black">

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
