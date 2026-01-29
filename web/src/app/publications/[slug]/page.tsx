import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity'
import { publicationBySlugQuery, siteSettingsQuery } from '@/lib/queries'
import { Publication, SiteSettings } from '@/lib/types'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/image'
import Image from 'next/image'

interface PublicationPageProps {
  params: { slug: string }
}

export default async function PublicationPage({ params }: PublicationPageProps) {
  const [publication, settings] = await Promise.all([
    client.fetch<Publication>(publicationBySlugQuery, { slug: params.slug }),
    client.fetch<SiteSettings>(siteSettingsQuery),
  ])

  if (!publication) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header settings={settings} />
      <main className="py-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {publication.coverImage && (
            <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
              <Image
                src={urlFor(publication.coverImage).url()}
                alt={publication.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <header className="mb-8">
            <h1 className="text-4xl font-serif font-bold text-accent mb-4">{publication.title}</h1>
            <div className="text-neutral-600 mb-4">
              <p><strong>Authors:</strong> {publication.authors}</p>
              <p><strong>Published in:</strong> {publication.outlet}</p>
              <p><strong>Date:</strong> {new Date(publication.date).toLocaleDateString()}</p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {publication.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-accent/10 text-accent rounded">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              {publication.link && (
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Read Publication
                </a>
              )}
              {publication.pdf && (
                <a
                  href={urlFor(publication.pdf).url()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Download PDF
                </a>
              )}
            </div>
          </header>
          <div className="prose prose-lg max-w-none">
            <PortableText value={publication.content} />
          </div>
        </article>
      </main>
      <Footer settings={settings} />
    </div>
  )
}