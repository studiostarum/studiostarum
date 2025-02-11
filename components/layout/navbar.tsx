"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/brand/Logo"
import { cn } from "@/lib/utils"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { setTheme, theme } = useTheme()

  // Prevent scrolling and account for scrollbar width
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden')
      document.body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      document.body.classList.remove('overflow-hidden')
      document.body.style.paddingRight = '0'
    }

    // Cleanup function
    return () => {
      document.body.classList.remove('overflow-hidden')
      document.body.style.paddingRight = '0'
    }
  }, [isMobileMenuOpen])

  // Theme mounting effect
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const mobileMenuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 }
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between relative z-50">
          <Link href="/" className="flex items-center gap-2" aria-label="Studio Starum">
            <Logo className="h-8 w-8" />
            <span className="sr-only">Studio Starum</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/services" className="hover:text-primary transition-colors">
                Diensten
              </Link>
              <Link href="/pricing" className="hover:text-primary transition-colors">
                Prijzen
              </Link>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleToggleTheme}
              aria-label="Toggle theme"
              className="ml-2"
            >
              {!mounted ? (
                <div className="h-5 w-5" />
              ) : theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleToggleMobileMenu}
              aria-label="Toggle menu"
              className="md:hidden"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 md:hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-40"
            >
              <div className="absolute bg-background inset-0 flex flex-col items-center justify-center h-screen gap-8">
                <Link 
                  href="/" 
                  className="text-4xl font-medium hover:text-primary transition-colors" 
                  onClick={handleToggleMobileMenu}
                >
                  Home
                </Link>
                <Link 
                  href="/services" 
                  className="text-4xl font-medium hover:text-primary transition-colors" 
                  onClick={handleToggleMobileMenu}
                >
                  Diensten
                </Link>
                <Link 
                  href="/pricing" 
                  className="text-4xl font-medium hover:text-primary transition-colors" 
                  onClick={handleToggleMobileMenu}
                >
                  Prijzen
                </Link>
                <Link 
                  href="/contact" 
                  className="text-4xl font-medium hover:text-primary transition-colors" 
                  onClick={handleToggleMobileMenu}
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
} 