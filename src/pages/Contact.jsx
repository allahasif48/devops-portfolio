import React, { useRef } from "react";

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    window.emailjs.sendForm(
      "service_8ua2m2f",     // from EmailJS dashboard
      "template_fliquop",    // from EmailJS dashboard
      formRef.current
    ).then(
      () => {
        alert("✅ Message sent successfully!");
        formRef.current.reset();
      },
      (error) => {
        alert("❌ Failed to send message.");
        console.error("Email error:", error);
      }
    );
  };

  return (
    <section className="py-16 px-6 bg-gray-900 text-white min-h-screen">
      <h2 className="text-3xl font-bold text-center text-teal-400 mb-8">Contact Me</h2>
      <form ref={formRef} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded bg-gray-800 text-white"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded bg-gray-800 text-white"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full p-3 rounded bg-gray-800 text-white"
        />
        <button
          type="submit"
          className="bg-teal-500 px-6 py-3 rounded hover:bg-teal-400 transition w-full"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
