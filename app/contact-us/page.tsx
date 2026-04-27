'use client';

import { useState } from "react";

const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [success, setSuccess] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = () => {
    setSuccess(true);
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <div className="bg-[#111] text-white">
      {/* HERO */}
      <section className="text-center px-6 md:px-20 py-20 bg-gradient-to-br from-[#1a1a1a] via-[#111] to-[#1c0e00] border-b border-[#2a2a2a]">
        <span className="text-orange-500 text-xs tracking-widest font-bold uppercase block mb-3">
          Contact Us
        </span>
        <h1 className="font-bebas text-4xl md:text-6xl tracking-wider mb-4">
          Get In <span className="text-orange-500">Touch</span> With Us
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Have any questions about our services? We are here to help you start or continue your fitness journey.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section className="grid md:grid-cols-2 gap-10 px-6 md:px-20 py-16 border-b border-[#2a2a2a]">

        {/* FORM */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
          <p className="text-gray-400 mb-6">We’ll get back to you as soon as possible.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input className="input" placeholder="Full Name" />
            <input className="input" placeholder="Email" />
          </div>

          <input className="input mb-4" placeholder="Phone Number" />

          <select title="membership" name="membership" className="input mb-4">
            <option>Select subject</option>
            <option>Membership Inquiry</option>
            <option>Personal Training</option>
          </select>

          <textarea className="input mb-4 min-h-30" placeholder="Message"></textarea>

          <button onClick={handleSubmit} className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded font-bold">
            Send Now
          </button>

          {success && (
            <div className="mt-4 border border-orange-500 text-orange-500 p-3 rounded text-center">
              ✅ Message sent!
            </div>
          )}
        </div>

        {/* INFO */}
        <div>
          <span className="text-orange-500 text-xs tracking-widest uppercase block mb-2">
            Contact Info
          </span>
          <h2 className="text-2xl font-bold mb-4">We’re Always Here</h2>

          <div className="space-y-4">

            <div className="info-card">
              <span>📍</span>
              <div>
                <h4>Location</h4>
                <p>Ipaja, Lagos</p>
              </div>
            </div>

            <div className="info-card">
              <span>📞</span>
              <div>
                <h4>Phone</h4>
                <a href="tel:+2349057408774">+234 905 740 8774</a>
              </div>
            </div>

            <div className="info-card">
              <span>✉️</span>
              <div>
                <h4>Email</h4>
                <a href="mailto:info@greathoney2fitness.com">info@greathoney2fitness.com</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#1a1a1a] px-6 md:px-20 py-16">
        <h2 className="text-center text-3xl font-bold mb-10">
          Frequently Asked <span className="text-orange-500">Questions</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">

          {[
            "How do I register?",
            "What is the registration fee?",
            "Can I try before committing?",
            "Do you offer personal training?"
          ].map((q, i) => (
            <div key={i} className="border border-[#2a2a2a] rounded">
              <button
                onClick={() => toggleFaq(i)}
                className="w-full text-left p-4 flex justify-between items-center"
              >
                {q}
                <span className={`transition ${openFaq === i ? "rotate-45 text-orange-500" : ""}`}>+</span>
              </button>

              {openFaq === i && (
                <div className="p-4 text-gray-400">
                  Sample answer content goes here.
                </div>
              )}
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6">
        <h2 className="font-bebas text-4xl mb-4">READY TO GROW?</h2>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          Start your fitness journey today.
        </p>
        <button className="bg-orange-500 px-8 py-3 rounded-full font-bold hover:bg-orange-600">
          Get Started
        </button>
      </section>

      {/* Tailwind Reusable Styles */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 0.75rem 1rem;
          background: #1a1a1a;
          border: 1px solid #2a2a2a;
          border-radius: 8px;
          color: white;
          outline: none;
        }
        .input:focus {
          border-color: #f97316;
        }
        .info-card {
          display: flex;
          gap: 1rem;
          padding: 1rem;
          border: 1px solid #2a2a2a;
          border-radius: 10px;
          background: #1a1a1a;
        }
        .info-card h4 {
          color: #f97316;
          font-size: 0.85rem;
          text-transform: uppercase;
        }
      `}</style>

    </div>
  );
};

export default ContactPage;