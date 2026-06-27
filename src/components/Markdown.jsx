// Minimal, intentionally-limited Markdown renderer for the articles section.
//
// Supported (and ONLY these) features — kept small on purpose:
//   Block level:
//     ## Heading              -> section heading (h2)
//     ### Heading             -> sub heading (h3, small-caps accent)
//     > quote                 -> pull quote (blockquote)
//     - item / * item         -> unordered list
//     1. item                 -> ordered list (rendered as numbered "principles")
//     paragraph text          -> paragraph
//   Custom blocks:
//     :::triad ... :::        -> 3-step flow grid (items are `### Label` + body)
//     :::coda Label ... :::   -> closing callout (Label is optional)
//   Inline:
//     **bold**  *italic*  _italic_  [text](url)
//
// Anything else is treated as plain paragraph text. This is deliberate — we
// only support what the article styles need.

const INLINE_RE =
  /(\*\*([^*]+)\*\*|\*([^*]+)\*|_([^_]+)_|\[([^\]]+)\]\(([^)]+)\))/g

// Parse inline markup within a single line of text into React nodes.
export function renderInline(text, keyPrefix = 'i') {
  const nodes = []
  let lastIndex = 0
  let match
  let n = 0
  INLINE_RE.lastIndex = 0

  while ((match = INLINE_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }
    const key = `${keyPrefix}-${n++}`
    if (match[2] !== undefined) {
      nodes.push(
        <strong key={key} className="font-semibold text-fg">
          {match[2]}
        </strong>,
      )
    } else if (match[3] !== undefined || match[4] !== undefined) {
      nodes.push(
        <em key={key} className="italic">
          {match[3] ?? match[4]}
        </em>,
      )
    } else if (match[5] !== undefined) {
      nodes.push(
        <a
          key={key}
          href={match[6]}
          target="_blank"
          rel="noreferrer"
          className="text-accent underline-offset-2 hover:underline"
        >
          {match[5]}
        </a>,
      )
    }
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex))
  return nodes
}

// Tokenize the markdown body into a flat list of block descriptors.
function tokenize(src) {
  const lines = src.replace(/\r\n/g, '\n').split('\n')
  const blocks = []
  let i = 0

  const isBlank = (l) => l.trim() === ''

  while (i < lines.length) {
    const line = lines[i]

    if (isBlank(line)) {
      i++
      continue
    }

    // Custom fenced blocks: :::triad / :::coda
    const fence = line.match(/^:::(\w+)\s*(.*)$/)
    if (fence) {
      const kind = fence[1]
      const meta = fence[2].trim()
      const inner = []
      i++
      while (i < lines.length && !/^:::\s*$/.test(lines[i])) {
        inner.push(lines[i])
        i++
      }
      i++ // skip closing :::

      if (kind === 'triad') {
        const items = []
        let current = null
        for (const l of inner) {
          const h = l.match(/^###\s+(.*)$/)
          if (h) {
            current = { label: h[1].trim(), body: [] }
            items.push(current)
          } else if (current && !isBlank(l)) {
            current.body.push(l.trim())
          }
        }
        blocks.push({
          type: 'triad',
          items: items.map((it) => ({ label: it.label, body: it.body.join(' ') })),
        })
      } else if (kind === 'coda') {
        const body = inner
          .filter((l) => !isBlank(l))
          .map((l) => l.trim())
          .join(' ')
        blocks.push({ type: 'coda', label: meta || 'In closing', body })
      }
      continue
    }

    // Headings
    let m = line.match(/^##\s+(.*)$/)
    if (m && !line.startsWith('###')) {
      blocks.push({ type: 'h2', text: m[1].trim() })
      i++
      continue
    }
    m = line.match(/^###\s+(.*)$/)
    if (m) {
      blocks.push({ type: 'h3', text: m[1].trim() })
      i++
      continue
    }

    // Blockquote (collect consecutive > lines)
    if (/^>\s?/.test(line)) {
      const buf = []
      while (i < lines.length && /^>\s?/.test(lines[i])) {
        buf.push(lines[i].replace(/^>\s?/, ''))
        i++
      }
      blocks.push({ type: 'quote', text: buf.join(' ').trim() })
      continue
    }

    // Ordered list
    if (/^\d+\.\s+/.test(line)) {
      const items = []
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, '').trim())
        i++
      }
      blocks.push({ type: 'ol', items })
      continue
    }

    // Unordered list
    if (/^[-*]\s+/.test(line)) {
      const items = []
      while (i < lines.length && /^[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^[-*]\s+/, '').trim())
        i++
      }
      blocks.push({ type: 'ul', items })
      continue
    }

    // Paragraph (collect consecutive plain lines)
    const buf = []
    while (
      i < lines.length &&
      !isBlank(lines[i]) &&
      !/^(##|###|>|:::|\d+\.\s|[-*]\s)/.test(lines[i])
    ) {
      buf.push(lines[i].trim())
      i++
    }
    blocks.push({ type: 'p', text: buf.join(' ') })
  }

  return blocks
}

