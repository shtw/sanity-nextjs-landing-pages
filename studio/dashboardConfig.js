export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5e438c65ddd8fa2d4a3d38bf',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-rrxkrda6',
                  apiId: '7b258da9-5ca7-4bea-9f7a-723a539792a1'
                },
                {
                  buildHookId: '5e438c65c83e45989ba2895d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-uaxkhjpp',
                  apiId: '429190b0-f665-4c93-ab0f-d24effb0c9b6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shtw/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-uaxkhjpp.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
