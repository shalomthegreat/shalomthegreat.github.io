import { Github, Linkedin, Mail } from 'lucide-react'

const map = { github: Github, linkedin: Linkedin, mail: Mail }

export default function SocialIcon({ name, size = 18 }) {
  const Icon = map[name] || Mail
  return <Icon size={size} />
}
