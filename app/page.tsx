import Image from 'next/image'
import { PracticeHours } from "@/components/practice-hours"
import { PromoCard } from "@/components/promo-card"
import { Sparkles, Scissors, Calendar } from 'lucide-react'
import MainSection from '@/components/MainSection'

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <MainSection /> 
    </div>
  )
}
