import { useEffect, useState } from 'react'
import { client } from '../lib/sanity'
import { siteSettingsQuery, featuredPublicationsQuery, featuredProjectsQuery, announcementQuery } from '../lib/queries'
import { SiteSettings, Publication, Project, Announcement } from '../lib/types'
import Header from '../components/Header'
import Hero from '../components/Hero'
import FeaturedPublications from '../components/FeaturedPublications'
import FeaturedProjects from '../components/FeaturedProjects'
import AnnouncementBanner from '../components/AnnouncementBanner'
import Footer from '../components/Footer'

export default function Home() {
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null)
  const [publications, setPublications] = useState<Publication[]>([])
  const [projects, setProjects] = useState<Project[]>([])
  const [announcement, setAnnouncement] = useState<Announcement | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const [settings, pubs, projs, ann] = await Promise.all([
        client.fetch(siteSettingsQuery),
        client.fetch(featuredPublicationsQuery),
        client.fetch(featuredProjectsQuery),
        client.fetch(announcementQuery),
      ])
      setSiteSettings(settings)
      setPublications(pubs)
      setProjects(projs)
      setAnnouncement(ann)
    }
    fetchData()
  }, [])

  if (!siteSettings) return <div>Loading...</div>

  return (
    <div className="min-h-screen">
      <Header siteSettings={siteSettings} />
      {announcement && <AnnouncementBanner announcement={announcement} />}
      <Hero siteSettings={siteSettings} />
      <FeaturedPublications publications={publications} />
      <FeaturedProjects projects={projects} />
      <Footer siteSettings={siteSettings} />
    </div>
  )
}