const toFacetHref = (basePath, name) => `/${basePath}/${encodeURIComponent(name)}`

const sortedFacets = facetMap =>
  Array.from(facetMap.entries())
    .map(([name, count]) => ({
      name,
      count
    }))
    .sort((a, b) => b.count - a.count)

const addFacetValue = (facetMap, value) => {
  const name = typeof value === 'string' ? value.trim() : ''
  if (!name) return
  facetMap.set(name, (facetMap.get(name) || 0) + 1)
}

export const buildArchiveFacets = (posts = []) => {
  const categories = new Map()
  const tags = new Map()

  posts.forEach(post => {
    addFacetValue(categories, post?.category)

    if (Array.isArray(post?.tags)) {
      post.tags.forEach(tag => addFacetValue(tags, tag))
    }
  })

  return {
    categories: sortedFacets(categories).map(facet => ({
      ...facet,
      href: toFacetHref('category', facet.name)
    })),
    tags: sortedFacets(tags).map(facet => ({
      ...facet,
      href: toFacetHref('tag', facet.name)
    }))
  }
}
