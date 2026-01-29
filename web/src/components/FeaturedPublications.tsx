import { Link } from 'react-router-dom'
import { urlFor } from '../lib/image'
import { Publication } from '../lib/types'

interface FeaturedPublicationsProps {
  publications: Publication[]
}

export default function FeaturedPublications({ publications }: FeaturedPublicationsProps) {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif font-bold text-center text-accent mb-12">Featured Publications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub) => (
            <article key={pub._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {pub.coverImage && (
                <div className="relative h-48">
                  <img
                    src={urlFor(pub.coverImage).width(400).height(300).fit('crop').url()}
                    alt={pub.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2 text-accent">
                  <Link to={`/publications/${pub.slug.current}`} className="hover:underline">
                    {pub.title}
                  </Link>
                </h3>
                <p className="text-sm text-neutral-600 mb-2">{pub.outlet} • {new Date(pub.date).getFullYear()}</p>
                <p className="text-neutral-700 line-clamp-3">{pub.abstract}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {pub.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/publications" className="btn">
            View All Publications
          </Link>
        </div>
      </div>
    </section>
  )
}