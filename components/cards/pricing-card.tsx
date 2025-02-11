"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

type PricingCardProps = {
  title: string
  description: string
  price: string
  features: string[]
  variant?: "default" | "popular"
  className?: string
}

export const PricingCard = ({
  title,
  description,
  price,
  features,
  variant = "default",
  className
}: PricingCardProps) => {
  return (
    <Card className={cn(
      "hover:shadow-lg transition-shadow",
      variant === "popular" && "border-primary relative overflow-hidden",
      className
    )}>
      {variant === "popular" && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium rounded-bl-lg">
          Meest gekozen
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold mb-4">
          {price}
        </div>
        <ul className="space-y-3 text-muted-foreground">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          variant={variant === "popular" ? "default" : "outline"}
        >
          {variant === "popular" ? "Kies abonnement" : "Start abonnement"}
        </Button>
      </CardFooter>
    </Card>
  )
} 