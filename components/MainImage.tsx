import Image from 'next/image'

export default function MainImage() {
  return (
    <>
      {/* MOBILE/TABLET VERSION (< lg) */}
      <div className="lg:hidden w-full max-w-6xl mx-auto">
        {/* Modern responsive image container */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[20/9] rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-brand-purple/5 to-brand-lavender/5 shadow-lg hover:shadow-xl transition-all duration-300 group">
          <Image
            src="/main_image.jpg"
            alt="Verónica Cordoba - Cosmetología & Estética"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
          />
          
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/20 via-transparent to-transparent"></div>
          
          {/* Optional floating badge */}
          <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/90 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 sm:py-2.5 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-brand-purple text-xs sm:text-sm font-medium">Disponible</span>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP VERSION (lg+) - Original Layout */}
      <div className="hidden lg:block w-full h-[180px] lg:h-[250px] rounded-[40px] overflow-hidden bg-white shadow-lg">
        <Image
          src="/main_image.jpg"
          alt="Verónica Cordoba - Cosmetología & Estética"
          width={1400}
          height={250}
          className="w-full h-full object-cover"
          priority
          sizes="(max-width: 1400px) 100vw, 1400px"
        />
      </div>
    </>
  )
}