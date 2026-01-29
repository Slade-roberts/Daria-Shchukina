export interface SiteSettings {
  title: string
  tagline: string
  heroImage: any
  aboutShort: string
  aboutLong: any[]
  email: string
  location: string
  socials: { platform: string; url: string }[]
  seo: {
    metaTitle: string
    metaDescription: string
    ogImage: any
  }
}

export interface Publication {
  _id: string
  title: string
  slug: { current: string }
  authors: string
  date: string
  outlet: string
  link: string
  pdf: any
  tags: string[]
  abstract: string
  featured: boolean
  sortOrder: number
  coverImage: any
  content: any[]
}

export interface Project {
  _id: string
  title: string
  slug: { current: string }
  role: string
  dateRange: string
  description: string
  links: { label: string; url: string }[]
  techStack: string[]
  images: any[]
  featured: boolean
  sortOrder: number
  content: any[]
}

export interface Page {
  _id: string
  title: string
  slug: { current: string }
  body: any[]
  seo: {
    metaTitle: string
    metaDescription: string
    ogImage: any
  }
}

export interface Announcement {
  message: string
  link: string
}