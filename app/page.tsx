"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Logo } from "@/components/brand/Logo"
import { CTASection } from "@/components/sections/cta-section"
import { PricingCard } from "@/components/cards/pricing-card"
import { cn } from "@/lib/utils"
import Image from "next/image"

// Define pricing plans as objects
const pricingPlans = [
  {
    title: "Starter",
    description: "Voor kleine bureaus die net beginnen",
    price: "€499/maand",
    features: [
      "1 tot 2 projecten",
      "Telefoon en e-mail ondersteuning",
    ],
    variant: "default"
  },
  {
    title: "Pro",
    description: "Perfect voor groeiende bureaus.",
    price: "€999/maand",
    features: [
      "Alles uit het Starter pakket",
      "5-8 projecten",
      "Telefoon en e-mail ondersteuning",
    ],
    variant: "popular"
  },
  {
    title: "Enterprise",
    description: "Voor grote bureaus.",
    price: "Op aanvraag",
    features: [
      "Alles uit het Pro pakket",
      "5-8 projecten",
      "Telefoon en e-mail ondersteuning",
    ],
    variant: "default"
  }
]

// Define services data
const services = [
  {
    title: "Web Design & Development",
    description: "We create modern, responsive websites that are optimized for performance and user experience.",
    image: "https://kzmiyoox5y23pty1p1fb.lite.vusercontent.net/placeholder.svg"
  },
  {
    title: "E-commerce Solutions",
    description: "Build and optimize your online store with our custom e-commerce solutions.",
    image: "https://kzmiyoox5y23pty1p1fb.lite.vusercontent.net/placeholder.svg"
  },
  {
    title: "SEO & Digital Marketing",
    description: "Improve your online visibility and reach your target audience with our SEO and marketing strategies.",
    image: "https://kzmiyoox5y23pty1p1fb.lite.vusercontent.net/placeholder.svg"
  }
]

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="w-full h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mx-auto w-24 h-24">
              <Logo />
            </div>
            <h1>
              Verhoog de effectiviteit van jouw bureau
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Wij bieden innovatieve oplossingen en denken met je mee, zodat je bureau zich kan blijven richten op klanten en groei.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Neem contact op
              </Button>
              <Button size="lg" variant="outline">
                Meer informatie
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className={cn("py-20 bg-background")}>
        <div className="container max-w-7xl mx-auto px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col items-center gap-12 py-12 min-h-screen",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              <div className="flex-1">
                <div className="w-full overflow-hidden rounded-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={500}
                    className="object-cover w-full h-auto"
                  />
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <h3>{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outlineSecondary" className="mb-4">
              Abonnementen
            </Badge>
            <h2 className="mb-4">
              Wat past bij jouw situatie?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kies het abonnement dat het beste bij je bureau past. Geen verborgen kosten, geen verrassingen.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                description={plan.description}
                price={plan.price}
                features={plan.features}
                variant={plan.variant as "default" | "popular"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Klaar voor de start?"
        description="Laat ons weten hoe we je kunnen helpen om betere oplossingen te leveren aan je klanten."
        variant="primary"
      />
    </div>
  )
}
