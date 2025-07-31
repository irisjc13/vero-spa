import ValueCards from "@/components/ValueCards"
import Image from "next/image"

export default function AboutMePage() {
  return (
    <section className="bg-brand-cream text-brand-purple py-4 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl lg:text-3xl font-playfair font-semibold mb-2">Sobre Mí</h1>
          <p className="text-sm text-brand-purple/80">
            Conoce más sobre mi historia, valores y enfoque profesional.
          </p>
          <div className="w-16 h-1 mt-2 bg-brand-lavender mx-auto rounded-full"></div>
        </div>

        {/* About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
          <div className="flex justify-center">
            <Image
              src="/aboutme_image.png"
              alt="Verónica Cordoba"
              width={280}
              height={280}
              className="rounded-2xl shadow-[0_10px_25px_-5px_rgba(175,142,199,0.4)] object-cover"
            />
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-playfair font-semibold mb-2">Verónica Córdoba</h2>
            <p className="text-sm leading-relaxed">
              ¡Hola! Soy Verónica Córdoba, cosmetóloga y esteticista enfocada en el bienestar integral y el cuidado consciente de la piel y el cuerpo. Trabajo en un ambiente armonioso, lleno de buena energía, donde cada detalle está pensado para que vivas una experiencia de atención personalizada.
            </p>
            <p className="text-sm leading-relaxed">
              Ofrezco tratamientos faciales, masajes relajantes, terapias corporales y depilación con cera, utilizando productos de calidad y técnicas seguras, con un enfoque que une estética, salud y conexión personal.
            </p>
            <p className="text-sm leading-relaxed">
              Creo que el cuidado de la piel va más allá de lo estético: es un acto de amor propio, de respeto por ti y por tu bienestar. Mi propósito es ayudarte a reconectar contigo, a sentirte bien en tu piel y a descubrir la belleza que nace del equilibrio y el autocuidado.
            </p>
          </div>
        </div>

        {/* Value Cards Section */}
        <div className="bg-brand-lavender/10 py-4 rounded-2xl text-center">
          <h3 className="text-lg font-playfair font-semibold mb-4">Mis Valores</h3>
          <div className="max-w-4xl mx-auto">
            <ValueCards />
            <p className="mt-4 italic text-brand-purple/70 text-center text-sm">"Nos guiamos por estos principios en cada tratamiento."</p>
          </div>
        </div>
      </div>
    </section>
  )
}
