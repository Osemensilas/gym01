'use client';

import Image from "next/image";
import Link from "next/link";

const values = [
  { icon: "💪", title: "Excellence", desc: "We set high standards and aim for the best results." },
  { icon: "🤝", title: "Community", desc: "A supportive environment where everyone belongs." },
  { icon: "🔬", title: "Innovation", desc: "We stay ahead with modern training methods." },
  { icon: "❤️", title: "Integrity", desc: "We build trust through honest guidance." },
];

const trainers = [
  {
    name: "Marcus Johnson",
    role: "Head Strength Coach",
    img: "https://images.unsplash.com/photo-1534368786749-b63e05c90863?w=400&q=80",
    desc: "10+ years specializing in powerlifting and performance.",
  },
  {
    name: "Amara Okafor",
    role: "Cardio & HIIT Expert",
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80",
    desc: "Certified nutritionist and HIIT specialist.",
  },
  {
    name: "David Emeka",
    role: "Personal Training Lead",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
    desc: "Body composition & weight management expert.",
  },
  {
    name: "Sarah Adeleke",
    role: "Yoga Coach",
    img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=400&q=80",
    desc: "Focus on flexibility and mindfulness.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#111] text-white min-h-screen">

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-[#111]/95 backdrop-blur border-b border-[#2a2a2a] px-6 h-[70px] flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-widest">
          GREATHONEY<span className="text-orange-500">2</span>FITNESS
        </Link>

        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about" className="text-white border-b-2 border-orange-500 pb-1">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
          Free Trial
        </button>
      </nav>

      {/* HERO */}
      <section className="text-center py-20 px-6 border-b border-[#2a2a2a] bg-gradient-to-br from-[#1a1a1a] via-[#111] to-[#1c0e00]">
        <span className="text-orange-500 text-xs tracking-widest uppercase font-bold">
          About Us
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mt-4">
          Your <span className="text-orange-500">Fitness Journey</span> Starts with Us
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto mt-4">
          A results-driven fitness center helping you achieve your goals.
        </p>
      </section>

      {/* ABOUT INTRO */}
      <section className="grid md:grid-cols-2 gap-10 px-6 py-20 border-b border-[#2a2a2a]">
        <div className="relative h-[280px] md:h-[460px] rounded-xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
            alt="gym"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <span className="text-orange-500 text-xs uppercase font-bold tracking-widest">
            About Us
          </span>

          <h2 className="text-3xl font-bold mt-2">
            Your <span className="text-orange-500">Fitness Journey</span> Starts with Us
          </h2>

          <p className="text-gray-400 mt-4">
            We are a results-driven fitness center dedicated to helping you achieve your goals.
          </p>

          <p className="text-gray-400 mt-3">
            Founded with a passion for fitness and community, we’ve been transforming lives for over 10 years.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-[#2a2a2a]">
            {["10+ Years", "100+ Members", "10+ Classes", "10+ Trainers"].map((s, i) => (
              <div key={i}>
                <div className="text-2xl text-orange-500 font-bold">{s.split(" ")[0]}</div>
                <div className="text-xs text-gray-400">{s.split(" ").slice(1).join(" ")}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="bg-[#1a1a1a] px-6 py-20 border-y border-[#2a2a2a]">
        <div className="text-center mb-10">
          <span className="text-orange-500 text-xs uppercase font-bold tracking-widest">
            Our Facility
          </span>
          <h2 className="text-3xl font-bold mt-2">
            World-Class <span className="text-orange-500">Facilities</span>
          </h2>
        </div>

        <div className="relative h-[300px] md:h-[420px] rounded-xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80"
            alt="gym"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* MISSION */}
      <section className="grid md:grid-cols-2 gap-6 px-6 py-20 border-b border-[#2a2a2a]">
        {[
          {
            icon: "🎯",
            title: "Mission",
            text: "To provide an inclusive and motivating fitness environment.",
          },
          {
            icon: "🔭",
            title: "Vision",
            text: "To become a leading fitness destination and transform lives.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-8 hover:border-orange-500 transition"
          >
            <div className="text-2xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2">
              Our <span className="text-orange-500">{item.title}</span>
            </h3>
            <p className="text-gray-400 text-sm">{item.text}</p>
          </div>
        ))}
      </section>

      {/* VALUES */}
      <section className="px-6 py-20 border-b border-[#2a2a2a]">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">
            What <span className="text-orange-500">Drives</span> Us
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 text-center hover:-translate-y-2 hover:border-orange-500 transition"
            >
              <div className="text-3xl mb-3">{v.icon}</div>
              <h4 className="font-bold">{v.title}</h4>
              <p className="text-gray-400 text-sm mt-2">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-[#1a1a1a] px-6 py-20 border-b border-[#2a2a2a]">
        <div className="flex flex-col md:flex-row justify-between mb-10 gap-4">
          <h2 className="text-3xl font-bold">
            Meet Our <span className="text-orange-500">Trainers</span>
          </h2>
          <p className="text-gray-400 max-w-md">
            Certified professionals bringing expertise to every session.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {trainers.map((t, i) => (
            <div
              key={i}
              className="bg-[#111] border border-[#2a2a2a] rounded-xl overflow-hidden hover:-translate-y-2 hover:border-orange-500 transition"
            >
              <div className="relative h-[220px]">
                <Image src={t.img} alt={t.name} fill className="object-cover" />
              </div>

              <div className="p-4">
                <h4 className="font-bold">{t.name}</h4>
                <div className="text-orange-500 text-sm">{t.role}</div>
                <p className="text-gray-400 text-sm mt-2">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">READY TO GROW?</h2>
        <p className="text-gray-400 mb-6">
          Start your fitness journey today.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-bold">
          Get Started →
        </button>
      </section>

    </main>
  );
}