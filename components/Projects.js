"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const projects = [
    {
      name: "Cat Feeding App",
      description:
        "A React Native mobile application for managing cat feeding schedules and nutrition tracking. Built as part of pet care solution suite.",
      url: "https://play.google.com/store/apps/details?id=com.MakeThingsUnlimited.CatCalc&pli=1",
      github: "https://github.com/Biswash908/Batch-Planner.git",
      icon: "🐱",
      color: "from-green-500 to-teal-500",
      tags: ["React Native", "TypeScript", "Mobile"],
    },
    {
      name: "Finance Tracker",
      description:
        "A budgeting application currently in development to help users track expenses, set financial goals, and manage personal finances effectively.",
      url: "https://github.com/Biswash908/FinanceTracker.git",
      github: "https://github.com/Biswash908/FinanceTracker.git",
      icon: "💰",
      color: "from-orange-500 to-red-500",
      tags: ["React Native", "TypeScript", "In Progress"],
    },
  ]

  return (
    <section id="projects" className="py-20 section-bg">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold font-poppins gradient-text mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-skin-muted max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in development and design.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="group"
              >
                <div className="glass-card p-8 card-hover h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center text-2xl shadow-md text-white dark:text-white`}
                    >
                      {project.icon}
                    </div>
                    <div className="flex space-x-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white text-black dark:bg-gray-700/70 dark:text-white shadow-md dark:shadow-white/10 transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </motion.a>
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white text-black dark:bg-gray-700/70 dark:text-white shadow-md dark:shadow-white/10 transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </motion.a>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-skin-heading mb-3 font-poppins">{project.name}</h3>

                  <p className="text-skin-muted mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium text-black dark:text-white bg-white dark:bg-gray-700 rounded-full shadow-sm border border-gray-200 dark:border-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
