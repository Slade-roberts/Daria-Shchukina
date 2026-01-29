import { SiteSettings } from '@/lib/types'

interface FooterProps {
  settings: SiteSettings
}

export default function Footer({ settings }: FooterProps) {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">{settings.title}</h3>
            <p className="text-neutral-400">{settings.aboutShort}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-neutral-400 mb-2">{settings.email}</p>
            <p className="text-neutral-400">{settings.location}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow</h4>
            <div className="flex space-x-4">
              {settings.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  {social.platform}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-neutral-400">
          <p>&copy; {new Date().getFullYear()} {settings.title}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}