import Link from 'next/link'
import { urlFor } from '@/lib/image'
import { Project } from '@/lib/types'
import Image from 'next/image'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {project.images?.[0] && (
        <div className="relative h-48">
          <Image
            src={urlFor(project.images[0]).url()}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold mb-2 text-accent">
          <Link href={`/projects/${project.slug.current}`} className="hover:underline">
            {project.title}
          </Link>
        </h3>
        <p className="text-sm text-neutral-600 mb-2">{project.role} • {project.dateRange}</p>
        <p className="text-neutral-700 line-clamp-3 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded">
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
              className="text-accent hover:underline text-sm"
            >
              {link.label} →
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}