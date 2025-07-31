export interface Treatment {
  title: string;
  description?: string;
  images: string[];
}

export const faciales: Treatment[] = [
  {
    title: "Limpieza facial profunda",
    description: "Elimina impurezas, células muertas y exceso de grasa para una piel limpia y saludable.",
    images: ["treatment-photos/limpieza-1.jpg", "treatment-photos/limpieza-2.jpg", "treatment-photos/limpieza-3.jpg"]
  },
  {
    title: "Hidratación facial intensiva",
    description: "Restablece el equilibrio hídrico de la piel, mejorando su textura y luminosidad.",
    images: ["treatment-photos/limpieza-3.jpg","treatment-photos/hidratacion-1.jpg", "treatment-photos/limpieza-2.jpg"]
  },
  {
    title: "Tratamiento antiacné",
    description: "Disminuye la aparición de brotes y controla la producción de sebo.",
    images: ["treatment-photos/antiacne-3.png", "treatment-photos/antiacne-1.jpg", "treatment-photos/antiacne-2.jpg"]
  },
  {
    title: "Peeling químico",
    description: "Renueva las capas superficiales de la piel para reducir manchas, líneas finas y cicatrices.",
    images: ["treatment-photos/peeling-2.png", "treatment-photos/peelingquimico-1.jpg"]
  },
  {
    title: "Microdermoabrasión",
    description: "Exfoliación mecánica que mejora la textura de la piel y estimula la regeneración celular.",
    images: ["treatment-photos/micro-2.png", "treatment-photos/micro-1.jpg"]
  },
  {
    title: "Tratamiento reafirmante facial",
    description: "Mejora la elasticidad y firmeza del rostro mediante técnicas y activos tensores.",
    images: ["treatment-photos/facial-1.jpg",]
  },
  {
    title: "Depilación con cera",
    description: "Depilación profesional que deja la piel suave, utilizando técnicas cuidadosas y productos de calidad.",
    images: ["treatment-photos/piernas.jpg", "treatment-photos/axilas.jpg", "treatment-photos/vikini.jpg"]
  },
  {
    title: "Microneedling (dermapen facial)",
    description: "Tratamiento de rejuvenecimiento que estimula la producción de colágeno y elastina para una piel más firme y joven.",
    images: ["treatment-photos/microneedle-1.jpg", "treatment-photos/microneedle-2.jpg"]
  },
  {
    title: "Hidralicks (hidratación de labios)",
    description: "Tratamiento especializado para hidratar, nutrir y rejuvenecer los labios, devolviéndoles su suavidad y volumen natural.",
    images: ["treatment-photos/lips-2.jpg", "treatment-photos/lips-1.jpg"]
  }
];

export const corporales: Treatment[] = [
  {
    title: "Masaje relajante",
    description: "Terapia corporal que reduce el estrés, mejora la circulación y promueve el bienestar general.",
    images: ["treatment-photos/bambuterapia.jpg", "treatment-photos/expsensorial.jpg", "treatment-photos/geotermal.jpg"]
  },
  {
    title: "Tratamientos reductores con drenaje linfático y aparatología",
    description: "Combinación de técnicas manuales y tecnología estética para moldear el cuerpo, reducir medidas y mejorar la circulación.",
    images: ["treatment-photos/corporal-4.jpg", "treatment-photos/corporal-5.jpg", "treatment-photos/corporal-6.jpg", "treatment-photos/corporal-7.jpg", "treatment-photos/corporal-8.jpg"]
  },
  {
    title: "Liberación Neuromuscular",
    description: "Técnica enfocada en aliviar tensiones musculares profundas para mejorar movilidad y bienestar.",
    images: ["treatment-photos/corporal-1.jpg", "treatment-photos/corporal-3.jpg","treatment-photos/corporal-2.jpg"]
  },
  {
    title: "Consulta de valoración",
    description: "Sesión inicial donde evaluamos tus necesidades y diseñamos el tratamiento ideal para ti.",
    images: ["treatment-photos/booking-1.jpg"]
  }
];

// Section descriptions for spa-like context
export const sectionDescriptions = {
  faciales: "Nuestros tratamientos faciales están diseñados para rejuvenecer, limpiar y revitalizar tu piel. Cada tratamiento es personalizado para abordar tus necesidades específicas y lograr resultados visibles.",
  corporales: "Nuestros tratamientos corporales combinan técnicas tradicionales con tecnología avanzada para promover el bienestar integral, mejorar la circulación y ayudarte a alcanzar tus objetivos de belleza y salud."
}; 