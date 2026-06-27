import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { profile } from '../data/content/mainPageContent'

/**
 * SEO component to dynamically manage document metadata and social media preview tags.
 *
 * @param {Object} props
 * @param {string} props.title - Page title (will be suffixed with " — Software Engineer" or similar if requested)
 * @param {string} [props.description] - Meta description
 * @param {string} [props.image] - URL of preview image
 * @param {string} [props.type] - og:type (default: "website")
 * @param {boolean} [props.exactTitle] - If true, doesn't append the suffix to the title
 */
export default function SEO({
  title,
  description = profile.tagline,
  image = '/img/slc.jpeg',
  type = 'website',
  exactTitle = false,
}) {
  const { pathname } = useLocation()

  useEffect(() => {
    // 1. Set Title
    const finalTitle = exactTitle ? title : `${title} — ${profile.name}`
    document.title = finalTitle

    // 2. Base absolute URL resolution for images and URLs
    const siteUrl = profile.url || window.location.origin || 'https://shalomr.dev'
    const absoluteUrl = `${siteUrl}${pathname}`
    
    let absoluteImageUrl = image
    if (image.startsWith('/')) {
      absoluteImageUrl = `${siteUrl}${image}`
    }

    // Helper to update or create a meta tag
    const updateMetaTag = (attribute, value, content) => {
      let element = document.querySelector(`meta[${attribute}="${value}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, value)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // Update standard meta description
    updateMetaTag('name', 'description', description)

    // Update Open Graph tags
    updateMetaTag('property', 'og:title', finalTitle)
    updateMetaTag('property', 'og:description', description)
    updateMetaTag('property', 'og:image', absoluteImageUrl)
    updateMetaTag('property', 'og:url', absoluteUrl)
    updateMetaTag('property', 'og:type', type)

    // Update Twitter Cards tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image')
    updateMetaTag('name', 'twitter:title', finalTitle)
    updateMetaTag('name', 'twitter:description', description)
    updateMetaTag('name', 'twitter:image', absoluteImageUrl)

  }, [title, description, image, type, exactTitle, pathname])

  return null
}
