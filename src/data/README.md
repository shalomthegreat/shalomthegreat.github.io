# Content Data Structures & Types

This directory houses the structured content data that powers the application, ensuring a minimal, adaptable, and easy-to-update user interface.

---

## Data Structures Overview

### `profile`
An object containing primary personal and professional brand details of the profile owner.

#### Type Definition
```typescript
interface Profile {
  name: string;
  alias: string;
  role: string;
  location: string;
  email: string;
  url: string;
  avatar: string; // Path or URL to the avatar image
  tagline: string; // One-sentence elevator pitch
  intro: string; // Multi-sentence detailed bio
  sustainabilityLink: string; // URL to external resource about tech/sustainability
}
```

#### Example Shape
```javascript
export const profile = {
  name: 'Shalom R.',
  alias: 'Story Sniper',
  role: 'Software Engineer',
  location: 'Salt Lake Valley, Utah',
  email: 'connect@shalomr.dev',
  url: 'https://shalomr.dev',
  avatar: '/img/avi.jpg',
  tagline: 'Product focused engineer...',
  intro: "I'm a software engineer...",
  sustainabilityLink: 'https://...'
}
```

#### Usage
- **Navbar**: [src/components/Navbar.jsx](../components/Navbar.jsx) — renders the header logo and identity.
- **Footer**: [src/components/Footer.jsx](../components/Footer.jsx) — renders copyright and email.
- **Homepage**: [src/pages/Home.jsx](../pages/Home.jsx) — renders the main tagline and name in the hero section.
- **About Page**: [src/pages/About.jsx](../pages/About.jsx) — renders the introductory bio and sustainability details link.

---

### `socials`
An array of objects specifying social links for profile connectivity, typically rendered as icons.

#### Type Definition
```typescript
interface SocialLink {
  type: string; // e.g., 'GitHub', 'LinkedIn', 'Email'
  icon: string; // Lucide or custom icon identifier (e.g., 'github', 'linkedin', 'mail')
  url: string;  // Destination URL
}

type SocialsList = SocialLink[];
```

#### Example Shape
```javascript
export const socials = [
  { type: 'GitHub', icon: 'github', url: 'https://github.com/shalomthegreat' },
  { type: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/shalomr' }
]
```

#### Usage
- **Homepage**: [src/pages/Home.jsx](../pages/Home.jsx) — renders quick-contact icons in the hero section.
- **Footer**: [src/components/Footer.jsx](../components/Footer.jsx) — renders primary contact links in the footer grid.

---

### `skills`
An array of key professional skills or technology categories.

#### Type Definition
```typescript
type SkillsList = string[];
```

#### Example Shape
```javascript
export const skills = [
  'TypeScript / JavaScript',
  'React / Vue / Angular',
  'Node.js',
  'Blockchain / Web3'
]
```

#### Usage
- **Homepage**: [src/pages/Home.jsx](../pages/Home.jsx) — renders professional skills as styled badges.

---

### `story`
An array of objects forming the career narrative chronological sections.

#### Type Definition
```typescript
interface StoryMilestone {
  title: string;  // Heading of the career milestone
  period: string; // Chronological indicator (e.g., 'Teenage years', '2021 – 2023')
  body: string;   // Paragraph text detailed description
}

type StoryList = StoryMilestone[];
```

#### Usage
- **About Page**: [src/pages/About.jsx](../pages/About.jsx) — renders chronological career milestones.

---

### `web3Companies`
A collection of partnered or incubated Web3 companies.

#### Type Definition
```typescript
interface Web3Company {
  name: string;
  url: string;
  note?: string; // Optional context or slogan (e.g., 'revolutionizing health care')
}

type Web3CompaniesList = Web3Company[];
```

#### Usage
- **Web3 Pioneers Page**: [src/pages/projects/Web3Pioneers.jsx](../pages/projects/Web3Pioneers.jsx) — renders a list of partnered/incubated blockchain projects.

---

### `projects`
An array of featured software projects and applications. This drives the Projects portfolio page.

#### Type Definition
```typescript
interface ProjectLink {
  label: string; // Action label (e.g., 'Prototype', 'Live Application', 'Project Summary PDF')
  url: string;   // Hyperlink path or resource path (such as static PDFs)
}

interface Project {
  title: string;
  category: 'Web' | 'Desktop' | 'Mobile' | string;
  description: string;
  tags: string[]; // List of tags (e.g., 'Web', 'SaaS', 'Key Contributor')
  featured?: boolean; // If true, showcases the project on high priority / featured filters
  links?: ProjectLink[]; // Optional links array
  to?: string; // Optional internal router link (e.g., '/projects/setpowerfree'), mutually exclusive with direct external links
  url?: string; // Optional direct external link
}

type ProjectsList = Project[];
```

#### Usage
- **Projects Page**: [src/pages/projects/Projects.jsx](../pages/projects/Projects.jsx) — renders the project grid filterable by category tags.

---

### `playground`
A collection of static serverless mini-apps or utilities served inline or as standalone files.

#### Type Definition
```typescript
interface PlaygroundApp {
  title: string;
  description: string;
  url: string;  // Internal path to static HTML mini-apps (e.g., '/recipe.html')
  icon: string; // Lucide icon identifier (e.g., 'chef-hat', 'notebook-pen')
}

type PlaygroundList = PlaygroundApp[];
```

