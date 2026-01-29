import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { client } from '@/lib/sanity'
import { siteSettingsQuery, featuredPublicationsQuery, featuredProjectsQuery, announcementQuery } from '@/lib/queries'
import { SiteSettings, Publication, Project, Announcement } from '@/lib/types'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import FeaturedPublications from '@/components/FeaturedPublications'
import FeaturedProjects from '@/components/FeaturedProjects'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import SurpriseGate from '@/components/SurpriseGate'

export default async function Home() {
  const cookieStore = cookies()
  const revealed = cookieStore.get('revealed')?.value === 'true'

  if (!revealed) {
    return <SurpriseGate />
  }

  const [settings, publications, projects, announcement] = await Promise.all([
    client.fetch<SiteSettings>(siteSettingsQuery),
    client.fetch<Publication[]>(featuredPublicationsQuery),
    client.fetch<Project[]>(featuredProjectsQuery),
    client.fetch<Announcement | null>(announcementQuery),
  ])

  return (
    <div className="min-h-screen">
      <Header settings={settings} />
      {announcement && <AnnouncementBanner announcement={announcement} />}
      <Hero settings={settings} />
      <About settings={settings} />
      <FeaturedPublications publications={publications} />
      <FeaturedProjects projects={projects} />
      <Footer settings={settings} />
    </div>
  )
}