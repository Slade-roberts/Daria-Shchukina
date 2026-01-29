import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity'
import { projectBySlugQuery, siteSettingsQuery } from '@/lib/queries'
import { Project, SiteSettings } from '@/lib/types'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/image'
import Image from 'next/image'

interface ProjectPageProps {
  params: { slug: string }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const [project, settings] = await Promise.all([
    client.fetch<Project>(projectBySlugQuery, { slug: params.slug }),
    client.fetch<SiteSettings>(siteSettingsQuery),
  ])

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header settings={settings} />
      <main className="py-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {project.images?.[0] && (
            <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
              <Image
                src={urlFor(project.images[0]).url()}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <header className="mb-8">
            <h1 className="text-4xl font-serif font-bold text-accent mb-4">{project.title}</h1>
            <div className="text-neutral-600 mb-4">
              <p><strong>Role:</strong> {project.role}</p>
              <p><strong>Duration:</strong> {project.dateRange}</p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-accent/10 text-accent rounded">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </header>
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-xl text-neutral-700 mb-8">{project.description}</p>
            <PortableText value={project.content} />
          </div>
          {project.images && project.images.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.slice(1).map((image, index) => (
                <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={urlFor(image).url()}
                    alt={`${project.title} ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </article>
      </main>
      <Footer settings={settings} />
    </div>
  )
}