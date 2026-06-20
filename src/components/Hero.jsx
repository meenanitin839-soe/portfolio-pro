import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left max-w-2xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm <span className="text-cyan-400">Nitin Meena</span>
        </h1>

        <div className="mb-6">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "React Developer",
              2000,
              "Node.js Developer",
              2000,
              "MongoDB Enthusiast",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-cyan-400 text-2xl md:text-3xl font-semibold"
          />
        </div>

        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          Passionate about building modern web applications using React,
          Node.js, Express and MongoDB. Currently pursuing B.Tech CSE and
          continuously improving my development skills through real-world
          projects.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Download Resume
          </a>

          <a
            href="https://github.com/meenanitin839-soe"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-105"
          >
            GitHub
          </a>
        </div>

        {/* Stats Cards */}
        <div className="mt-10 grid grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl text-center border border-white/10">
            <h3 className="text-2xl font-bold text-cyan-400">5+</h3>
            <p className="text-gray-300">Projects</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl text-center border border-white/10">
            <h3 className="text-2xl font-bold text-cyan-400">10+</h3>
            <p className="text-gray-300">Skills</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl text-center border border-white/10">
            <h3 className="text-2xl font-bold text-cyan-400">100%</h3>
            <p className="text-gray-300">Dedication</p>
          </div>
        </div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full animate-pulse bg-cyan-500 blur-3xl opacity-30"></div>

          <img
            src="/profile.jpg"
            alt="Nitin Meena"
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.6)] hover:scale-105 transition duration-300"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;