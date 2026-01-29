import createImageUrlBuilder from '@sanity/image-url'
import { client } from './sanity'

export const urlFor = (source: any) => createImageUrlBuilder(client).image(source)