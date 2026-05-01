export default function FoodPage() {
  return (
    <main className="bg-white text-black">

      <section className="relative h-[85vh] flex items-center px-10">
        <div className="absolute inset-0">
          <img
            src="/hero.jpg"
            alt="Food truck"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-2xl text-white">
          <h1 className="text-6xl font-bold mb-4 leading-tight">
            FOOD BUSINESS <br />
            <span className="text-yellow-500">
              NEGOCIO DE COMIDA
            </span>
          </h1>

          <p className="text-xl mb-4">
            Your recipe. Your brand. Your business.
          </p>

          <p className="text-gray-300 mb-6">
            Aprende a crear un menú, definir precios y construir tu marca.
          </p>

          <div className="flex gap-4">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded font-semibold">
              Guías y Recursos
            </button>

            <button className="border border-white px-6 py-3 rounded">
              Ideas de Menú
            </button>
          </div>
        </div>
      </section>

    </main>
  )
}
