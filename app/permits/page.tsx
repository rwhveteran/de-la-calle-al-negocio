export default function PermitsPage() {
  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="relative h-[85vh] flex items-center px-10">

        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/hero.jpg"
            alt="Food truck"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl text-white">
          <h1 className="text-6xl font-bold mb-4 leading-tight">
            PERMITS & LEGAL <br />
            <span className="text-yellow-500">
              PERMISOS Y REQUISITOS
            </span>
          </h1>

          <p className="text-xl mb-4">
            Do it right. Do it legal.
          </p>

          <p className="text-gray-300 mb-6">
            Aprende todo lo necesario para operar tu negocio de comida legalmente.
          </p>

          <div className="flex gap-4">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded font-semibold">
              Guías y Permisos
            </button>

            <button className="border border-white px-6 py-3 rounded">
              Requisitos por Ciudad
            </button>
          </div>
        </div>

      </section>

      {/* SIMPLE SECTION */}
      <section className="py-16 px-10 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Todo lo que necesitas para operar legalmente
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600">
          Desde permisos hasta inspecciones, aquí encontrarás cada paso necesario
          para comenzar tu negocio sin problemas legales.
        </p>
      </section>

    </main>
  );
}
