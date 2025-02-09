"use client"

import { motion } from "framer-motion"
import { Logo } from "@/components/brand/Logo"

export default function Home() {
  return (
    <div className="relative w-full h-svh overflow-hidden bg-black flex items-center justify-center">
      <motion.div
        className="relative w-full max-w-md mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="text-white">
          <div className="space-y-6">
            {/* Logo and Title */}
            <div className="space-y-4 text-center">
              <motion.div
                role="heading"
                aria-level={1}
                layoutId="logo"
                className="mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1.5, ease: "easeOut" } }}
              >
                <Logo aria-label="Studio Starum Logo" className="w-16 mx-auto aspect-square text-white" />
              </motion.div>
              <p className="opacity-50 text-2xl font-light">
                Coming soon.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