#### Usage
- **Playground Page**: [src/pages/Playground.jsx](../pages/Playground.jsx) — renders inline utilities / mini-apps grid cards.

---

### `setPowerFree`
Full post structure describing details and interactive node downloads/setup steps for the "SetPowerFree" initiative.

#### Type Definition
```typescript
interface StepDownload {
  os: 'Mac' | 'Windows' | 'Linux' | string;
  url: string; // Direct installation binary URL
}

interface StepLink {
  label: string;
  url: string;
}

interface Step {
  title: string;
  body: string;
  link?: StepLink; // Optional helper link
  downloads?: StepDownload[]; // Optional downloads config
  tip?: string; // Optional callout/tip text
}

interface InitiativeDetails {
  title: string;
  date: string;  // YYYY-MM-DD
  intro: string;
  steps: Step[];
}
```

#### Usage
- **SetPowerFree Page**: [src/pages/projects/SetPowerFree.jsx](../pages/projects/SetPowerFree.jsx) — renders the campaign description, steps, and node installer downloads.

---

### `aiProfiles`
A list of links and details to creative/concept art profiles on AI generation platforms.

#### Type Definition
```typescript
interface AIProfile {
  title: string;       // e.g., 'MidJourney', 'Suno'
  category: string;    // e.g., 'AI Imagery', 'AI Music'
  description: string;
  tags: string[];      // e.g., ['Image Gen', 'Concept Art']
  url: string;         // Link to the user profile
}

type AIProfilesList = AIProfile[];
```

#### Usage
- **AI Art Page**: [src/pages/Art.jsx](../pages/Art.jsx) — renders external AI portfolio links.

---

### `artGallery`
A structured grid or container for showcasing generated artwork.

#### Type Definition
```typescript
interface ArtAlbum {
  title: string;
  images: string[]; // URLs of imagery
}

type ArtGalleryList = ArtAlbum[];
```

#### Usage
- **AI Art Page**: [src/pages/Art.jsx](../pages/Art.jsx) — renders the interactive grid of showcase art.

---

### `navLinks`
The application's navigation scheme, dictating the items in navbar and footer structures.

#### Type Definition
```typescript
interface NavLink {
  label: string; // Text shown in navigation
  to: string;    // Path/Route matching React Router configuration (e.g., '/', '/about', '/projects')
}

type NavLinksList = NavLink[];
```

#### Usage
- **Navbar**: [src/components/Navbar.jsx](../components/Navbar.jsx) — drives the header navigation links.
- **Footer**: [src/components/Footer.jsx](../components/Footer.jsx) — drives the footer navigation directory list.

---

## Articles

Unlike the structures above, articles are **not** authored in `content/mainPageContent.js`. Each
article is a standalone Markdown file in
[`src/data/content/articles/`](./content/articles). Drop in a new `.md` file and it
automatically appears in the gallery and gets its own route at
`/articles/<filename>` — no code changes required.

### Loader

[`src/data/articlesProvider.js`](./articlesProvider.js) globs every `*.md` file at build time
(`import.meta.glob`), parses the frontmatter, and exports a sorted `articles`
array plus a `getArticle(slug)` helper.

```typescript
interface Article {
  slug: string;        // defaults to the filename (without .md)
  title: string;       // may contain *italic* markup (rendered in accent)
  eyebrow: string;     // small uppercase category line
  subtitle: string;
  date: string;        // YYYY-MM-DD (used for sorting, newest first)
  readingTime: string; // e.g. '12 min read'
  excerpt: string;     // shown on the gallery card
  featured: boolean;
  body: string;        // raw markdown body (everything after frontmatter)
}
```

### Frontmatter

A minimal `key: value` block fenced by `---`. Booleans (`true`/`false`) are
coerced; everything else stays a string.

```markdown
---
title: Distributed *Minds*
eyebrow: Essay · Epistemics · Technology
subtitle: A short italic standfirst.
date: 2025-01-12
readingTime: 12 min read
excerpt: One-or-two sentence summary for the gallery card.
featured: true
---
```

### Supported Markdown (intentionally limited)

Rendered by [`src/components/Markdown.jsx`](../components/Markdown.jsx). Only the following are
supported — anything else is treated as plain paragraph text:

- **Block:** `## h2` (section, auto top-rule), `### h3` (accent sub-head),
  `> blockquote` (pull quote), `- ` / `* ` unordered lists, `1. ` ordered lists.
- **Inline:** `**bold**`, `*italic*` / `_italic_`, `[text](url)`.
- **Custom blocks:**
  - `:::triad … :::` — a 3-step flow grid; items are `### Label` + body text.
  - `:::coda Label … :::` — a closing callout; `Label` is optional.

```markdown
:::triad
### Emotion
The fastest and most holistic signal.
### Intuition
Compressed experience below articulation.
### Reason
Slow, articulable, checkable.
:::

:::coda In Closing
The closing thought, set in display type.
:::
```

#### Usage
- **Gallery**: [src/pages/articles/Articles.jsx](../pages/articles/Articles.jsx) — renders the stacked list of article cards.
- **Article view**: [src/pages/articles/ArticleViewer.jsx](../pages/articles/ArticleViewer.jsx) — renders a single article header + parsed body.
