import Head from "next/head"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <>
      <Head>
        <title>Bishwas Timalsina - Developer & Designer Portfolio</title>
        <meta
          name="description"
          content="Creative designer turned developer crafting cross-platform mobile apps and clean UIs. Based in Boudha, Kathmandu."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="React Native Developer, UI/UX Designer, Mobile App Developer, Kathmandu, Nepal"
        />
        <meta name="author" content="Bishwas Timalsina" />

        {/* Open Graph */}
        <meta property="og:title" content="Bishwas Timalsina - Developer & Designer Portfolio" />
        <meta
          property="og:description"
          content="Creative designer turned developer crafting cross-platform mobile apps and clean UIs."
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bishwas Timalsina - Developer & Designer Portfolio" />
        <meta
          name="twitter:description"
          content="Creative designer turned developer crafting cross-platform mobile apps and clean UIs."
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen transition-all duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="relative section-bg py-12 border-t border-gray-200 dark:border-gray-700/40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">BT</span>
                </div>
                <span className="text-xl font-bold font-poppins gradient-text">Bishwas Timalsina</span>
              </div>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                © {new Date().getFullYear()} Bishwas Timalsina. Crafted with passion and code.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Biswash908"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700/60 hover:bg-gray-300 dark:hover:bg-gray-600/60 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="mailto:biswash1389@gmail.com"
                  className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700/60 hover:bg-gray-300 dark:hover:bg-gray-600/60 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
