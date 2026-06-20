import { useState } from "react";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/contact",
        form
      );

      setStatus("✅ Message Sent Successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus("❌ Failed to Send Message");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-slate-900 via-blue-950 to-black"
    >
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 shadow-2xl">
        
        <h2 className="text-5xl font-bold text-white text-center mb-3">
          Contact Me
        </h2>

        <p className="text-gray-300 text-center mb-10">
          Have a project, internship opportunity, or collaboration idea?
          Let's connect.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full bg-gray-800/80 text-white placeholder-gray-400 border border-gray-600 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full bg-gray-800/80 text-white placeholder-gray-400 border border-gray-600 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full bg-gray-800/80 text-white placeholder-gray-400 border border-gray-600 p-4 rounded-xl resize-none focus:outline-none focus:border-blue-500 transition"
          />

          <button
            type="submit"
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition duration-300"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p className="text-center mt-6 text-green-400 font-medium">
            {status}
          </p>
        )}
      </div>
    </section>
  );
}

export default Contact;