import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <h2 className="text-4xl font-bold text-center text-teal-400 mb-8">Contact Me</h2>
      <form className="max-w-xl mx-auto space-y-6">
        <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700" />
        <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700" />
        <textarea placeholder="Your Message" className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700" rows="5" />
        <button type="submit" className="bg-teal-500 px-6 py-3 rounded text-white font-semibold hover:bg-teal-400 transition">Send</button>
      </form>
    </div>
  );
}
