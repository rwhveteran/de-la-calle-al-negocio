"use client";

import { useState } from "react";
import {
  MapPin,
  FileText,
  Utensils,
  DollarSign,
  Users,
  Settings
} from "lucide-react";

/* ================= TACO BUTTON ================= */
function TacoButton() {
  const [explode, setExplode] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => {
        setExplode(true);
        setTimeout(() => setExplode(false), 600);
      }}
    >
      <a
        href="/start"
        className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition relative z-10"
      >
        Start Now
      </a>

      {explode &&
        [...Array(8)].map((_, i) => {
          const angle = (i / 8) * 360;
          const x = Math.cos(angle * (Math.PI / 180)) * 60;
          const y = Math.sin(angle * (Math.PI / 180)) * 60;

          return (
            <span
              key={i}
              className="absolute text-lg"
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                animation: `explode-${i} 0.6s forwards`
              }}
            >
              🌮
              <style>{`
                @keyframes explode-${i} {
                  0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                  100% { opacity: 0; transform: translate(${x}px, ${y}px) scale(0.6); }
                }
              `}</style>
            </span>
          );
        })}
    </div>
  );
}

/* ================= MAIN PAGE ================= */
export default function Home() {
  return (
    <main className="bg-[#f8f6f1] text-black">

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <img src="/logo.png" className="h-12" />

          <nav className="hidden md:flex gap-8 text-white text-sm">

            {/* START MENU */}
            <div className="group relative">
              <span className="cursor-pointer hover:text-yellow-400">Start Here</span>

              <div className="absolute hidden group-hover:block mt-4 bg-black border border-gray-700 rounded-xl p-6 w-[500px] shadow-xl">
                <div className="grid grid-cols-2 gap-4">

                  <a href="/start" className="flex gap-3 hover:text-yellow-400">
                    <FileText />
                    <div>
                      <div className="font-semibold">Getting Started</div>
                      <div className="text-xs text-gray-400">Step-by-step guide</div>
                    </div>
                  </a>

                  <a href="/setup" className="flex gap-3 hover:text-yellow-400">
                    <Settings />
                    <div>
                      <div className="font-semibold">Setup</div>
                      <div className="text-xs text-gray-400">Build your business</div>
                    </div>
                  </a>

                </div>
              </div>
            </div>

            <a href="/permits" className="flex items-center gap-2 hover:text-yellow-400">
              <FileText size={16}/> Permits
            </a>

            <a href="/food" className="flex items-center gap-2 hover:text-yellow-400">
              <Utensils size={16}/> Food
            </a>

            <a href="/locations" className="flex items-center gap-2 hover:text-yellow-400">
              <MapPin size={16}/> Locations
            </a>

            <a href="/money" className="flex items-center gap-2 hover:text-yellow-400">
              <DollarSign size={16}/> Money
            </a>

            <a href="/community" className="flex items-center gap-2 hover:text-yellow-400">
              <Users size={16}/> Community
            </a>

          </nav>

        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative h-[90vh] flex items-center">

        <img
          src="/hero.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <div className="max-w-xl">

            <h1 className="text-5xl md:text-6xl font-extrabold">
              DE LA CALLE <br />
              <span className="text-yellow-400">AL NEGOCIO</span>
            </h1>

            <p className="mt-4 text-lg">
              Build your food business the right way — legal, structured, and profitable.
            </p>

            <div className="mt-6 flex gap-4">
              <TacoButton />

              <a href="/locations" className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
                Locations
              </a>
            </div>

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
            <div key={i} className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">

              <video
                src={card.video}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition"
                muted
                loop
                autoPlay
                playsInline
              />

              <div className="bg-gradient-to-br from-yellow-200 to-yellow-100 p-6 relative z-10 group-hover:opacity-0 transition">
                <h3 className="font-bold text-lg">{card.title}</h3>
              </div>

            </div>
          ))}

        </div>
      </section>

    </main>
  );
}
