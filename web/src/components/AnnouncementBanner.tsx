import { Link } from 'react-router-dom'
import { Announcement } from '../lib/types'

interface AnnouncementBannerProps {
  announcement: Announcement
}

export default function AnnouncementBanner({ announcement }: AnnouncementBannerProps) {
  return (
    <div className="bg-accent text-white py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          {announcement.link ? (
            <a href={announcement.link} className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">
              {announcement.message}
            </a>
          ) : (
            announcement.message
          )}
        </p>
      </div>
    </div>
  )
}