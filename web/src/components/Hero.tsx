import Image from 'next/image'
import { urlFor } from '@/lib/image'
import { SiteSettings } from '@/lib/types'

interface HeroProps {
  settings: SiteSettings
}

export default function Hero({ settings }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-accent/5 to-neutral-100">
      <div className="text-center z-10">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-accent mb-4">
          {settings.title}
        </h1>
        <p className="text-xl md:text-2xl text-neutral-700 mb-8">
          {settings.tagline}
        </p>
      </div>
      {settings.heroImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={urlFor(settings.heroImage).url()}
            alt="Hero"
            fill
            className="object-cover opacity-20"
          />
        </div>
      )}
    </section>
  )
}