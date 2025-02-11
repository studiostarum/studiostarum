"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/brand/Logo"
import { cn } from "@/lib/utils"

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-8 w-8" />
            <span className="text-lg font-semibold">Studio Starum</span>
          </Link>
          <div className="hidden md:flex items-center gap-4 text-sm font-medium">
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
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" asChild>
            <Link href="/login">Inloggen</Link>
          </Button>
          <Button asChild>
            <Link href="/contact">Neem contact op</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
} 