"use client"

import Link from "next/link"
import { Logo } from "@/components/brand/Logo"
import { cn } from "@/lib/utils"

export const Footer = () => {
  return (
    <footer className="border-t bg-card">
      <div className="container grid gap-8 py-12 md:grid-cols-4">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-8 w-8" />
            <span className="text-lg font-semibold">Studio Starum</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Innovatieve oplossingen voor moderne bureaus
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-semibold">Navigatie</h3>
          <nav className="flex flex-col space-y-1">
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
              Home
            </Link>
            <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
              Diensten
            </Link>
            <Link href="/pricing" className="text-sm text-muted-foreground hover:text-primary">
              Prijzen
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-semibold">Contact</h3>
          <div className="text-sm text-muted-foreground">
            <p>Alphen aan den Rijn</p>
            <p>Email: info@studiostarum.nl</p>
            <p>Tel: +31 123 456 789</p>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-semibold">Social Media</h3>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Twitter
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              LinkedIn
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Instagram
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t py-4">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Studio Starum. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  )
} 