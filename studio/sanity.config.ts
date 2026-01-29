import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import schemas from './schemaTypes'

export default defineConfig({
  name: 'daria-shchukina-studio',
  title: 'Daria Shchukina CMS',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            orderableDocumentListDeskItem({
              type: 'publication',
              title: 'Publications',
              S,
            }),
            orderableDocumentListDeskItem({
              type: 'project',
              title: 'Projects',
              S,
            }),
            S.listItem()
              .title('Pages')
              .child(
                S.list()
                  .title('Pages')
                  .items([
                    S.listItem()
                      .title('About')
                      .child(
                        S.document()
                          .schemaType('page')
                          .documentId('about')
                      ),
                    S.listItem()
                      .title('Contact')
                      .child(
                        S.document()
                          .schemaType('page')
                          .documentId('contact')
                      ),
                  ])
              ),
            S.documentTypeList('announcement').title('Announcements'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemas,
  },
})