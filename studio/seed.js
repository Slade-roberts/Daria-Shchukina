import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN,
  apiVersion: '2024-01-01',
})

async function seed() {
  console.log('Seeding content...')

  // Site Settings
  const siteSettings = {
    _type: 'siteSettings',
    _id: 'siteSettings',
    title: 'Daria Shchukina',
    tagline: 'Literary Translator & Writer',
    aboutShort: 'BA in English, pursuing MA in Translation. Passionate about bridging languages through literature.',
    aboutLong: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'With a strong foundation in English literature and a passion for translation, I am dedicated to bridging cultural and linguistic divides through the power of words. My academic journey includes a BA in English and ongoing MA studies in Translation, where I explore advanced techniques in literary translation.',
          },
        ],
      },
    ],
    email: 'daria@example.com',
    location: 'Your Location',
    socials: [
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/daria' },
      { platform: 'Twitter', url: 'https://twitter.com/daria' },
    ],
    seo: {
      metaTitle: 'Daria Shchukina - Literary Translator & Writer',
      metaDescription: 'Explore Daria Shchukina\'s literary works, translations, and expertise in English literature.',
    },
  }

  // Pages
  const aboutPage = {
    _type: 'page',
    _id: 'about',
    title: 'About',
    slug: { _type: 'slug', current: 'about' },
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'This is the about page content. You can edit this in the CMS.',
          },
        ],
      },
    ],
  }

  const contactPage = {
    _type: 'page',
    _id: 'contact',
    title: 'Contact',
    slug: { _type: 'slug', current: 'contact' },
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Get in touch! Feel free to reach out for collaborations or inquiries.',
          },
        ],
      },
    ],
  }

  // Publications
  const publications = [
    {
      _type: 'publication',
      title: 'Sample Publication 1',
      slug: { _type: 'slug', current: 'sample-publication-1' },
      authors: 'Daria Shchukina',
      date: '2024-01-15',
      outlet: 'Literary Journal',
      link: 'https://example.com/pub1',
      tags: ['poetry', 'translation'],
      abstract: 'A sample publication abstract.',
      featured: true,
      content: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Full content of the publication goes here.',
            },
          ],
        },
      ],
    },
    {
      _type: 'publication',
      title: 'Sample Publication 2',
      slug: { _type: 'slug', current: 'sample-publication-2' },
      authors: 'Daria Shchukina',
      date: '2023-11-20',
      outlet: 'Translation Quarterly',
      tags: ['fiction', 'russian'],
      abstract: 'Another sample publication.',
      featured: true,
      content: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'More content here.',
            },
          ],
        },
      ],
    },
    {
      _type: 'publication',
      title: 'Sample Publication 3',
      slug: { _type: 'slug', current: 'sample-publication-3' },
      authors: 'Daria Shchukina',
      date: '2023-08-10',
      outlet: 'Poetry Magazine',
      tags: ['poetry'],
      abstract: 'Third sample publication.',
      featured: false,
    },
  ]

  // Projects
  const projects = [
    {
      _type: 'project',
      title: 'Translation Project Alpha',
      slug: { _type: 'slug', current: 'translation-project-alpha' },
      role: 'Translator',
      dateRange: '2023 - 2024',
      description: 'A major translation project involving contemporary Russian literature.',
      links: [{ label: 'View Project', url: 'https://example.com/project1' }],
      techStack: ['Translation Tools', 'Research'],
      featured: true,
      content: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Detailed project description and process.',
            },
          ],
        },
      ],
    },
    {
      _type: 'project',
      title: 'Literary Analysis Beta',
      slug: { _type: 'slug', current: 'literary-analysis-beta' },
      role: 'Analyst',
      dateRange: '2022 - 2023',
      description: 'In-depth analysis of modernist poetry.',
      links: [{ label: 'Read Analysis', url: 'https://example.com/project2' }],
      techStack: ['Academic Research', 'Writing'],
      featured: true,
    },
    {
      _type: 'project',
      title: 'Creative Writing Gamma',
      slug: { _type: 'slug', current: 'creative-writing-gamma' },
      role: 'Writer',
      dateRange: '2021 - 2022',
      description: 'Collection of original short stories.',
      featured: false,
    },
  ]

  try {
    await client.createOrReplace(siteSettings)
    await client.createOrReplace(aboutPage)
    await client.createOrReplace(contactPage)

    for (const pub of publications) {
      await client.createOrReplace(pub)
    }

    for (const project of projects) {
      await client.createOrReplace(project)
    }

    console.log('Seeding complete!')
  } catch (error) {
    console.error('Seeding failed:', error)
  }
}

seed()