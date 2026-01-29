import { useEffect, useState } from 'react'
import { client } from '../lib/sanity'
import { siteSettingsQuery } from '../lib/queries'
import { SiteSettings } from '../lib/types'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const settings = await client.fetch(siteSettingsQuery)
      setSiteSettings(settings)
    }
    fetchData()
  }, [])

  if (!siteSettings) return <div>Loading...</div>

  return (
    <div className="min-h-screen">
      <Header siteSettings={siteSettings} />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif mb-8">Contact</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-serif mb-4">Get in Touch</h2>
            <p className="mb-4">{siteSettings.aboutShort}</p>
            <div className="space-y-2">
              <p><strong>Email:</strong> <a href={`mailto:${siteSettings.email}`} className="text-accent hover:underline">{siteSettings.email}</a></p>
              <p><strong>Location:</strong> {siteSettings.location}</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-serif mb-4">Social Media</h2>
            <div className="space-y-2">
              {siteSettings.socials.map((social, index) => (
                <p key={index}>
                  <a href={social.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    {social.platform}
                  </a>
                </p>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer siteSettings={siteSettings} />
    </div>
  )
}