function TriadBlock({ items }) {
  return (
    <div className="my-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
      {items.map((it, idx) => (
        <div key={it.label} className="relative bg-card p-6">
          {idx < items.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-full z-10 grid h-6 w-6 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-br from-accent to-accent2 text-xs text-accent-contrast sm:left-full sm:top-1/2 sm:-translate-x-1/2"
            >
              <span className="sm:hidden">↓</span>
              <span className="hidden sm:inline">→</span>
            </span>
          )}
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            {it.label}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {renderInline(it.body, `triad-${idx}`)}
          </p>
        </div>
      ))}
    </div>
  )
}

function CodaBlock({ label, body }) {
  return (
    <div className="card-featured relative mt-14 overflow-hidden rounded-2xl border border-border p-8 sm:p-10">
      <span
        aria-hidden="true"
        className="absolute left-8 top-0 h-1 w-12 rounded-full bg-gradient-to-r from-accent to-accent2 sm:left-10"
      />
      <span className="block text-xs font-semibold uppercase tracking-widest text-accent">
        {label}
      </span>
      <p className="mt-5 font-display text-xl font-medium leading-relaxed sm:text-2xl">
        {renderInline(body, 'coda')}
      </p>
    </div>
  )
}

export default function Markdown({ children }) {
  const blocks = tokenize(children || '')
  let h2Count = 0

  return (
    <div>
      {blocks.map((b, idx) => {
        switch (b.type) {
          case 'h2': {
            const first = h2Count === 0
            h2Count++
            return (
              <h2
                key={idx}
                className={`font-display text-2xl font-semibold sm:text-3xl ${
                  first ? '' : 'mt-14 border-t border-border pt-12'
                }`}
              >
                {renderInline(b.text, `h2-${idx}`)}
              </h2>
            )
          }
          case 'h3':
            return (
              <h3
                key={idx}
                className="mt-8 text-xs font-semibold uppercase tracking-widest text-accent"
              >
                {renderInline(b.text, `h3-${idx}`)}
              </h3>
            )
          case 'quote':
            return (
              <blockquote
                key={idx}
                className="my-8 rounded-r-xl border-l-4 border-accent bg-accent-soft/30 py-5 pl-6 pr-5"
              >
                <p className="font-display text-lg font-medium italic leading-relaxed sm:text-xl">
                  {renderInline(b.text, `q-${idx}`)}
                </p>
              </blockquote>
            )
          case 'ol':
            return (
              <ol key={idx} className="my-6 space-y-4">
                {b.items.map((it, j) => (
                  <li key={j} className={`flex gap-4 pb-4 ${j < b.items.length - 1 ? 'border-b border-border' : ''}`}>
                    <span className="mt-0.5 font-mono text-xs text-accent2">
                      {String(j + 1).padStart(2, '0')}
                    </span>
                    <span className="leading-relaxed text-muted">
                      {renderInline(it, `ol-${idx}-${j}`)}
                    </span>
                  </li>
                ))}
              </ol>
            )
          case 'ul':
            return (
              <ul key={idx} className="my-6 space-y-2">
                {b.items.map((it, j) => (
                  <li key={j} className="flex gap-3 leading-relaxed text-muted">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{renderInline(it, `ul-${idx}-${j}`)}</span>
                  </li>
                ))}
              </ul>
            )
          case 'triad':
            return <TriadBlock key={idx} items={b.items} />
          case 'coda':
            return <CodaBlock key={idx} label={b.label} body={b.body} />
          case 'p':
          default:
            return (
              <p key={idx} className="mt-5 leading-relaxed text-muted">
                {renderInline(b.text, `p-${idx}`)}
              </p>
            )
        }
      })}
    </div>
  )
}
