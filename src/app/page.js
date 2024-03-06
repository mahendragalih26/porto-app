"use client"

import { useEffect } from "react"

import { AnimatePresence } from "framer-motion"
import Preloader from "../components/Preloader"
import Landing from "../components/Landing"
import Description from "../components/Description"
import Projects from "../components/Projects"
import SlidingImages from "../components/SlidingImages"
import Contact from "../components/Contact"

export default function Home() {
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <Landing />

      <Description />

      <Projects />

      <SlidingImages />

      <Contact />
    </main>
  )
}
