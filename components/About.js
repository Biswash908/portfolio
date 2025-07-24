"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  const skills = [
    {
      icon: "💻",
      title: "Development",
      description: "React Native, TypeScript, JavaScript, Python",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🎨",
      title: "Design",
      description: "Photoshop, Illustrator, Figma, UI/UX",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "🤝",
      title: "Virtual Assistant",
      description: "Excel, Word, Document Formatting",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: "🎓",
      title: "Education",
      description: "BCA at Xavier International Academy",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold font-poppins gradient-text mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="glass-card p-8">
                <div className="space-y-6 text-lg leading-relaxed text-skin-base">
                  <p>
                    I'm a <span className="font-semibold gradient-text">creative designer turned developer</span> with a
                    background in Photoshop and UI/UX design. Skilled in developing cross-platform mobile apps using
                    React Native and TypeScript.
                  </p>
                  <p>
                    Also experienced in virtual assistant work handling Excel, Word, and design tools. I'm able to
                    contribute at multiple stages of product development from{" "}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">design to deployment</span>.
                  </p>
                  <p>
                    Currently pursuing a Bachelor's in Computer Applications at{" "}
                    <span className="font-semibold text-purple-600 dark:text-purple-400">
                      Xavier International Academy
                    </span>{" "}
                    in Kathmandu.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="glass-card p-6 text-center card-hover"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl shadow-lg`}
                  >
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-skin-heading mb-2 font-poppins">{skill.title}</h3>
                  <p className="text-sm text-skin-muted">{skill.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
