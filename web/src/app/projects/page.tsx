import { client } from '@/lib/sanity'
import { allProjectsQuery, siteSettingsQuery } from '@/lib/queries'
import { Project, SiteSettings } from '@/lib/types'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProjectCard from '@/components/ProjectCard'

export default async function ProjectsPage() {
  const [projects, settings] = await Promise.all([
    client.fetch<Project[]>(allProjectsQuery),
    client.fetch<SiteSettings>(siteSettingsQuery),
  ])

  return (
    <div className="min-h-screen">
      <Header settings={settings} />
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-center text-accent mb-12">Projects</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        </div>
      </main>
      <Footer settings={settings} />
    </div>
  )
}