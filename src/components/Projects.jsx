import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Modern portfolio website built using React, Tailwind CSS and Framer Motion.",
    tech: "React • Tailwind • Framer Motion",
    github: "#",
    demo: "#",
  },
  {
    title: "Student Management System",
    description:
      "Full Stack application for managing students, attendance and records.",
    tech: "React • Node.js • MongoDB",
    github: "#",
    demo: "#",
  },
  {
    title: "Weather App",
    description:
      "Real-time weather application using API integration.",
    tech: "React • API • CSS",
    github: "#",
    demo: "#",
  },
];

  function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Modern full-stack portfolio built with React, Node.js, Express and MongoDB.",
      github: "#",
      live: "#",
    },
    {
      title: "Resume Builder",
      description:
        "Generate professional resumes with modern templates and export options.",
      github: "#",
      live: "#",
    },
    {
      title: "Task Manager",
      description:
        "Full-stack task management app with authentication and database integration.",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-6">
                {project.description}
              </p>

              <div className="flex gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  Live Demo
                </a>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}



export default Projects;