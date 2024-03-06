"use client"

import { useEffect, useState } from "react"

import { AnimatePresence } from "framer-motion"
import Preloader from "../components/Preloader"
import Header from "../components/Header"
import Landing from "../components/Landing"
import Description from "../components/Description"
import Projects from "../components/Projects"
import SlidingImages from "../components/SlidingImages"
import Contact from "../components/Contact"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {(async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default
      const locomotiveScroll = new LocomotiveScroll()

      setTimeout(() => {
        setIsLoading(false)
        document.body.style.cursor = "default"
        window.scrollTo(0, 0)
      }, 2000)

      
    })()
  }, [])

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Header />

      <Landing />

      <Description />

      <Projects />

      <SlidingImages />

      <Contact />
    </main>
  )
}
