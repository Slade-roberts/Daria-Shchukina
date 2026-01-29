import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { client } from '../lib/sanity'
import { siteSettingsQuery, publicationBySlugQuery } from '../lib/queries'
import { SiteSettings, Publication } from '../lib/types'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { PortableText } from '@portabletext/react'

export default function PublicationDetail() {
  const { slug } = useParams<{ slug: string }>()
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null)
  const [publication, setPublication] = useState<Publication | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const [settings, pub] = await Promise.all([
        client.fetch(siteSettingsQuery),
        client.fetch(publicationBySlugQuery, { slug }),
      ])
      setSiteSettings(settings)
      setPublication(pub)
    }
    fetchData()
  }, [slug])

  if (!siteSettings || !publication) return <div>Loading...</div>

  return (
    <div className="min-h-screen">
      <Header siteSettings={siteSettings} />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-serif mb-4">{publication.title}</h1>
            <div className="text-lg text-neutral-600 mb-4">
              <p><strong>Authors:</strong> {publication.authors}</p>
              <p><strong>Published:</strong> {new Date(publication.date).toLocaleDateString()}</p>
              <p><strong>Outlet:</strong> {publication.outlet}</p>
            </div>
            {publication.tags && (
              <div className="flex flex-wrap gap-2 mb-4">
                {publication.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>
          {publication.abstract && (
            <div className="mb-8">
              <h2 className="text-2xl font-serif mb-4">Abstract</h2>
              <p className="text-lg">{publication.abstract}</p>
            </div>
          )}
          {publication.content && (
            <div className="prose prose-lg max-w-none">
              <PortableText value={publication.content} />
            </div>
          )}
          <div className="mt-8 flex gap-4">
            {publication.link && (
              <a href={publication.link} target="_blank" rel="noopener noreferrer" className="btn">
                Read Full Article
              </a>
            )}
            {publication.pdf && (
              <a href={publication.pdf} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Download PDF
              </a>
            )}
          </div>
        </article>
      </main>
      <Footer siteSettings={siteSettings} />
    </div>
  )
}