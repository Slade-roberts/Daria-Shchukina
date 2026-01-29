import { groq } from '@sanity/client'

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    title,
    tagline,
    heroImage,
    aboutShort,
    aboutLong,
    email,
    location,
    socials,
    seo
  }
`

export const featuredPublicationsQuery = groq`
  *[_type == "publication" && featured == true] | order(sortOrder asc, date desc)[0...6] {
    _id,
    title,
    slug,
    authors,
    date,
    outlet,
    link,
    pdf,
    tags,
    abstract,
    coverImage
  }
`

export const allPublicationsQuery = groq`
  *[_type == "publication"] | order(sortOrder asc, date desc) {
    _id,
    title,
    slug,
    authors,
    date,
    outlet,
    link,
    pdf,
    tags,
    abstract,
    coverImage
  }
`

export const publicationBySlugQuery = groq`
  *[_type == "publication" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    authors,
    date,
    outlet,
    link,
    pdf,
    tags,
    abstract,
    coverImage,
    content
  }
`

export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true] | order(sortOrder asc, date desc)[0...6] {
    _id,
    title,
    slug,
    role,
    dateRange,
    description,
    links,
    techStack,
    images,
    content
  }
`

export const allProjectsQuery = groq`
  *[_type == "project"] | order(sortOrder asc, date desc) {
    _id,
    title,
    slug,
    role,
    dateRange,
    description,
    links,
    techStack,
    images,
    content
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    role,
    dateRange,
    description,
    links,
    techStack,
    images,
    content
  }
`

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    body,
    seo
  }
`

export const announcementQuery = groq`
  *[_type == "announcement" && enabled == true][0] {
    message,
    link
  }
`