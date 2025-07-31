import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { LucideIcon } from "lucide-react"

interface PromoCardProps {
  title: string
  description?: string
  variant?: 'light' | 'medium' | 'dark'
  icon?: LucideIcon
  href?: string
}

export function PromoCard({ 
  title, 
  description, 
  variant = 'light',
  icon: Icon,
  href
}: PromoCardProps) {
  const bgColor = {
    light: 'bg-brand-lavender hover:bg-brand-lavender/95',
    medium: 'bg-[#655a74] hover:bg-[#655a74]/95',
    dark: 'bg-brand-purple hover:bg-brand-purple/95'
  }[variant]

  const CardContent = () => (
    <div className={`${bgColor} transition-all duration-300 rounded-2xl sm:rounded-3xl p-6 sm:p-8 group cursor-pointer h-auto flex flex-col justify-between min-h-[140px] sm:min-h-[160px] touch-manipulation hover:scale-105 hover:shadow-xl active:scale-95`}>
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-start w-full mb-4">
          <div className="flex items-center gap-3 flex-1">
            {Icon && (
              <div className="bg-white/20 rounded-full p-2.5 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                <Icon className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            )}
            <h3 className="text-lg sm:text-xl font-semibold tracking-[-0.01em] text-white leading-tight">{title}</h3>
          </div>
          <div className="bg-white/10 rounded-full p-2.5 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 ml-4">
            <ArrowUpRight 
              className="text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" 
              size={18}
              strokeWidth={2.5}
            />
          </div>
        </div>
        {description && (
          <p className="text-white/85 text-sm sm:text-base leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="block w-full">
        <CardContent />
      </Link>
    )
  }

  return <CardContent />
}
