import { PortableText } from '@portabletext/react'
import { SiteSettings } from '@/lib/types'

interface AboutProps {
  settings: SiteSettings
}

export default function About({ settings }: AboutProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif font-bold text-center text-accent mb-12">About</h2>
        <div className="prose prose-lg mx-auto text-neutral-700">
          <PortableText value={settings.aboutLong} />
        </div>
      </div>
    </section>
  )
}