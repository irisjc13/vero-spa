"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import clsx from "clsx"

export function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 relative z-50">
      <div className={clsx(
        "max-w-7xl mx-auto bg-brand-purple px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-2xl sm:rounded-full shadow-lg transition-all duration-300",
        isScrolled && "shadow-xl"
      )}>
        <nav className="flex items-center justify-between h-12 sm:h-14">
          {/* Logo - Better Aligned */}
          <Link 
            href="/" 
            className="flex items-center gap-2 sm:gap-3 min-h-[44px] touch-manipulation group"
          >
            <div className="flex-shrink-0">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={100}
                height={100}
                className="w-auto h-8 sm:h-10 lg:h-12 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <span className="text-brand-cream text-sm sm:text-lg lg:text-xl xl:text-2xl font-light tracking-tight leading-tight font-playfair truncate">
                Verónica Cordoba
              </span>
              <span className="text-brand-cream/80 text-[8px] sm:text-[10px] lg:text-xs tracking-wider uppercase leading-none">
                Cosmetología y Estética
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Better Spacing */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <div className="flex items-center space-x-6 xl:space-x-8 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2.5">
              <Link 
                href="/treatments" 
                className="text-brand-cream text-sm xl:text-base font-medium hover:text-white transition-colors duration-200 whitespace-nowrap"
              >
                Tratamientos
              </Link>
              <Link 
                href="/about-me" 
                className="text-brand-cream text-sm xl:text-base font-medium hover:text-white transition-colors duration-200 whitespace-nowrap"
              >
                Sobre Mí
              </Link>
              <Link 
                href="/contact" 
                className="text-brand-cream text-sm xl:text-base font-medium hover:text-white transition-colors duration-200 whitespace-nowrap"
              >
                Contacto
              </Link>
            </div>
            
            <a href="https://wa.me/573022586139" target="_blank" rel="noopener noreferrer">
              <Button className="bg-brand-lavender hover:bg-brand-lavender/90 text-white font-semibold text-sm xl:text-base px-5 xl:px-6 py-2.5 xl:py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-brand-lavender/30 hover:border-brand-lavender/50 flex items-center gap-2 whitespace-nowrap">
                <svg className="w-4 h-4 xl:w-5 xl:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382z"/>
                </svg>
                <span className="hidden xl:inline">Agenda Cita</span>
                <span className="xl:hidden">Agendar</span>
              </Button>
            </a>
          </div>

          {/* Mobile Hamburger Menu - Better Aligned */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="relative text-brand-cream bg-white/10 backdrop-blur-sm p-3 rounded-xl min-h-[44px] min-w-[44px] flex items-center justify-center transition-all duration-300 touch-manipulation hover:bg-white/20 active:scale-95"
              aria-label="Abrir menú de navegación"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={clsx(
                  "block w-6 h-0.5 bg-current transition-all duration-300",
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : "mb-1"
                )}></span>
                <span className={clsx(
                  "block w-6 h-0.5 bg-current transition-all duration-300",
                  isMobileMenuOpen ? "opacity-0" : "mb-1"
                )}></span>
                <span className={clsx(
                  "block w-6 h-0.5 bg-current transition-all duration-300",
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                )}></span>
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu - No Changes Needed Here */}
      <div
        className={clsx(
          "fixed inset-0 z-50 bg-gradient-to-br from-brand-purple via-brand-purple to-brand-lavender text-brand-cream flex flex-col transition-all duration-500 ease-out lg:hidden",
          isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        )}
      >
        {/* Header with Enhanced Close Button */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={50}
              height={50}
              className="w-auto h-10 sm:h-12"
            />
            <div className="flex flex-col">
              <span className="text-brand-cream text-base sm:text-lg font-light tracking-tight leading-none font-playfair">
                Verónica Cordoba
              </span>
              <span className="text-brand-cream text-[9px] sm:text-[10px] tracking-wide opacity-80">
                COSMETOLOGÍA Y ESTÉTICA
              </span>
            </div>
          </div>
          
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-brand-cream bg-white/10 backdrop-blur-sm p-3 rounded-xl min-h-[44px] min-w-[44px] flex items-center justify-center transition-all duration-300 hover:bg-white/20 active:scale-95 touch-manipulation"
            aria-label="Cerrar menú de navegación"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Links with Modern Animations */}
        <nav className="flex-1 flex flex-col justify-center px-4 sm:px-6 space-y-2 sm:space-y-4">
          {[
            { href: "/", label: "Inicio" },
            { href: "/about-me", label: "Sobre Mí" },
            { href: "/treatments", label: "Tratamientos" },
            { href: "/contact", label: "Contacto" }
          ].map((item, index) => (
            <Link 
              key={item.href}
              href={item.href} 
              onClick={() => setMobileMenuOpen(false)}
              className={clsx(
                "group relative text-2xl sm:text-3xl font-light tracking-wide text-brand-cream hover:text-white transition-all duration-300 py-3 sm:py-4 px-4 rounded-xl touch-manipulation",
                "hover:bg-white/5 active:bg-white/10 active:scale-95",
                "transform transition-all duration-500 ease-out"
              )}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : '0ms'
              }}
            >
              <span className="relative z-10">{item.label}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-lavender/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </Link>
          ))}
        </nav>

        {/* Enhanced Mobile CTA Button */}
        <div className="p-4 sm:p-6 border-t border-white/10">
          <a 
            href="https://wa.me/573022586139" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full touch-manipulation"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Button className="w-full bg-brand-lavender hover:bg-brand-lavender/90 text-white font-semibold text-base sm:text-lg py-4 sm:py-5 px-6 rounded-xl shadow-lg min-h-[56px] flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382z"/>
              </svg>
              Agenda tu Cita por WhatsApp
            </Button>
          </a>
        </div>
      </div>

      {/* Enhanced Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  )
}