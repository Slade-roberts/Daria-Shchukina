import { Link } from 'react-router-dom'
import { SiteSettings } from '../lib/types'

interface HeaderProps {
  siteSettings: SiteSettings
}

export default function Header({ siteSettings }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-serif font-bold text-accent">
            {siteSettings.title}
          </Link>
          <div className="flex space-x-8">
            <Link to="/" className="text-neutral-700 hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="/publications" className="text-neutral-700 hover:text-accent transition-colors">
              Publications
            </Link>
            <Link to="/projects" className="text-neutral-700 hover:text-accent transition-colors">
              Projects
            </Link>
            <Link to="/about" className="text-neutral-700 hover:text-accent transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-neutral-700 hover:text-accent transition-colors">
              Contact
            </Link>
            <a
              href={import.meta.env.VITE_SANITY_STUDIO_URL}
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