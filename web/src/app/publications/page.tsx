import { client } from '@/lib/sanity'
import { allPublicationsQuery, siteSettingsQuery } from '@/lib/queries'
import { Publication, SiteSettings } from '@/lib/types'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PublicationCard from '@/components/PublicationCard'

export default async function PublicationsPage() {
  const [publications, settings] = await Promise.all([
    client.fetch<Publication[]>(allPublicationsQuery),
    client.fetch<SiteSettings>(siteSettingsQuery),
  ])

  // Extract unique years and tags
  const years = [...new Set(publications.map(p => new Date(p.date).getFullYear()))].sort((a, b) => b - a)
  const tags = [...new Set(publications.flatMap(p => p.tags))].sort()

  return (
    <div className="min-h-screen">
      <Header settings={settings} />
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-center text-accent mb-12">Publications</h1>

          <div className="mb-8">
            <div className="flex flex-wrap gap-4 justify-center">
              <select className="px-4 py-2 border border-neutral-300 rounded">
                <option value="">All Years</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              <select className="px-4 py-2 border border-neutral-300 rounded">
                <option value="">All Tags</option>
                {tags.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((pub) => (
              <PublicationCard key={pub._id} publication={pub} />
            ))}
          </div>
        </div>
      </main>
      <Footer settings={settings} />
    </div>
  )
}