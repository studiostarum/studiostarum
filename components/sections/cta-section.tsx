"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type CTASectionProps = {
  title: string
  description: string
  children?: ReactNode
  variant?: "default" | "primary" | "secondary"
  className?: string
}

export const CTASection = ({
  title,
  description,
  children,
  variant = "default",
  className
}: CTASectionProps) => {
  const variantClasses = {
    default: "bg-background text-foreground",
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground"
  }

  return (
    <section className={cn(
      "py-32",
      variantClasses[variant],
      className
    )}>
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-7xl mb-6">
          {title}
        </h2>
        <p className={cn(
          "mb-8",
          variant === "default" ? "text-foreground" : "text-background/60"
        )}>
          {description}
        </p>
        {children || (
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="naam@email.com"
              className={cn(
                "flex-1",
                variant !== "default" && "bg-background/10 backdrop-blur-sm"
              )}
            />
            <Button
              variant={variant === "default" ? "default" : "secondary"}
              className="w-full sm:w-auto"
            >
              Vraag een offerte aan
            </Button>
          </div>
        )}
        <p className="text-muted-foreground text-sm mt-3">
          We nemen binnen 24 uur contact met je op.
        </p>
      </div>
    </section>
  )
} 