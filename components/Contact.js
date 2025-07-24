"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    const res = await fetch("https://formspree.io/f/xyzpelky", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    })

    const result = await res.json()

    if (res.ok && result?.ok !== false) {
      alert("✅ Message sent successfully!")
      setFormData({ name: "", email: "", message: "" })
    } else {
      alert("❌ Failed to send message. Please try again.")
    }
  } catch (err) {
    console.error("Form submission error:", err)
    alert("❌ An error occurred. Please try again.")
  }
}

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "biswash1389@gmail.com",
      href: "mailto:biswash1389@gmail.com",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "github.com/Biswash908",
      href: "https://github.com/Biswash908",
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Boudha, Kathmandu",
      href: "https://maps.app.goo.gl/7dsBu4sxrkfi6v4z9",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section id="contact" className="py-20 section-bg">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold font-poppins gradient-text mb-4">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-skin-muted max-w-2xl mx-auto">
              Want to connect or collaborate? I'm open to new opportunities and always excited to work on interesting projects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center space-x-4 glass-card p-6 card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-skin-heading font-poppins">{item.label}</h3>
                    <p className="text-skin-muted">{item.value}</p>
                  </div>
                  <svg className="w-5 h-5 text-skin-muted group-hover:text-blue-500 transition-colors duration-300 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-bold text-skin-heading mb-6 font-poppins">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {["name", "email", "message"].map((field, idx) => (
                  <div key={idx}>
                    <label htmlFor={field} className="block text-sm font-medium text-skin-muted mb-2 capitalize">
                      {field}
                    </label>
                    {field !== "message" ? (
                      <input
                        type={field === "email" ? "email" : "text"}
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl text-skin-base shadow-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder={`Your ${field}`}
                      />
                    ) : (
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                          className="w-full px-4 py-3 rounded-xl text-skin-base shadow-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    )}
                  </div>
                ))}
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
