export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60fc3f842853943af97f232d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-h86vdyb6',
                  apiId: 'adf22653-5d0c-4f95-bbaf-3cb5a91cd3f1'
                },
                {
                  buildHookId: '60fc3f84362bb5296c742f11',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-x7wgufux',
                  apiId: 'fe94f218-8a83-44df-9e3d-758cbd2952a0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Nickgonzales76017/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-x7wgufux.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
