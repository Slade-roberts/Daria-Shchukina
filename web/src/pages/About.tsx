import { useEffect, useState } from 'react'
import { client } from '../lib/sanity'
import { siteSettingsQuery, pageBySlugQuery } from '../lib/queries'
import { SiteSettings, Page } from '../lib/types'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { PortableText } from '@portabletext/react'

export default function About() {
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null)
  const [page, setPage] = useState<Page | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const [settings, pageData] = await Promise.all([
        client.fetch(siteSettingsQuery),
        client.fetch(pageBySlugQuery, { slug: 'about' }),
      ])
      setSiteSettings(settings)
      setPage(pageData)
    }
    fetchData()
  }, [])

  if (!siteSettings || !page) return <div>Loading...</div>

  return (
    <div className="min-h-screen">
      <Header siteSettings={siteSettings} />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif mb-8">{page.title}</h1>
        <div className="prose prose-lg max-w-none">
          <PortableText value={page.body} />
        </div>
      </main>
      <Footer siteSettings={siteSettings} />
    </div>
  )
}