import Link from 'next/link'
import { urlFor } from '@/lib/image'
import { Publication } from '@/lib/types'
import Image from 'next/image'

interface PublicationCardProps {
  publication: Publication
}

export default function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {publication.coverImage && (
        <div className="relative h-48">
          <Image
            src={urlFor(publication.coverImage).url()}
            alt={publication.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold mb-2 text-accent">
          <Link href={`/publications/${publication.slug.current}`} className="hover:underline">
            {publication.title}
          </Link>
        </h3>
        <p className="text-sm text-neutral-600 mb-2">
          {publication.authors} • {publication.outlet} • {new Date(publication.date).getFullYear()}
        </p>
        <p className="text-neutral-700 line-clamp-3 mb-4">{publication.abstract}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {publication.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {publication.link && (
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline text-sm"
            >
              Read →
            </a>
          )}
          {publication.pdf && (
            <a
              href={urlFor(publication.pdf).url()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline text-sm"
            >
              PDF →
            </a>
          )}
        </div>
      </div>
    </article>
  )
}