import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient(config)
export const urlFor = (source: any) => createImageUrlBuilder(config).image(source)