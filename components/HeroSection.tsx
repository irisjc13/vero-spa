export default function HeroSection() {
  return (
    <>
      {/* MOBILE/TABLET VERSION (< lg) */}
      <section className="lg:hidden">
        <div className="text-center px-4 py-8 sm:py-12">
          <div className="max-w-4xl mx-auto">
            {/* Trust Indicator */}
            <div className="mb-6">
              <span className="inline-flex items-center bg-gradient-to-r from-brand-purple/10 to-brand-lavender/10 text-brand-purple text-sm font-medium px-4 py-2 rounded-full border border-brand-purple/20">
                <svg className="w-4 h-4 mr-2 text-brand-lavender" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Certificada profesionalmente
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-brand-purple leading-[0.95] tracking-[-0.02em] font-playfair mb-6">
              Belleza y
              <br />
              <span className="bg-gradient-to-r from-brand-purple to-brand-lavender bg-clip-text text-transparent">
                bienestar
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-brand-purple/80 max-w-2xl mx-auto leading-relaxed mb-8">
              Especialista en cosmetología y tratamientos estéticos faciales y corporales
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="group inline-flex items-center justify-center bg-brand-purple hover:bg-brand-lavender text-brand-cream font-semibold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation min-h-[56px]"
              >
                <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8a1 1 0 011-1h3z"/>
                </svg>
                Agenda tu consulta
              </a>
              
              <a 
                href="/treatments" 
                className="group inline-flex items-center justify-center bg-transparent hover:bg-brand-purple/5 text-brand-purple font-medium text-base px-8 py-4 rounded-full border-2 border-brand-purple/20 hover:border-brand-purple/40 transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation min-h-[56px]"
              >
                <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Ver tratamientos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DESKTOP VERSION (lg+) - Original Layout */}
      <section className="hidden lg:flex flex-col lg:flex-row lg:items-start justify-between pt-6 lg:pt-10 mb-8">
        <div className="max-w-[720px]">
          <h1 className="text-6xl lg:text-[96px] font-light text-brand-purple leading-[0.95] tracking-[-0.02em] font-playfair">
            Belleza y<span className="inline lg:hidden"> </span>
            <br className="hidden lg:block" />
            <span className="lg:leading-[0.9] inline-block mt-1">bienestar</span>
          </h1>
          <div className="mt-6">
            <span className="bg-brand-purple/10 text-brand-purple text-xs font-medium px-4 py-2.5 rounded-full inline-block tracking-[0.06em] uppercase border border-brand-purple/20">
              Especialista en cosmetología y tratamientos estéticos faciales y corporales
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
