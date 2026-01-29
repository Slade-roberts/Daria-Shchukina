export default {
  name: 'publication',
  title: 'Publication',
  type: 'document',
  orderings: [
    {
      title: 'Date, New',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'date',
      title: 'Publication Date',
      type: 'date',
      validation: Rule => Rule.required(),
    },
    {
      name: 'outlet',
      title: 'Publication Outlet',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
    {
      name: 'pdf',
      title: 'PDF File',
      type: 'file',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'abstract',
      title: 'Abstract',
      type: 'text',
      rows: 4,
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'content',
      title: 'Full Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      outlet: 'outlet',
      date: 'date',
      featured: 'featured',
    },
    prepare(selection) {
      const { title, outlet, date, featured } = selection
      return {
        title,
        subtitle: `${outlet} • ${new Date(date).getFullYear()}${featured ? ' ⭐' : ''}`,
      }
    },
  },
}