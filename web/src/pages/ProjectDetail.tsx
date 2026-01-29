import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { client } from '../lib/sanity'
import { siteSettingsQuery, projectBySlugQuery } from '../lib/queries'
import { SiteSettings, Project } from '../lib/types'
import { urlFor } from '../lib/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { PortableText } from '@portabletext/react'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null)
  const [project, setProject] = useState<Project | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const [settings, proj] = await Promise.all([
        client.fetch(siteSettingsQuery),
        client.fetch(projectBySlugQuery, { slug }),
      ])
      setSiteSettings(settings)
      setProject(proj)
    }
    fetchData()
  }, [slug])

  if (!siteSettings || !project) return <div>Loading...</div>

  return (
    <div className="min-h-screen">
      <Header siteSettings={siteSettings} />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-serif mb-4">{project.title}</h1>
            <div className="text-lg text-neutral-600 mb-4">
              <p><strong>Role:</strong> {project.role}</p>
              <p><strong>Date:</strong> {project.dateRange}</p>
            </div>
            {project.techStack && project.techStack.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </header>
          {project.description && (
            <div className="mb-8">
              <p className="text-lg">{project.description}</p>
            </div>
          )}
          {project.images && project.images.length > 0 && (
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((image, index) => (
                  <img
                    key={index}
                    src={urlFor(image).width(800).height(600).fit('crop').url()}
                    alt={image.alt || `Project image ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          )}
          {project.content && (
            <div className="prose prose-lg max-w-none mb-8">
              <PortableText value={project.content} />
            </div>
          )}
          {project.links && project.links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-4">
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </article>
      </main>
      <Footer siteSettings={siteSettings} />
    </div>
  )
}