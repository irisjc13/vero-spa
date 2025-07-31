import HeroSection from "@/components/HeroSection"
import MainImage from "@/components/MainImage"
import PromoCardList from "@/components/PromoCardList"
import { PracticeHours } from "@/components/practice-hours"
import ValueCards from "@/components/ValueCards"

export default function MainSection() {
  return (
    <>
      {/* MOBILE/TABLET VERSION (< lg) */}
      <main className="lg:hidden flex-1 flex flex-col bg-brand-cream">
        <HeroSection />
        
        {/* Main Image - Mobile */}
        <div className="px-4 sm:px-6 mb-8">
          <MainImage />
        </div>
        
        {/* Promo Cards - Mobile Vertical Layout */}
        <div className="px-4 sm:px-6 mb-8">
          <PromoCardList />
        </div>
        
        {/* Practice Hours - Mobile */}
        <div className="px-4 sm:px-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <h3 className="text-xl font-playfair font-semibold text-brand-purple mb-4">
              Horarios de Atención
            </h3>
            <PracticeHours />
          </div>
        </div>
        
        {/* Value Cards - Mobile */}
        <div className="px-4 sm:px-6 pb-8">
          <ValueCards />
        </div>
      </main>

      {/* DESKTOP VERSION (lg+) - Original Layout */}
      <main className="hidden lg:flex flex-1 flex-col px-6 lg:px-12 pb-4 bg-brand-cream overflow-hidden">
        <div className="max-w-[1400px] w-full mx-auto flex flex-col flex-1">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between pt-3 lg:pt-4 mb-4">
            <HeroSection />
            <div className="mt-2 lg:mt-[-20px]">
              <PracticeHours />
            </div>
          </div>

          <div className="relative flex-1 -mt-4 lg:-mt-8">
            <MainImage />
            <PromoCardList />
          </div>
        </div>
      </main>
    </>
  )
}