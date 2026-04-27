'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    title: "Personal Trainer",
    img: "/",
    desc: "Work one-on-one with certified trainers who create personalized programs tailored to your goals.",
    tags: ["Custom Plan", "1-on-1 Sessions", "Goal Setting"],
  },
  {
    title: "Group Class",
    img: "/",
    desc: "Train alongside like-minded people in a fun, motivating atmosphere.",
    tags: ["Yoga", "HIIT", "Zumba"],
  },
  {
    title: "Strength Training",
    img: "/",
    desc: "Build power and muscle with our comprehensive strength programs.",
    tags: ["Powerlifting", "Hypertrophy", "Compound Lifts"],
  },
];

const accordionData = [
  {
    title: "State-of-the-art Equipment",
    content:
      "Our gym is equipped with modern machines to maximize every workout.",
  },
  {
    title: "Expert Trainer",
    content:
      "Certified trainers design programs tailored to your unique goals.",
  },
  {
    title: "Wide Range of Classes",
    content:
      "From HIIT to yoga, enjoy a variety of weekly sessions.",
  },
  {
    title: "Welcoming Community",
    content:
      "A supportive environment where everyone belongs.",
  },
];

export default function ServicesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="bg-[#111] text-white min-h-screen">

      {/* HERO */}
      <section className="text-center py-20 px-6 border-b border-[#2a2a2a] bg-gradient-to-br from-[#1a1a1a] via-[#111] to-[#1c0e00]">
        <span className="text-orange-500 text-xs tracking-widest font-bold uppercase">
          Our Services
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
          Unleash Your Potential{" "}
          <span className="text-orange-500">Premium Fitness Service</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto mt-4">
          Train in a motivating environment with expert guidance tailored to your goals.
        </p>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6">
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-6">
          <h2 className="text-3xl font-bold">
            Everything You Need for{" "}
            <span className="text-orange-500">Your Fitness Goals</span>
          </h2>
          <p className="text-gray-400 max-w-md">
            From coaching to group classes, everything you need to succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden hover:-translate-y-2 transition"
            >
              <div className="relative h-55">
                <Image src={s.img} alt={s.title} fill className="object-cover" />
              </div>

              <div className="p-6">
                <h3 className="font-bold text-lg">{s.title}</h3>
                <p className="text-gray-400 text-sm mt-2">{s.desc}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {s.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="border border-[#2a2a2a] px-3 py-1 rounded-full text-xs text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="#"
                  className="text-orange-500 mt-4 inline-block font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="bg-[#1a1a1a] py-20 px-6 border-y border-[#2a2a2a]">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-75 md:h-105 rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80"
              alt="gym"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Why Choose Us for Your <span className="text-orange-500">Fitness</span> Journey?
            </h2>

            {accordionData.map((item, index) => (
              <div
                key={index}
                className="border border-[#2a2a2a] rounded-lg mb-3 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full text-left px-4 py-4 flex justify-between items-center hover:bg-[#222]"
                >
                  {item.title}
                  <span
                    className={`transition ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    ⌄
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-4 pb-4 text-gray-400 text-sm">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-2 md:grid-cols-4 text-center py-16 border-b border-[#2a2a2a]">
        {["10+ Years", "100+ Members", "10+ Classes", "10+ Trainers"].map(
          (stat, i) => (
            <div key={i}>
              <div className="text-4xl text-orange-500 font-bold">{stat.split(" ")[0]}</div>
              <div className="text-gray-400 text-sm">{stat.split(" ").slice(1).join(" ")}</div>
            </div>
          )
        )}
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">READY TO GROW?</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          Start your fitness journey today.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-bold">
          Get Started →
        </button>
      </section>

    </main>
  );
}