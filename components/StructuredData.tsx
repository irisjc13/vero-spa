import Script from 'next/script'

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://vero-cordoba-spa.vercel.app/#business",
    "name": "Verónica Córdoba Spa",
    "alternateName": "Vero Spa",
    "description": "Especialista en cosmetología y tratamientos estéticos faciales y corporales. Belleza y bienestar profesional.",
    "url": "https://vero-cordoba-spa.vercel.app",
    "telephone": "+54 9 351 123 4567",
    "priceRange": "$$",
    "image": [
      "https://vero-cordoba-spa.vercel.app/og-image.png",
      "https://vero-cordoba-spa.vercel.app/logo.svg"
    ],
    "logo": {
      "@type": "ImageObject",
      "url": "https://vero-cordoba-spa.vercel.app/logo.svg"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle Principal 123",
      "addressLocality": "Córdoba",
      "addressRegion": "Córdoba",
      "postalCode": "5000",
      "addressCountry": "AR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -31.4201,
      "longitude": -64.1888
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "15:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/vero.cordobaspa",
      "https://wa.me/5493511234567"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tratamientos de Belleza",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tratamientos Faciales",
            "description": "Tratamientos faciales profesionales para rejuvenecimiento y cuidado de la piel"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tratamientos Corporales",
            "description": "Tratamientos corporales para relajación y bienestar"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cosmetología",
            "description": "Servicios de cosmetología profesional"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  )
} 