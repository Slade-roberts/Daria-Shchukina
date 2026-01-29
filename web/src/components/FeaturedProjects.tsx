import { Link } from 'react-router-dom'
import { urlFor } from '../lib/image'
import { Project } from '../lib/types'

interface FeaturedProjectsProps {
  projects: Project[]
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif font-bold text-center text-accent mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article key={project._id} className="bg-neutral-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              {project.images?.[0] && (
                <div className="relative h-48">
                  <img
                    src={urlFor(project.images[0]).width(400).height(300).fit('crop').url()}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2 text-accent">
                  <Link to={`/projects/${project.slug.current}`} className="hover:underline">
                    {project.title}
                  </Link>
                </h3>
                <p className="text-sm text-neutral-600 mb-2">{project.role} • {project.dateRange}</p>
                <p className="text-neutral-700 line-clamp-3">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/projects" className="btn">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}