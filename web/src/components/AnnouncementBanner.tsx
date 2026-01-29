import Link from 'next/link'
import { Announcement } from '@/lib/types'

interface AnnouncementBannerProps {
  announcement: Announcement
}

export default function AnnouncementBanner({ announcement }: AnnouncementBannerProps) {
  return (
    <div className="bg-accent text-white py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          {announcement.link ? (
            <Link href={announcement.link} className="underline hover:no-underline">
              {announcement.message}
            </Link>
          ) : (
            announcement.message
          )}
        </p>
      </div>
    </div>
  )
}