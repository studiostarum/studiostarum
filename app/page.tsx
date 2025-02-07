"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export default function Home() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const darkGradient =
    "linear-gradient(90deg, rgba(14,6,245,0.2), rgba(204,243,10,0.2))"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/subscribers`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email })
        }
      )
      if (!response.ok) {
        throw new Error("Submission failed")
      }
      setIsSubmitted(true)
      setEmail("")
    } catch (error) {
      console.error("Error:", error)
      alert(
        "There was an error submitting your email. Please try again."
      )
    }
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Wave Animation */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: darkGradient,
          backgroundSize: "200% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0% 0%",
        }}
        animate={{ backgroundPosition: "100% 0%" }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Modal Content */}
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
              <motion.h1
                layoutId="logo"
                className="text-4xl font-bold tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1.5, ease: "easeOut" } }}
              >
                <img src="/logo.svg" alt="Studio Starum Logo" className="w-24 aspect-square mx-auto" />
              </motion.h1>
              <p className="opacity-50 text-2xl font-light">
                Coming soon.
              </p>
            </div>

            {/* Form (will be hidden for now)*/}
            {/* {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  required
                  className="w-full bg-white/10 border-white/20 placeholder:text-white/50 rounded-full hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50"
                  placeholder="account@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  type="submit"
                  className="w-full bg-secondary rounded-full hover:bg-secondary/70 text-black"
                >
                  Sign me up
                </Button>
              </form>
            ) : (
              <div className="text-center py-4">
                <p className="text-green-600 font-medium">
                  Thank you! We'll keep you posted.
                </p>
              </div>
            )} 
              
            <div className="text-xs text-center space-y-1">
              <p>
                By signing up, you agree to our{" "}
                <button className="text-secondary hover:text-secondary/70">
                  Terms
                </button>{" "}
                and{" "}
                <button className="text-secondary hover:text-secondary/70">
                  Privacy Policy
                </button>
              </p>
            </div>
             */}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
