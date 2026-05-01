export default function CommunityPage() {
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
            COMMUNITY <br />
            <span className="text-yellow-500">
              COMUNIDAD
            </span>
          </h1>

          <p className="text-xl mb-4">
            You’re not doing this alone.
          </p>

          <p className="text-gray-300 mb-6">
            Conéctate con otros emprendedores, comparte experiencias y crece con apoyo real.
          </p>

          <div className="flex gap-4">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded font-semibold">
              Unirse
            </button>

            <button className="border border-white px-6 py-3 rounded">
              Ver Comunidad
            </button>
          </div>
        </div>
      </section>

    </main>
  )
}
