import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-950 text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2 className="text-5xl font-bold mb-12 text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            <div>
              <h3 className="text-3xl font-semibold mb-6 text-cyan-400">
                Who I Am
              </h3>

              <p className="text-slate-400 leading-8 text-lg">
                I am a B.Tech Computer Science student passionate about
                Full Stack Development, Web Technologies, and Software
                Engineering.

                My goal is to build modern applications and continuously
                improve my technical skills while preparing for a
                successful career in technology.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-slate-900 p-6 rounded-2xl">
                <h4 className="text-cyan-400 mb-2">Degree</h4>
                <p>B.Tech CSE</p>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl">
                <h4 className="text-cyan-400 mb-2">Location</h4>
                <p>Kota, Rajasthan, India</p>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl">
                <h4 className="text-cyan-400 mb-2">Interest</h4>
                <p>Web Development</p>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl">
                <h4 className="text-cyan-400 mb-2">Goal</h4>
                <p>Software Engineer</p>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;