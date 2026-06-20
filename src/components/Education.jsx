import { motion } from "framer-motion";

const educationData = [
  {
    year: "2021",
    title: "Class 10th",
    description: "Completed Secondary Education",
  },
  {
    year: "2023",
    title: "Class 12th",
    description: "Completed Senior Secondary Education",
  },
  {
    year: "2025 - Present",
    title: "B.Tech Computer Science",
    description: "Pursuing Bachelor of Technology in Computer Science and Engineering",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="min-h-screen bg-slate-900 text-white py-24"
    >
      <div className="max-w-5xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-20"
        >
          Education
        </motion.h2>

        <div className="relative border-l-4 border-cyan-500 ml-6">

          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-12 ml-8"
            >

              <div className="absolute w-5 h-5 bg-cyan-500 rounded-full -left-[11px]" />

              <span className="text-cyan-400 font-semibold">
                {item.year}
              </span>

              <h3 className="text-2xl font-bold mt-2">
                {item.title}
              </h3>

              <p className="text-slate-400 mt-2">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;