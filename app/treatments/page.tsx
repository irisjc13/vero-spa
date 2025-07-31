"use client"

import { useEffect, useRef, useState } from "react"
import { faciales, corporales, sectionDescriptions } from "@/data/treatments"
import TreatmentCard from "@/components/TreatmentCard"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function TreatmentsPage() {
  const [showAllFacial, setShowAllFacial] = useState(false)
  const [openedSection, setOpenedSection] = useState<string | null>(null)

  const facialRef = useRef<HTMLDivElement | null>(null)
  const corporalRef = useRef<HTMLDivElement | null>(null)

  const visibleFacial = showAllFacial ? faciales : faciales.slice(0, 3)
  const visibleCorporal = corporales

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    const node = ref.current
    if (!node) return
    const offset = node.getBoundingClientRect().top + window.scrollY - 100
    window.scrollTo({ top: offset, behavior: "smooth" })
  }

  // Scroll on section toggle
  useEffect(() => {
    if (openedSection === "faciales") {
      scrollToRef(facialRef)
    } else if (openedSection === "corporales") {
      // Wait for the DOM to render the content before scrolling
      setTimeout(() => scrollToRef(corporalRef), 100)
    }
  }, [openedSection])

  // Scroll again after "Ver más"
  useEffect(() => {
    if (openedSection === "faciales" && showAllFacial) {
      setTimeout(() => scrollToRef(facialRef), 100)
    }
  }, [showAllFacial])

  return (
    <div className="px-4 sm:px-8 lg:px-24 py-12 w-full max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-playfair text-brand-purple mb-10">Tratamientos</h1>

      <Accordion
        type="multiple"
        className="w-full space-y-6"
        onValueChange={(value: string[]) => {
          if (value.includes("faciales")) setOpenedSection("faciales")
          else if (value.includes("corporales")) setOpenedSection("corporales")
          else setOpenedSection(null)
        }}
      >
        {/* FACIALES */}
        <AccordionItem value="faciales">
          <div ref={facialRef}>
            <AccordionTrigger className="flex items-center justify-between w-full px-4 py-3 bg-white/90 rounded-lg shadow-sm hover:bg-brand-lavender/10 transition-all text-brand-purple font-playfair text-lg">
              Faciales
            </AccordionTrigger>
          </div>
          <AccordionContent>
            <div className="flex flex-col gap-4 max-h-[75vh] overflow-y-auto pr-2 scrollbar-hide">
              <p className="text-sm mb-2 text-gray-700 max-w-3xl">{sectionDescriptions.faciales}</p>
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {visibleFacial.map((treatment, idx) => (
                  <div
                    key={idx}
                    className="animate-fade-in"
                    style={{ animationDelay: `${idx * 80}ms` }}
                  >
                    <TreatmentCard
                      title={treatment.title}
                      description={treatment.description}
                      images={treatment.images}
                    />
                  </div>
                ))}
              </div>
              <div className="text-center">
                <button
                  onClick={() => setShowAllFacial(!showAllFacial)}
                  className="text-sm text-brand-purple underline hover:text-brand-purple-dark"
                >
                  {showAllFacial ? "Ver menos tratamientos" : "Ver más tratamientos"}
                </button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* CORPORALES */}
        <AccordionItem value="corporales">
          <div ref={corporalRef}>
            <AccordionTrigger className="flex items-center justify-between w-full px-4 py-3 bg-white/90 rounded-lg shadow-sm hover:bg-brand-lavender/10 transition-all text-brand-purple font-playfair text-lg">
              Corporales
            </AccordionTrigger>
          </div>
          <AccordionContent>
            <div className="flex flex-col gap-4 max-h-[75vh] overflow-y-auto pr-2 scrollbar-hide">
              <p className="text-sm mb-2 text-gray-700 max-w-3xl">{sectionDescriptions.corporales}</p>
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {visibleCorporal.map((treatment, idx) => (
                  <div
                    key={idx}
                    className="animate-fade-in"
                    style={{ animationDelay: `${idx * 80}ms` }}
                  >
                    <TreatmentCard
                      title={treatment.title}
                      description={treatment.description}
                      images={treatment.images}
                    />
                  </div>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
