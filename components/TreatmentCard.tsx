"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface TreatmentCardProps {
  title: string
  description?: string
  images: string[]
  compact?: boolean
}

export default function TreatmentCard({ title, description, images, compact = false }: TreatmentCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length)
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 overflow-hidden w-full relative animate-fade-in">
      {/* Image Carousel */}
      <div className={`relative w-full ${compact ? 'h-32 min-h-[120px]' : 'h-56 min-h-[240px]'}`}>
        <Image
          src={`/${images[currentImageIndex]}`}
          alt={`${title} image`}
          fill
          className="object-cover transition-opacity duration-500 ease-in-out"
          sizes="(max-width: 768px) 100vw, 400px"
        />

        {/* Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 rounded-full shadow transition-all duration-200"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-4 h-4 text-brand-purple" />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 rounded-full shadow transition-all duration-200"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-4 h-4 text-brand-purple" />
            </button>
          </>
        )}
      </div>

      {/* Content */}
      <div className={compact ? "p-2" : "p-3"}>
        <h3 className="text-base font-semibold text-brand-purple truncate">{title}</h3>
        {description && !compact && <p className="text-xs text-gray-600 mt-1 line-clamp-2">{description}</p>}
      </div>
    </div>
  )
}