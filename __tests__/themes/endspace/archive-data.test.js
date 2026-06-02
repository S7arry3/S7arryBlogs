import { buildArchiveFacets } from '@/themes/endspace/components/archiveData'

describe('buildArchiveFacets', () => {
  it('groups published posts into sorted category and tag facets', () => {
    const posts = [
      {
        id: '1',
        title: 'Tech art note',
        category: 'TA',
        tags: ['Shader', 'UE']
      },
      {
        id: '2',
        title: 'AI note',
        category: 'AI',
        tags: ['AI', 'UE']
      },
      {
        id: '3',
        title: 'Game note',
        category: 'GAME',
        tags: ['Design']
      },
      {
        id: '4',
        title: 'Second TA note',
        category: 'TA',
        tags: ['Shader']
      }
    ]

    expect(buildArchiveFacets(posts)).toEqual({
      categories: [
        { name: 'TA', count: 2, href: '/category/TA' },
        { name: 'AI', count: 1, href: '/category/AI' },
        { name: 'GAME', count: 1, href: '/category/GAME' }
      ],
      tags: [
        { name: 'Shader', count: 2, href: '/tag/Shader' },
        { name: 'UE', count: 2, href: '/tag/UE' },
        { name: 'AI', count: 1, href: '/tag/AI' },
        { name: 'Design', count: 1, href: '/tag/Design' }
      ]
    })
  })

  it('ignores empty category and tag values', () => {
    const posts = [
      { id: '1', category: '', tags: ['AI', ''] },
      { id: '2', category: null, tags: null },
      { id: '3', category: 'TA', tags: [' '] }
    ]

    expect(buildArchiveFacets(posts)).toEqual({
      categories: [{ name: 'TA', count: 1, href: '/category/TA' }],
      tags: [{ name: 'AI', count: 1, href: '/tag/AI' }]
    })
  })
})
