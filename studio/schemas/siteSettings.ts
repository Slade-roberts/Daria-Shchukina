export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_singleton: true,
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'aboutShort',
      title: 'Short About',
      type: 'text',
      rows: 3,
    },
    {
      name: 'aboutLong',
      title: 'Long About',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.email(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'socials',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
            },
          ],
        },
      ],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
        },
        {
          name: 'ogImage',
          title: 'Open Graph Image',
          type: 'image',
        },
      ],
    },
  ],
}