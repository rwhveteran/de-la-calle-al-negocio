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
        Empieza Tu Negocio
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

/* ================= PAGE ================= */
export default function Home() {
  return (
    <main className="bg-[#f8f6f1] text-black">

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <img src="/logo.png" className="h-12" />

          <nav className="hidden md:flex gap-8 text-white text-sm">

            <a href="/start" className="hover:text-yellow-400">Start Here</a>
            <a href="/permits" className="hover:text-yellow-400">Permits & Legal</a>
            <a href="/food" className="hover:text-yellow-400">Food Business</a>
            <a href="/locations" className="hover:text-yellow-400">Locations</a>
            <a href="/setup" className="hover:text-yellow-400">Setup</a>
            <a href="/money" className="hover:text-yellow-400">Make Money</a>
            <a href="/community" className="hover:text-yellow-400">Community</a>

          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">

        <img
          src="/hero.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

        <div className="relative z-10 max-w-4xl text-center px-6 text-white">

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            DE LA CALLE <br />
            <span className="text-yellow-400">AL NEGOCIO</span>
          </h1>

          <p className="mt-4 text-lg">
            From the Street to Business. Build your food business the right way —
            legal, structured, and built to grow.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <TacoButton />

            <a
              href="/locations"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              Encuentra Ubicaciones
            </a>
          </div>

        </div>
      </section>

      {/* ================= SECTION TITLE ================= */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold">Elige Tu Camino</h2>
        <p className="text-gray-500 mt-2">
          Start where you are. Build step by step.
        </p>
      </section>

      {/* ================= PREMIUM CARDS ================= */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">

          {[
            {
              title: "Street Vendor",
              desc: "Start selling legally from the street",
              gradient: "from-green-500 to-yellow-400",
              video: "/videos/1.mp4"
            },
            {
              title: "Food Truck",
              desc: "Expand your reach and increase profits",
              gradient: "from-red-500 to-yellow-400",
              video: "/videos/2.mp4"
            },
            {
              title: "Home-Based",
              desc: "Start from your own kitchen",
              gradient: "from-yellow-500 to-orange-400",
              video: "/videos/3.mp4"
            },
            {
              title: "Kiosk / Retail",
              desc: "Build toward a permanent location",
              gradient: "from-green-600 to-green-400",
              video: "/videos/4.mp4"
            }
          ].map((card, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >

              {/* VIDEO HOVER */}
              <video
                src={card.video}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
                muted
                loop
                autoPlay
                playsInline
              />

              {/* GRADIENT CARD */}
              <div className={`p-6 h-full bg-gradient-to-br ${card.gradient} text-white relative z-10 group-hover:opacity-0 transition duration-300`}>
                <h3 className="font-bold text-lg">{card.title}</h3>
                <p className="text-sm mt-2">{card.desc}</p>
              </div>

            </div>
          ))}

        </div>
      </section>

    </main>
  );
}
