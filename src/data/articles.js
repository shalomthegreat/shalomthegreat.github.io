// Articles loader.
//
// Each article lives as a Markdown file in `src/content/articles/*.md` with a
// small YAML-ish frontmatter block. Drop a new `.md` file in that folder and it
// automatically appears in the gallery and gets its own route — no wiring
// needed. Vite reads the files as raw strings at build time via import.meta.glob.

const files = import.meta.glob('../content/articles/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

// Parse a minimal frontmatter block (`key: value` pairs between --- fences).
function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!match) return { meta: {}, body: raw.trim() }

  const meta = {}
  for (const line of match[1].split('\n')) {
    const kv = line.match(/^([\w-]+):\s*(.*)$/)
    if (!kv) continue
    let value = kv[2].trim()
    if (value === 'true') value = true
    else if (value === 'false') value = false
    meta[kv[1]] = value
  }
  return { meta, body: match[2].trim() }
}

function slugFromPath(path) {
  return path.split('/').pop().replace(/\.md$/, '')
}

export const articles = Object.entries(files)
  .map(([path, raw]) => {
    const { meta, body } = parseFrontmatter(raw)
    return {
      slug: meta.slug || slugFromPath(path),
      title: meta.title || 'Untitled',
      eyebrow: meta.eyebrow || 'Article',
      subtitle: meta.subtitle || '',
      date: meta.date || '',
      readingTime: meta.readingTime || '',
      excerpt: meta.excerpt || '',
      featured: meta.featured === true,
      body,
    }
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1))

export function getArticle(slug) {
  return articles.find((a) => a.slug === slug)
}
