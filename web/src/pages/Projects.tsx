import { useEffect, useState } from 'react'
import { client } from '../lib/sanity'
import { siteSettingsQuery, allProjectsQuery } from '../lib/queries'
import { SiteSettings, Project } from '../lib/types'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null)
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const [settings, projs] = await Promise.all([
        client.fetch(siteSettingsQuery),
        client.fetch(allProjectsQuery),
      ])
      setSiteSettings(settings)
      setProjects(projs)
    }
    fetchData()
  }, [])

  if (!siteSettings) return <div>Loading...</div>

  return (
    <div className="min-h-screen">
      <Header siteSettings={siteSettings} />
      <main className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif mb-8">Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </main>
      <Footer siteSettings={siteSettings} />
    </div>
  )
}