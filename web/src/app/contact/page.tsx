import { client } from '@/lib/sanity'
import { pageBySlugQuery, siteSettingsQuery } from '@/lib/queries'
import { Page, SiteSettings } from '@/lib/types'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { PortableText } from '@portabletext/react'

export default async function ContactPage() {
  const [page, settings] = await Promise.all([
    client.fetch<Page>(pageBySlugQuery, { slug: 'contact' }),
    client.fetch<SiteSettings>(siteSettingsQuery),
  ])

  return (
    <div className="min-h-screen">
      <Header settings={settings} />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-center text-accent mb-12">Contact</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <p><strong>Email:</strong> {settings.email}</p>
                <p><strong>Location:</strong> {settings.location}</p>
                <div>
                  <strong>Social:</strong>
                  <div className="flex space-x-4 mt-2">
                    {settings.socials.map((social) => (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        {social.platform}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              {page?.body && (
                <div className="prose">
                  <PortableText value={page.body} />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer settings={settings} />
    </div>
  )
}