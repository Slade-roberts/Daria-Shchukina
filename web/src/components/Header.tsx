import Link from 'next/link'
import { SiteSettings } from '@/lib/types'

interface HeaderProps {
  settings: SiteSettings
}

export default function Header({ settings }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-serif font-bold text-accent">
            {settings.title}
          </Link>
          <div className="flex space-x-8">
            <Link href="/" className="text-neutral-700 hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/publications" className="text-neutral-700 hover:text-accent transition-colors">
              Publications
            </Link>
            <Link href="/projects" className="text-neutral-700 hover:text-accent transition-colors">
              Projects
            </Link>
            <Link href="/about" className="text-neutral-700 hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-neutral-700 hover:text-accent transition-colors">
              Contact
            </Link>
            <a
              href={process.env.NEXT_PUBLIC_SANITY_STUDIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-accent transition-colors"
            >
              Admin
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}