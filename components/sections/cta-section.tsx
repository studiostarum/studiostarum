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
      "py-20",
      variantClasses[variant],
      className
    )}>
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">
          {title}
        </h2>
        <p className={cn(
          "mb-8",
          variant === "default" ? "text-muted-foreground" : "text-opacity-80"
        )}>
          {description}
        </p>
        {children || (
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className={cn(
                "flex-1",
                variant !== "default" && "bg-background/10 backdrop-blur-sm"
              )}
            />
            <Button
              variant={variant === "default" ? "default" : "secondary"}
              className="w-full sm:w-auto"
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </section>
  )
} 