import Link from "next/link"

export function WhatsappButton() {
  return (
    <Link
      href="https://wa.me/573022586139"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-4 sm:bottom-8 sm:right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg hover:shadow-xl z-50 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 touch-manipulation group"
      aria-label="Escríbenos en WhatsApp"
    >
      {/* Pulse animation */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
      
      {/* WhatsApp icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-7 h-7 sm:w-8 sm:h-8 relative z-10 group-hover:scale-110 transition-transform duration-300"
      >
        <path d="M16.004 2.997c-7.302 0-13.246 5.944-13.246 13.246 0 2.324.604 4.59 1.751 6.592l-1.853 6.793 6.97-1.83c1.923 1.045 4.063 1.595 6.375 1.595 7.3 0 13.246-5.944 13.246-13.246S23.306 2.997 16.004 2.997zm0 24.38c-2.005 0-3.953-.52-5.68-1.507l-.406-.232-4.139 1.087 1.106-4.034-.264-.417a10.748 10.748 0 01-1.676-5.806c0-5.938 4.83-10.768 10.768-10.768s10.768 4.83 10.768 10.768c-.001 5.938-4.83 10.769-10.777 10.769zm5.939-8.056c-.326-.163-1.93-.954-2.23-1.062-.3-.107-.52-.163-.741.163-.22.326-.853 1.062-1.046 1.281-.194.22-.387.244-.713.082-.326-.163-1.379-.508-2.627-1.62-.971-.867-1.626-1.936-1.818-2.262-.194-.326-.021-.502.143-.664.147-.146.326-.386.489-.58.163-.194.217-.326.326-.543.109-.218.054-.409-.027-.572-.082-.163-.741-1.788-1.017-2.447-.268-.645-.539-.559-.741-.57-.194-.01-.419-.012-.644-.012s-.573.082-.873.41c-.3.326-1.147 1.123-1.147 2.74s1.174 3.177 1.338 3.397c.163.218 2.308 3.527 5.592 4.947.782.337 1.392.538 1.867.688.783.25 1.497.215 2.059.131.628-.093 1.93-.79 2.206-1.553.275-.762.275-1.414.193-1.553-.082-.138-.3-.22-.626-.384z"/>
      </svg>
      
      {/* Tooltip for desktop */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden sm:block">
        ¡Escríbenos por WhatsApp!
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
      </div>
    </Link>
  )
}