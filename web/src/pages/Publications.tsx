import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { client } from '../lib/sanity'
import { siteSettingsQuery, allPublicationsQuery } from '../lib/queries'
import { SiteSettings, Publication } from '../lib/types'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PublicationCard from '../components/PublicationCard'

export default function Publications() {
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null)
  const [publications, setPublications] = useState<Publication[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const [settings, pubs] = await Promise.all([
        client.fetch(siteSettingsQuery),
        client.fetch(allPublicationsQuery),
      ])
      setSiteSettings(settings)
      setPublications(pubs)
    }
    fetchData()
  }, [])

  if (!siteSettings) return <div>Loading...</div>

  return (
    <div className="min-h-screen">
      <Header siteSettings={siteSettings} />
      <main className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif mb-8">Publications</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub) => (
            <PublicationCard key={pub._id} publication={pub} />
          ))}
        </div>
      </main>
      <Footer siteSettings={siteSettings} />
    </div>
  )
}