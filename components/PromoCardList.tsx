import { PromoCard } from "@/components/promo-card"
import { Sparkles, Scissors, Calendar } from 'lucide-react'

export default function PromoCardList() {
  return (
    <>
      {/* MOBILE/TABLET VERSION (< lg) - Modern Vertical Layout */}
      <div className="lg:hidden">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-playfair font-semibold text-brand-purple mb-2 text-center">
            Nuestros Tratamientos
          </h2>
          <p className="text-brand-purple/70 text-center mb-8 max-w-2xl mx-auto">
            Descubre nuestros tratamientos especializados diseñados para realzar tu belleza natural
          </p>
        </div>
        
        <div className="space-y-4">
          <PromoCard 
            title="Tratamientos Faciales"
            description="Limpieza profunda, hidratación, rejuvenecimiento facial, mascarillas especializadas y cuidado personalizado de la piel."
            variant="light"
            icon={Sparkles}
            href="/treatments"
          />
          <PromoCard 
            title="Tratamientos Corporales"
            description="Masajes reductores, tratamientos anticelulíticos, exfoliación corporal y terapias de relajación personalizadas."
            variant="medium"
            icon={Scissors}
            href="/treatments"
          />
          <PromoCard
            title="Consulta y Evaluación"
            description="Agenda una cita para una evaluación personalizada y plan de tratamiento estético adaptado a tus necesidades."
            variant="dark"
            icon={Calendar}
            href="/contact"
          />
        </div>
      </div>

      {/* DESKTOP VERSION (lg+) - Original Absolute Positioning */}
      <div className="hidden lg:block absolute bottom-2.5 left-0 right-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-6">
          <PromoCard 
            title="Tratamientos Faciales"
            description="Limpieza profunda, hidratación, rejuvenecimiento facial, mascarillas especializadas y cuidado personalizado de la piel."
            variant="light"
            icon={Sparkles}
            href="/treatments"
          />
          <PromoCard 
            title="Tratamientos Corporales"
            description="Masajes reductores, tratamientos anticelulíticos, exfoliación corporal y terapias de relajación personalizadas."
            variant="medium"
            icon={Scissors}
            href="/treatments"
          />
          <PromoCard
            title="Consulta y Evaluación"
            description="Agenda una cita para una evaluación personalizada y plan de tratamiento estético adaptado a tus necesidades."
            variant="dark"
            icon={Calendar}
            href="/contact"
          />
        </div>
      </div>
    </>
  )
}