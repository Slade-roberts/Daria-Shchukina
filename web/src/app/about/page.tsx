import { client } from '@/lib/sanity'
import { pageBySlugQuery, siteSettingsQuery } from '@/lib/queries'
import { Page, SiteSettings } from '@/lib/types'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { PortableText } from '@portabletext/react'

export default async function AboutPage() {
  const [page, settings] = await Promise.all([
    client.fetch<Page>(pageBySlugQuery, { slug: 'about' }),
    client.fetch<SiteSettings>(siteSettingsQuery),
  ])

  return (
    <div className="min-h-screen">
      <Header settings={settings} />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-center text-accent mb-12">About</h1>
          <div className="prose prose-lg mx-auto">
            <PortableText value={page?.body || settings.aboutLong} />
          </div>
        </div>
      </main>
      <Footer settings={settings} />
    </div>
  )
}