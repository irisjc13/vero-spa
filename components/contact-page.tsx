"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PracticeHours } from "@/components/practice-hours";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  web?: { label: string; url: string };
}

export const Contact2 = ({
  title = "Contáctanos",
  description = "Estamos disponibles para responder tus preguntas o agendar tu cita.",
  phone = "+57 302 2586139",
  web = { label: "Agenda tu cita", url: "https://wa.me/573022586139" },
}: Contact2Props) => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    const response = await fetch("https://formspree.io/f/xwpbwwkr", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    })

    if (response.ok) {
      setSubmitted(true)
      form.reset()
    } else {
      alert("Hubo un error. Intenta de nuevo más tarde.")
    }
  }
  
  return (
    <>
      {/* MOBILE/TABLET VERSION (< lg) */}
      <section className="lg:hidden min-h-screen bg-brand-cream text-brand-purple">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-brand-purple via-brand-purple to-brand-lavender text-brand-cream py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-4xl sm:text-5xl font-light font-playfair mb-4 sm:mb-6">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-brand-cream/90 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
            
            {/* Quick Contact Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 sm:mt-10">
              <a 
                href={`https://wa.me/${phone.replace(/\D/g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center bg-brand-lavender hover:bg-brand-lavender/90 text-white font-semibold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation min-h-[56px]"
              >
                <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382z"/>
                </svg>
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="space-y-8">
            
            {/* Contact Information Cards */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-playfair font-semibold text-brand-purple mb-6">
                Información de Contacto
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-brand-cream/50 rounded-xl hover:bg-brand-cream/70 transition-colors">
                  <div className="w-12 h-12 bg-brand-lavender rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382z"/>
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-brand-purple/70 mb-1">WhatsApp</p>
                      Enviar mensaje
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-brand-cream/50 rounded-xl hover:bg-brand-cream/70 transition-colors">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <radialGradient id="instagram-gradient" cx="0.5" cy="1" r="1">
                          <stop offset="0%" stopColor="#fdf497" />
                          <stop offset="5%" stopColor="#fdf497" />
                          <stop offset="45%" stopColor="#fd5949" />
                          <stop offset="60%" stopColor="#d6249f" />
                          <stop offset="90%" stopColor="#285AEB" />
                        </radialGradient>
                      </defs>
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="url(#instagram-gradient)"/>
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-brand-purple/70 mb-1">Instagram</p>
                    <a href="https://www.instagram.com/vero.cordobaspa/" target="_blank" rel="noopener noreferrer" className="text-brand-purple font-medium hover:text-brand-lavender transition-colors">
                      @vero.cordobaspa
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-brand-cream/50 rounded-xl">
                  <div className="w-12 h-12 bg-brand-lavender rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-brand-purple/70 mb-1">Ubicación</p>
                    <p className="text-brand-purple font-medium">Medellín, Colombia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Practice Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl font-playfair font-semibold text-brand-purple mb-4">
                Horarios de Atención
              </h3>
              <PracticeHours />
            </div>

            {/* Contact Form - Mobile Optimized */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-playfair font-semibold text-brand-purple mb-2">
                Agenda tu Consulta
              </h2>
              <p className="text-brand-purple/70 mb-8">
                Completa el formulario y nos pondremos en contacto contigo pronto
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-green-600 mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-brand-purple/70">
                    Gracias por contactarnos. Te responderemos pronto.
                  </p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullname-mobile" className="text-sm font-medium text-brand-purple">
                        Nombre Completo *
                      </Label>
                      <Input 
                        type="text" 
                        id="fullname-mobile" 
                        name="fullname" 
                        required 
                        placeholder="Tu nombre completo" 
                        className="h-12 text-base border-brand-purple/20 focus:border-brand-purple focus:ring-brand-purple/20 rounded-xl"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone-mobile" className="text-sm font-medium text-brand-purple">
                        Teléfono *
                      </Label>
                      <Input 
                        type="tel" 
                        id="phone-mobile" 
                        name="phone"
                        required 
                        placeholder="+57 300 123 4567" 
                        className="h-12 text-base border-brand-purple/20 focus:border-brand-purple focus:ring-brand-purple/20 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service-mobile" className="text-sm font-medium text-brand-purple">
                      Servicio de Interés *
                    </Label>
                    <select
                      id="service-mobile"
                      name="service"
                      required
                      className="w-full h-12 text-base border border-brand-purple/20 focus:border-brand-purple focus:ring-brand-purple/20 rounded-xl px-4 bg-white"
                      defaultValue=""
                    >
                      <option disabled value="">Selecciona un servicio</option>
                      <option>Tratamientos Faciales</option>
                      <option>Tratamientos Corporales</option>
                      <option>Tratamientos Postoperatorios</option>
                      <option>Consulta Personalizada</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="appointment-mobile" className="text-sm font-medium text-brand-purple">
                      Horario Preferido *
                    </Label>
                    <select
                      id="appointment-mobile"
                      name="appointment"
                      required
                      className="w-full h-12 text-base border border-brand-purple/20 focus:border-brand-purple focus:ring-brand-purple/20 rounded-xl px-4 bg-white"
                      defaultValue=""
                    >
                      <option disabled value="">Selecciona tu horario preferido</option>
                      <option value="Lunes AM">Lunes AM (8:00 - 12:00)</option>
                      <option value="Lunes PM">Lunes PM (12:00 - 18:00)</option>
                      <option value="Martes AM">Martes AM (8:00 - 12:00)</option>
                      <option value="Martes PM">Martes PM (12:00 - 18:00)</option>
                      <option value="Miércoles AM">Miércoles AM (8:00 - 12:00)</option>
                      <option value="Miércoles PM">Miércoles PM (12:00 - 18:00)</option>
                      <option value="Jueves AM">Jueves AM (8:00 - 12:00)</option>
                      <option value="Jueves PM">Jueves PM (12:00 - 18:00)</option>
                      <option value="Viernes AM">Viernes AM (8:00 - 12:00)</option>
                      <option value="Viernes PM">Viernes PM (12:00 - 15:00)</option>
                      <option value="Sábado AM">Sábado AM (9:00 - 13:00)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message-mobile" className="text-sm font-medium text-brand-purple">
                      Mensaje *
                    </Label>
                    <Textarea 
                      id="message-mobile" 
                      name="message" 
                      required 
                      placeholder="Cuéntanos sobre tus necesidades específicas, preguntas o cualquier información adicional que consideres importante..."
                      className="min-h-[120px] text-base border-brand-purple/20 focus:border-brand-purple focus:ring-brand-purple/20 rounded-xl resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-brand-purple hover:bg-brand-lavender text-brand-cream font-semibold text-base py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 min-h-[56px]"
                  >
                    Enviar Mensaje
                  </Button>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 sm:h-64">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps?q=carrera+95+%23+48D+-+101,+Medellin,+Antioquia&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="p-4 text-center">
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=carrera+95+%23+48D+-+101,+Medellin,+Antioquia" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 text-brand-purple hover:text-brand-lavender transition-colors font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                  </svg>
                  Cómo llegar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESKTOP VERSION (lg+) - Original Layout */}
      <section className="hidden lg:flex flex-col bg-brand-cream text-brand-purple">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left column: Contact Details */}
            <div className="lg:w-1/3 flex flex-col">
              <div className="text-center lg:text-left mb-6">
                <h1 className="mb-2 text-4xl lg:text-5xl font-semibold font-playfair">
                  {title}
                </h1>
                <p className="text-brand-purple/80 text-sm">{description}</p>
              </div>
              <div className="mx-auto w-fit lg:mx-0">
                <h3 className="mb-4 text-xl font-semibold">Detalles de contacto</h3>
                <ul className="ml-4 list-disc space-y-1 text-sm mb-6">
                  <li>
                    💬 <a href={`https://wa.me/${phone.replace(/\D/g, '')}`} target="_blank" className="underline hover:text-brand-lavender">WhatsApp</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <radialGradient id="instagram-gradient-desktop" cx="0.5" cy="1" r="1">
                          <stop offset="0%" stopColor="#fdf497" />
                          <stop offset="5%" stopColor="#fdf497" />
                          <stop offset="45%" stopColor="#fd5949" />
                          <stop offset="60%" stopColor="#d6249f" />
                          <stop offset="90%" stopColor="#285AEB" />
                        </radialGradient>
                      </defs>
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="url(#instagram-gradient-desktop)"/>
                    </svg>
                    <a href="https://www.instagram.com/vero.cordobaspa/" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-lavender">@vero.cordobaspa</a>
                  </li>
                  <li>
                    📍 Medellín, Colombia
                  </li>
                </ul>
                
                {/* Office Hours */}
                <div className="mb-6">
                  <PracticeHours />
                </div>
                
                <div className="space-y-2">
                  <Button className="w-full bg-brand-purple text-brand-cream hover:bg-brand-lavender text-sm py-2" asChild>
                    <a href={web.url} target="_blank">Agenda tu cita</a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right column: Form and Map */}
            <div className="lg:w-2/3 flex flex-col gap-4">
              {/* Form */}
              <div className="flex-1 flex flex-col gap-4 rounded-lg border p-6 bg-white shadow-lg">
                {submitted ? (
                  <div className="text-center text-green-600 text-sm font-semibold">
                    ¡Gracias! Tu mensaje ha sido enviado correctamente.
                  </div>
                ) : (
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-3" onSubmit={handleSubmit}>
                    <div className="grid gap-1">
                      <Label htmlFor="fullname-desktop" className="text-sm">Nombre Completo</Label>
                      <Input type="text" id="fullname-desktop" name="fullname" required placeholder="Tu nombre completo" className="h-8 text-sm" />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="phone-desktop" className="text-sm">Teléfono</Label>
                      <Input type="tel" id="phone-desktop" name="phone" required placeholder="+57..." className="h-8 text-sm" />
                    </div>
                    
                    <div className="grid gap-1">
                      <Label htmlFor="service-desktop" className="text-sm">Servicio de Interés</Label>
                      <select
                        id="service-desktop"
                        name="service"
                        required
                        className="border rounded-md px-3 py-1 text-sm h-8"
                        defaultValue=""
                      >
                        <option disabled value="">Selecciona un servicio</option>
                        <option>Facial</option>
                        <option>Corporal</option>
                        <option>Postoperatorio</option>
                        <option>Consulta personalizada</option>
                      </select>
                    </div>
                                         <div className="grid gap-1 md:col-span-2">
                       <Label htmlFor="appointment-desktop" className="text-sm">Horario Preferido</Label>
                       <select
                         id="appointment-desktop"
                         name="appointment"
                         required
                         className="border rounded-md px-3 py-1 text-sm h-8"
                         defaultValue=""
                       >
                         <option disabled value="">Selecciona tu horario preferido</option>
                         <option value="Lunes AM">Lunes AM (8:00 - 12:00)</option>
                         <option value="Lunes PM">Lunes PM (12:00 - 18:00)</option>
                         <option value="Martes AM">Martes AM (8:00 - 12:00)</option>
                         <option value="Martes PM">Martes PM (12:00 - 18:00)</option>
                         <option value="Miércoles AM">Miércoles AM (8:00 - 12:00)</option>
                         <option value="Miércoles PM">Miércoles PM (12:00 - 18:00)</option>
                         <option value="Jueves AM">Jueves AM (8:00 - 12:00)</option>
                         <option value="Jueves PM">Jueves PM (12:00 - 18:00)</option>
                         <option value="Viernes AM">Viernes AM (8:00 - 12:00)</option>
                         <option value="Viernes PM">Viernes PM (12:00 - 15:00)</option>
                         <option value="Sábado AM">Sábado AM (9:00 - 13:00)</option>
                       </select>
                     </div>
                    <div className="grid gap-1 md:col-span-2">
                      <Label htmlFor="message-desktop" className="text-sm">Mensaje</Label>
                      <Textarea id="message-desktop" name="message" required placeholder="Cuéntanos tus necesidades específicas" className="h-16 text-sm resize-none" />
                    </div>
                    <div className="md:col-span-2">
                      <Button type="submit" className="w-full bg-brand-purple hover:bg-brand-lavender text-brand-cream text-sm py-2">
                        Enviar Mensaje
                      </Button>
                    </div>
                  </form>
                )}
              </div>

              {/* Google Maps - Compact */}
              <div className="h-32 rounded-lg shadow-md overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps?q=carrera+95+%23+48D+-+101,+Medellin,+Antioquia&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="text-center">
                <a href="https://www.google.com/maps/dir/?api=1&destination=carrera+95+%23+48D+-+101,+Medellin,+Antioquia" target="_blank" className="underline text-xs hover:text-brand-purple">
                  Cómo llegar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};