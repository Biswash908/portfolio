"use client"

import "../styles/globals.css"
import { useEffect } from "react"

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Initialize theme on app load
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  return <Component {...pageProps} />
}
