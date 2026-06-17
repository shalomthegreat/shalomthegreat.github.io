// All site content, ported from the original Jekyll site, kept as structured data
// so the UI stays minimal, adaptable, and easy to update.

export const profile = {
  name: 'Shalom R.',
  alias: 'Story Sniper',
  role: 'Software Engineer',
  location: 'Salt Lake Valley, Utah',
  email: 'connect@shalomr.dev',
  url: 'https://shalomr.dev',
  avatar: '/img/avi.jpg',
  tagline:
    'Product focused engineer crafting blockchain, Web3, and AI experiences — with a love for clean code and great UX.',
  intro:
    "I'm a software engineer who lives and works in the beautiful Salt Lake Valley. I moved here from Seattle in 2019 — the sunshine, open spaces, and community spirit captured my heart and led me to call this home. I'm passionate about blockchain and Web 3.0, AI, user experience, and the importance of using technology in a sustainable and responsible way.",
  sustainabilityLink:
    'https://www.devdiscourse.com/article/science-environment/2443678-the-role-of-technology-in-sustainable-development',
}

export const socials = [
  { type: 'GitHub', icon: 'github', url: 'https://github.com/shalomthegreat' },
  { type: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/shalomr' },
  { type: 'Email', icon: 'mail', url: 'mailto:connect@shalomr.dev' },
]

export const skills = [
  'TypeScript / JavaScript',
  'React / Vue / Angular',
  'Node.js',
  'Blockchain / Web3',
  'Mobile (Android & iOS)',
  'Desktop (Electron)',
  'UI / UX Design',
  'System Architecture',
]

// Career story
export const story = [
  {
    title: 'How I got started',
    period: 'Teenage years',
    body: "All throughout my early years I explored the world of Linux software, Windows registry pranks, creating my own Windows themes, upgrading my PC hardware, and building my own websites. Encouraged by good friends, I started learning programming languages — beginning with C and C++ during high school. My path was derailed by family hardships, so instead of college I steered my time toward a freelancing business, providing local businesses with full-stack web & media solutions using HTML5, jQuery, Angular, and even custom frameworks.",
  },
  {
    title: 'The adventure begins',
    period: 'Late 2017',
    body: "I asked God to open doors for me to pursue my true passion in software engineering. It wasn't long after that an opportunity opened up at a local startup. What began as a website re-skin became an almost 4-year tenure — revamping and building new products from the ground up. My reputation for quick, efficient, bug-free work and strong task management landed me a lead role. By mid-2020, our team of three devs was so efficient we built a ground-up social media app for Android and iOS in a record three months. Unfortunately, due to COVID losses and rapid market changes, the company closed its doors not long after.",
  },
  {
    title: 'Achievement unlocked',
    period: '2021 – 2023',
    body: 'I was among the first few devs hired at a visionary blockchain and Web3 tech incubator called BlockBot. Over two years, we grew from a handful of devs to over 200 employees. As lead developer for their multi-platform mining software, I architected the auto-update system essential for customer retention, trained new employees, and revamped the application into a modern dashboard with analytics and reporting. Our customer base grew exponentially and retention was higher than ever. With a small but mighty team, we launched eight complete blockchain ecosystems for eight companies.',
  },
]

export const web3Companies = [
  { name: 'Connect United', url: 'https://www.ConnectUnited.com' },
  { name: 'Elevate United', url: 'https://ElevateUnited.com' },
  { name: 'Galvan', url: 'https://www.Galvan.health', note: 'revolutionizing health care' },
  {
    name: 'Lemonaide',
    url: 'https://www.Lemonaide.co',
    note: 'making charitable organizations transparent through blockchain',
  },
  { name: 'Liberty Blockchain', url: 'https://www.pioneerdevgrp.com' },
  { name: 'Nerd United', url: 'https://www.NerdUnited.com' },
  { name: 'Set Power Free', url: 'https://www.SetPowerFree.com', note: 'making power sustainable' },
  { name: 'Switch Reward Card', url: 'https://www.SwitchRewardCard.com' },
]

// Projects & Apps
export const projects = [
  { // Continuous Ninja
    title: 'Continuous Ninja',
    category: 'Web',
    description:
      'A platform for continuous deployment and DevOps automation. Built for small teams to reduce overhead and complexity.',
    links: [
      {
        label: 'Prototype',
        url: 'https://demos--shalomthegreat.app.continuous.ninja/sites/C-Ninja/CN-3.html?theme=blue',
      },
      {
        label: 'Live Application',
        url: 'https://continuous.ninja',
      },
    ],
    tags: ['Web', 'SaaS', 'DevOps', 'Key Contributor'],
    featured: true
  },
  // Web3 Pioneers
  {
    title: 'Blockchain Web3 Platform',
    category: 'Web',
    description:
      'A platform for Web3 pioneers to host wallets, provide utility tokens, and grow communities.',
    to: '/projects/web3-pioneers',
    tags: ['Web', 'SaaS', 'Web3', 'Key Contributor'],
    featured: true
  },
  {
    title: 'CRM & Marketing Platforms',
    category: 'Web',
    description:
      'Building custom full-suite CRM and marketing platforms, helping businesses manage customers and campaigns. Supporting companies such as: Solex, ViaVeta, DupliMark, and Envex.',
    // url: 'https://duplimark.com',
    tags: ['Web', 'SaaS', 'CRM', 'Key Contributor'],
  },
  {
    title: 'SetPowerFree — GUI Mining Software',
    category: 'Desktop',
    description:
      'Cross-platform desktop mining client for the Green Blockchain, featuring a modern dashboard, analytics, and an auto-update system.',
    to: '/projects/setpowerfree',
    tags: ['Desktop', 'Blockchain', 'Electron', 'Key Architect'],
    featured: true,
  },
  {
    title: 'CLI Mining Software',
    category: 'Desktop',
    description:
      'A lightweight command-line mining client with a custom built delivery and installation system.',
    url: 'https://www.galvan.health/nodes',
    tags: ['CLI', 'Blockchain', 'Key Architect'],
    // links: [
    //   {
    //     label: 'Custom Delivery System',
    //     url: 'https://download.nerdunited.net/node-binaries/install/NODE_INSTALL.html',
    //   },
    //   {
    //     label: 'Custom Installation Script',
    //     url: 'https://download.nerdunited.net/node-binaries/install/mac.sh',
    //   },
    // ],
    featured: true,
  },
  {
    title: 'BotaWave — Social Media App',
    category: 'Mobile',
    description: 'A ground-up closed-community social media application.',
    // url: 'https://play.google.com/store/apps/details?id=com.duplimark.fba.botawave&hl=en_US&gl=US',
    tags: ['Mobile', 'Social', 'Key Contributor'],
  },
  {
    title: 'BotaWave Pro',
    category: 'Mobile',
    description: 'The pro edition of the BotaWave social platform, enabling power users to build a following.',
    // url: 'https://play.google.com/store/apps/details?id=com.duplimark.botawave&hl=en_US&gl=US',
    tags: ['Mobile', 'CRM', 'Key Contributor'],
  },
  {
    title: '5HourPlan',
    category: 'Mobile',
    description: 'A productivity and planning app for marketing professionals.',
    // url: 'https://play.google.com/store/apps/details?id=com.duplimark.fivehp&hl=en_US&gl=US',
    tags: ['Mobile', 'Productivity', 'CRM', 'Key Contributor'],
  },
]

// Serverless mini-apps. Served as static files.
export const playground = [
  {
    title: 'Recipe Formatter',
    description:
      'Save your favorite online recipes WITH your custom edits. Format recipes for printing without the ads and clutter, and save them for offline viewing.',
    url: '/recipe.html',
    icon: 'chef-hat',
  },
  {
    title: 'Allergy Journal',
    description:
      'A simple, offline-friendly journal to track your health and log allergy symptoms over time.',
    url: '/log.html',
    icon: 'notebook-pen',
  },
]

// SetPowerFree initiative writeup (full post).
export const setPowerFree = {
  title: 'The SetPowerFree Initiative',
  date: '2023-11-16',
  intro:
    'GREEN is a digital reward of the Green Blockchain that measures energy contribution to blockchain technologies. As a distributed energy network, the Green Blockchain and its community work to Set Power Free.',
  steps: [
    {
      title: 'Activate a green account',
      body: 'Create a free account to get started.',
      link: { label: 'setpowerfree.com', url: 'https://setpowerfree.com/' },
    },
    {
      title: 'Download a green node',
      body: 'Once your free account is set up, you can begin supporting the network.',
      downloads: [
        { os: 'Mac', url: 'https://static.share.green/softnode/green_mac.dmg' },
        { os: 'Windows', url: 'https://static.share.green/softnode/green_win.exe' },
        { os: 'Linux', url: 'https://static.share.green/softnode/green_linux.AppImage' },
      ],
    },
    {
      title: 'Activate your green node',
      body: 'After the standard download process for your OS, log in with the same credentials from your free green account. Even without a license you can support the blockchain.',
    },
    {
      title: 'Earn rewards',
      body: 'GREEN rewards are distributed to active node owners who hold a mining license, managed in the SetPowerFree app. To purchase a license and access rewards, log in to your account.',
      link: { label: 'app.setpowerfree.com', url: 'https://app.setpowerfree.com/login' },
      tip: 'During wallet setup, write down your 12-word pass phrase and secure it somewhere safe. This happens once and is not recoverable — SetPowerFree is a non-custodial wallet.',
    },
  ],
}

// AI creation profiles — links out to external platforms.
export const aiProfiles = [
  {
    title: 'MidJourney',
    category: 'AI Imagery',
    description: 'Characters, worlds, and art styles explored through MidJourney prompts.',
    tags: ['Image Gen', 'Concept Art'],
    url: 'https://www.midjourney.com/@sumer.ai?tab=spotlight',
  },
  {
    title: 'Suno',
    category: 'AI Music',
    description: 'Original tracks and soundscapes generated and arranged with Suno.',
    tags: ['Music Gen', 'Audio'],
    url: 'https://suno.com/@BeatBot33k',
  },
]

// MidJourney AI art gallery.
export const artGallery = [
  // {
  //   title: 'Lady Samurai',
  //   images: [
  //     'https://media.discordapp.net/attachments/1059558297876836393/1155649159773298858/sumer.ai_a_female_samurai_with_intricate_armor_purple_e3da8f20-edbf-43b0-9634-a9890e7c78fa.png?width=600&height=600',
  //     'https://media.discordapp.net/attachments/1059558297876836393/1155657604312350802/sumer.ai_a_female_samurai_with_intricate_armor_purple_450ae5f5-3096-4aea-9936-1b11986eb263.png?width=600&height=600',
  //   ],
  // },
  // {
  //   title: 'Listen to the Music',
  //   images: [
  //     'https://media.discordapp.net/attachments/1059558297876836393/1155638491649155092/sumer.ai_cyberpunk_theme_listening_to_music_purple_hair_e1aa8ab4-c5fb-47a2-b960-a64829a7a8d9.png?width=600&height=600',
  //     'https://media.discordapp.net/attachments/1059558297876836393/1155639520423858176/sumer.ai_cyberpunk_theme_listening_to_music_b766393f-a79f-484e-b2de-5f7cccd11f5e.png?width=600&height=600',
  //   ],
  // }
]

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Playground', to: '/playground' },
  { label: 'AI Art', to: '/art' },
]
