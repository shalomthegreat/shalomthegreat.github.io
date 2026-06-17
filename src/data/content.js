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
    'Software engineer crafting blockchain, Web3, and AI experiences — with a love for clean code and great UX.',
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
  'React & Angular',
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
    body: "All throughout my teenage years (and even before), I explored the world of Linux software, Windows registry pranks, creating my own Windows themes, upgrading my PC hardware, and building my own websites and small computer applications. Encouraged by good friends, I started learning programming languages — beginning with C and C++ right after high school. My path was derailed by family hardships, so instead of college I steered my time toward a freelancing business, providing local businesses with full-stack web & media solutions using HTML5, jQuery, Angular, and even custom frameworks.",
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
  {
    title: 'CRM & Marketing Platform',
    category: 'Web',
    description:
      'A full CRM and marketing platform helping businesses manage customers and campaigns.',
    url: 'https://duplimark.com',
    tags: ['Web', 'SaaS', 'CRM'],
    featured: true,
  },
  {
    title: 'SetPowerFree — GUI Mining Software',
    category: 'Desktop',
    description:
      'Cross-platform desktop mining client for the Green Blockchain, featuring a modern dashboard, analytics, and an auto-update system.',
    to: '/projects/setpowerfree',
    tags: ['Desktop', 'Blockchain', 'Electron'],
    featured: true,
  },
  {
    title: 'CLI Mining Software',
    category: 'Desktop',
    description:
      'A lightweight command-line mining client with a custom delivery and installation system.',
    url: 'https://download.nerdunited.com/node-binaries/hyper/prod/hyper_darwin-amd64',
    tags: ['CLI', 'Blockchain'],
    links: [
      {
        label: 'Custom Delivery System',
        url: 'https://download.nerdunited.net/node-binaries/install/NODE_INSTALL.html',
      },
      {
        label: 'Custom Installation Script',
        url: 'https://download.nerdunited.net/node-binaries/install/mac.sh',
      },
    ],
  },
  {
    title: 'BotaWave — Social Media App',
    category: 'Android',
    description: 'A ground-up social media application for Android.',
    url: 'https://play.google.com/store/apps/details?id=com.duplimark.fba.botawave&hl=en_US&gl=US',
    tags: ['Android', 'Mobile', 'Social'],
  },
  {
    title: 'BotaWave Pro',
    category: 'Android',
    description: 'The pro edition of the BotaWave social platform.',
    url: 'https://play.google.com/store/apps/details?id=com.duplimark.botawave&hl=en_US&gl=US',
    tags: ['Android', 'Mobile'],
  },
  {
    title: '5HourPlan',
    category: 'Android',
    description: 'A productivity and planning app published on the Play Store.',
    url: 'https://play.google.com/store/apps/details?id=com.duplimark.fivehp&hl=en_US&gl=US',
    tags: ['Android', 'Productivity'],
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

// MidJourney AI art gallery.
export const artGallery = [
  {
    title: 'Lady Samurai',
    images: [
      'https://media.discordapp.net/attachments/1059558297876836393/1155649159773298858/sumer.ai_a_female_samurai_with_intricate_armor_purple_e3da8f20-edbf-43b0-9634-a9890e7c78fa.png?width=600&height=600',
      'https://media.discordapp.net/attachments/1059558297876836393/1155657604312350802/sumer.ai_a_female_samurai_with_intricate_armor_purple_450ae5f5-3096-4aea-9936-1b11986eb263.png?width=600&height=600',
    ],
  },
  {
    title: 'Listen to the Music',
    images: [
      'https://media.discordapp.net/attachments/1059558297876836393/1155638491649155092/sumer.ai_cyberpunk_theme_listening_to_music_purple_hair_e1aa8ab4-c5fb-47a2-b960-a64829a7a8d9.png?width=600&height=600',
      'https://media.discordapp.net/attachments/1059558297876836393/1155639520423858176/sumer.ai_cyberpunk_theme_listening_to_music_b766393f-a79f-484e-b2de-5f7cccd11f5e.png?width=600&height=600',
    ],
  },
  {
    title: 'The Stormlight Archive',
    images: [
      'https://media.discordapp.net/attachments/1059558297876836393/1120496400757706834/sumer.ai_kaladin_stormblessed_from_The_Way_of_Kings_26ee50fa-60e6-4694-860c-adc449b7d027.png?width=600&height=600',
      'https://media.discordapp.net/attachments/1059558297876836393/1120496393480585326/sumer.ai_kaladin_stormblessed_from_The_Way_of_Kings_da70660c-a68f-444a-b371-1f27f9877d27.png?width=600&height=600',
    ],
  },
  {
    title: 'Disney Reimagined',
    images: [
      'https://media.discordapp.net/attachments/1059558297876836393/1089021763586895972/sumer.ai_a_beautiful_lady_wearing_a_long_dark_purple_dress_with_5358fb60-7c06-4cf6-a1d8-28901903a32f.png?width=600&height=600',
      'https://media.discordapp.net/attachments/1059558297876836393/1088702279986712678/sumer.ai_a_beautiful_lady_wearing_a_medieval_purple_dress_with__fe38daec-3e71-467a-bd15-82486cff3ab1.png?width=600&height=600',
      'https://media.discordapp.net/attachments/1059558297876836393/1088682469357801572/sumer.ai_a_portrait_of_an_18-year-old_girl_fairy_tale_blue_dres_1b55193c-40d6-45a3-998d-0e9e573bb62d.png?width=600&height=600',
      'https://media.discordapp.net/attachments/1059558297876836393/1088676796867817562/sumer.ai_a_portrait_of_an_18-year-old_girl_fairy_tale_blue_dres_4f8ea0a5-f4a5-495b-aff4-8a68a2c03f1d.png?width=600&height=600',
      'https://media.discordapp.net/attachments/1059558297876836393/1149892818890932304/sumer.ai_a_beautiful_fantasy_princess_6e3993d5-7158-4e00-9272-c36f2d015f6d.png?width=600&height=600',
      'https://media.discordapp.net/attachments/1059558297876836393/1088673671809339432/sumer.ai_a_portrait_of_an_18-year-old_girl_fairy_tale_blue_dres_20498772-9121-489f-800e-17e891ccbc76.png?width=600&height=600',
      'https://media.discordapp.net/attachments/1059558297876836393/1085488185032847410/sumer.ai_princess_Aurora_in_an_orange_dress_7725bb00-da07-40ce-9587-8c82bdfa656f.png?width=600&height=600',
      'https://media.discordapp.net/attachments/1059558297876836393/1085487730101858304/sumer.ai_a_princess_wearing_an_aqua_green_shimmering_dress_she__96095a48-ba5c-40bc-aa69-cec19c16db65.png?width=600&height=600',
      'https://cdn.discordapp.com/attachments/1059558297876836393/1156727308388937808/sumer.ai_the_fairy_tale_princess_Sleeping_Beauty_in_a_white_dre_23f66e74-3303-45ac-9832-bed99d167ac7.png?width=600&height=600',
    ],
  },
  {
    title: 'Comic-Book Heroine',
    images: [
      'https://media.discordapp.net/attachments/1059558297876836393/1073458573364973629/sumer.ai_video_portrait_game_character_like_samus_aran_holding__a5f76ef8-f42b-48e1-a3f9-245212ea4c6e.png?width=600&height=600',
      'https://media.discordapp.net/attachments/1059558297876836393/1073450858928418816/sumer.ai_portrait_video_game_character_like_samus_aran_ce599309-f757-4021-81ed-16850b09296d.png?width=600&height=600',
    ],
  },
  {
    title: 'Sci-Fi Fighter',
    images: [
      'https://cdn.discordapp.com/attachments/1059558297876836393/1156730554293686282/sumer.ai_a_female_sci-fi_fighter_techy_purple_cute_b42faf35-a5c2-46fe-b58a-f093c2dedd8d.png?width=600&height=600',
      'https://cdn.discordapp.com/attachments/1059558297876836393/1156730886960713739/sumer.ai_a_female_sci-fi_fighter_techy_purple_cute_edf85819-ba05-4977-9e9b-4816fc43cc96.png?width=600&height=600',
    ],
  },
  {
    title: 'Lady Knight',
    images: [
      'https://cdn.discordapp.com/attachments/1059558297876836393/1155624039713345606/sumer.ai_a_lady_knight_with_intricate_gold_and_silver_armor_7371e650-6e37-443e-882b-0cb621614858.png?width=600&height=600',
      'https://cdn.discordapp.com/attachments/1059558297876836393/1154878170382745631/sumer.ai_a_portrait_of_a_beautiful_female_warrior_holding_a_bro_7b6dd027-c119-4edd-90bb-24c392057509.png?width=600&height=600',
    ],
  },
  {
    title: 'Rain',
    images: [
      'https://media.discordapp.net/attachments/1059558297876836393/1081445178352619572/sumer.ai_a_rainy_day_cinematic_lighting_a_girl_holding_an_umbre_d26404a7-1976-4af3-a7ba-b0362161b351.png?width=600&height=600',
      'https://media.discordapp.net/attachments/1059558297876836393/1081448956262883448/sumer.ai_a_rainy_day_cinematic_lighting_a_young_woman_looking_u_b7e492e3-b802-4335-928b-6911b7af260f.png?width=600&height=600',
    ],
  },
  {
    title: 'Light',
    images: [
      'https://media.discordapp.net/attachments/1059558297876836393/1081451193932455996/sumer.ai_rainy_day_at_sunset_looking_through_a_window_with_rain_81268197-46c3-4d8f-9dd1-4b5b0fdde23a.png?width=600&height=600',
      'https://media.discordapp.net/attachments/1059558297876836393/1075255656279449600/sumer.ai_a_teenage_girl_with_black_hair_shes_wearing_an_elven_g_b91d4cdb-5fe7-418e-9e35-6b218f41e0ab.png?width=600&height=600',
    ],
  },
]

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Playground', to: '/playground' },
  { label: 'AI Art', to: '/art' },
]
