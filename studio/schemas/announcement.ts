export default {
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  fields: [
    {
      name: 'enabled',
      title: 'Enabled',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'message',
      title: 'Message',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'link',
      title: 'Link (optional)',
      type: 'url',
    },
  ],
}