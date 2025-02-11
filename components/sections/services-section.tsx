"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

type ServiceItem = {
  title: string
  description: string
  image: string
}

type ServicesSectionProps = {
  services: ServiceItem[]
  className?: string
}

export const ServicesSection = ({ services, className }: ServicesSectionProps) => {
  return (
    <section className={cn("py-20 bg-background", className)}>
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
              <h3 className="text-3xl font-bold">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 