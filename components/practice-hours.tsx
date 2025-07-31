import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { Clock, Calendar, Phone } from 'lucide-react'

export function PracticeHours() {
  // Get current time in Colombia timezone (Medellín)
  const now = new Date()
  const colombiaTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Bogota"}))
  
  const dayName = format(colombiaTime, 'EEEE', { locale: es })
  const time = format(colombiaTime, 'h:mm aaa', { locale: es })
  const currentHour = colombiaTime.getHours()
  const currentDay = colombiaTime.getDay() // 0 = Sunday, 1 = Monday, etc.

  // Determine if currently open
  const isOpen = () => {
    if (currentDay === 0) return false // Sunday closed
    if (currentDay >= 1 && currentDay <= 5) return currentHour >= 9 && currentHour < 17 // Mon-Fri 9am-5pm
    if (currentDay === 6) return currentHour >= 9 && currentHour < 13 // Saturday 9am-1pm
    return false
  }

  const openStatus = isOpen()

  return (
    <>
      {/* MOBILE/TABLET VERSION (< lg) - Modern Full Layout */}
      <div className="lg:hidden w-full max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-brand-lavender/20 hover:shadow-xl transition-all duration-300">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-brand-purple/10 rounded-full p-2.5">
                <Clock className="w-5 h-5 text-brand-purple" />
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-brand-purple">Horarios de Atención</h2>
            </div>
            
            {/* Status indicator */}
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${
              openStatus 
                ? 'bg-green-100 text-green-700' 
                : 'bg-red-100 text-red-700'
            }`}>
              <div className={`w-2 h-2 rounded-full ${
                openStatus ? 'bg-green-500 animate-pulse' : 'bg-red-500'
              }`}></div>
              <span>{openStatus ? 'Abierto' : 'Cerrado'}</span>
            </div>
          </div>

          {/* Schedule grid - Mobile optimized */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {[
              { days: 'Lunes—Viernes', hours: '9:00 AM—5:00 PM' },
              { days: 'Sábado', hours: '9:00 AM—1:00 PM' },
              { days: 'Domingo', hours: 'Cerrado' }
            ].map((schedule, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 bg-gradient-to-r from-brand-purple/5 to-brand-lavender/5 rounded-xl border border-brand-purple/10 hover:border-brand-purple/20 transition-all duration-300"
              >
                <span className="text-brand-purple font-medium text-sm sm:text-base">{schedule.days}</span>
                <span className={`tabular-nums font-semibold text-sm sm:text-base ${
                  schedule.hours === 'Cerrado' ? 'text-red-600' : 'text-brand-lavender'
                }`}>
                  {schedule.hours}
                </span>
              </div>
            ))}
          </div>

          {/* Current time and quick actions */}
          <div className="bg-gradient-to-r from-brand-purple to-brand-lavender p-4 sm:p-6 rounded-xl text-white">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5" />
                <div>
                  <p className="text-sm opacity-90">Hoy es {dayName}</p>
                  <p className="text-lg font-semibold tabular-nums">{time}</p>
                </div>
              </div>
              
              {/* Quick action button */}
              <a 
                href="https://wa.me/573022586139" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-medium px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation min-h-[48px] justify-center sm:justify-start"
              >
                {/* WhatsApp icon */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382z"/>
                </svg>
                <span className="text-sm sm:text-base">Contáctanos</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP VERSION (lg+) - Original Compact Layout */}
      <div className="hidden lg:block w-[280px] bg-white/90 backdrop-blur-sm shadow-md rounded-2xl p-4 border border-brand-lavender/20">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-brand-purple">Horarios</h3>
          <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
            openStatus 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          }`}>
            <div className={`w-1.5 h-1.5 rounded-full ${
              openStatus ? 'bg-green-500 animate-pulse' : 'bg-red-500'
            }`}></div>
            <span>{openStatus ? 'Abierto' : 'Cerrado'}</span>
          </div>
        </div>

        {/* Compact schedule */}
        <div className="space-y-2 mb-4">
          {[
            { days: 'Lun—Vie', hours: '9:00—17:00' },
            { days: 'Sábado', hours: '9:00—13:00' },
            { days: 'Domingo', hours: 'Cerrado' }
          ].map((schedule, index) => (
            <div key={index} className="flex items-center justify-between text-xs">
              <span className="text-brand-purple font-medium">{schedule.days}</span>
              <span className={`tabular-nums font-semibold ${
                schedule.hours === 'Cerrado' ? 'text-red-600' : 'text-brand-lavender'
              }`}>
                {schedule.hours}
              </span>
            </div>
          ))}
        </div>

        {/* Current time - compact */}
        <div className="bg-gradient-to-r from-brand-purple to-brand-lavender p-3 rounded-xl text-white">
          <div className="text-center">
            <p className="text-xs opacity-90">{dayName}</p>
            <p className="text-sm font-semibold tabular-nums">{time}</p>
          </div>
        </div>
      </div>
    </>
  )
}
