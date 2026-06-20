import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-slate-900 to-blue-950 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-blue-400 text-lg mb-4"
        >
          Full Stack Developer • CSE Student
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-bold text-white leading-tight"
        >
          Hi, I'm{" "}
          <span className="text-blue-500">
            Nitin Meena
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-300 text-xl max-w-3xl mx-auto mt-8"
        >
          Passionate Computer Science student building
          modern full-stack web applications using React,
          Node.js, Express, MongoDB and JavaScript.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 border border-white/20 text-white rounded-xl hover:bg-white/10 transition"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;