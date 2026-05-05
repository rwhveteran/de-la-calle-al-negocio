import {
  MapPin,
  FileText,
  Utensils,
  DollarSign,
  Users,
  Settings
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-[#f8f6f1] text-black">

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <img src="/logo.png" alt="Logo" className="h-12" />

          {/* NAV */}
          <nav className="hidden md:flex gap-8 text-sm text-white font-medium">

            {/* START HERE */}
            <div className="group relative">
              <span className="cursor-pointer hover:text-yellow-400">
                Start Here
              </span>

              <div className="absolute left-0 top-full mt-4 hidden group-hover:block w-[600px] bg-black border border-gray-700 rounded-xl p-6 shadow-2xl">

                <div className="grid grid-cols-2 gap-6">

                  <a href="/start" className="flex gap-3 hover:text-yellow-400">
                    <FileText />
                    <div>
                      <div className="font-semibold">Getting Started</div>
                      <div className="text-xs text-gray-400">
                        Step-by-step startup guide
                      </div>
                    </div>
                  </a>

                  <a href="/setup" className="flex gap-3 hover:text-yellow-400">
                    <Settings />
                    <div>
                      <div className="font-semibold">Business Setup</div>
                      <div className="text-xs text-gray-400">
                        Structure your operation
                      </div>
                    </div>
                  </a>

                </div>

              </div>
            </div>

            {/* PERMITS */}
            <div className="group relative">
              <span className="cursor-pointer hover:text-yellow-400">
                Permits & Legal
              </span>

              <div className="absolute left-0 top-full mt-4 hidden group-hover:block w-[600px] bg-black border border-gray-700 rounded-xl p-6 shadow-2xl">

                <div className="grid grid-cols-2 gap-6">

                  <a href="/permits" className="flex gap-3 hover:text-yellow-400">
                    <FileText />
                    <div>
                      <div className="font-semibold">Permits</div>
                      <div className="text-xs text-gray-400">
                        City & health permits
                      </div>
                    </div>
                  </a>

                  <a href="/permits" className="flex gap-3 hover:text-yellow-400">
                    <Settings />
                    <div>
                      <div className="font-semibold">Compliance</div>
                      <div className="text-xs text-gray-400">
                        Stay legal and protected
                      </div>
                    </div>
                  </a>

                </div>

              </div>
            </div>

            {/* FOOD */}
            <a href="/food" className="hover:text-yellow-400 flex items-center gap-2">
              <Utensils size={16} /> Food Business
            </a>

            {/* LOCATIONS */}
            <a href="/locations" className="hover:text-yellow-400 flex items-center gap-2">
              <MapPin size={16} /> Locations
            </a>

            {/* MONEY */}
            <a href="/money" className="hover:text-yellow-400 flex items-center gap-2">
              <DollarSign size={16} /> Make Money
            </a>

            {/* COMMUNITY */}
            <a href="/community" className="hover:text-yellow-400 flex items-center gap-2">
              <Users size={16} /> Community
            </a>

          </nav>

        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative h-[90vh] flex items-center">

        <img
          src="/hero.jpg"
          alt="Food Truck"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <div className="max-w-xl">

            <h1 className="text-5xl md:text-6xl font-extrabold">
              DE LA CALLE
              <br />
              <span className="text-yellow-400">AL NEGOCIO</span>
            </h1>

            <p className="mt-4 text-lg">
              Build your food business the right way — legal, structured, and profitable.
            </p>

          </div>
        </div>
      </section>

      {/* ================= CARDS ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">

          {[
            { title: "Street Vendor", video: "/videos/vendor.mp4" },
            { title: "Food Truck", video: "/videos/truck.mp4" },
            { title: "Home-Based", video: "/videos/home.mp4" },
            { title: "Retail", video: "/videos/store.mp4" }
          ].map((card, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >

              <video
                src={card.video}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition"
                muted
                loop
                autoPlay
                playsInline
              />

              <div className="bg-gradient-to-br from-yellow-200 to-yellow-100 p-6 relative z-10 group-hover:opacity-0 transition">
                <h3 className="font-bold">{card.title}</h3>
              </div>

            </div>
          ))}

        </div>
      </section>

    </main>
  );
}
