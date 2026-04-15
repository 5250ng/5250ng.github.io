// Single source of truth for site-wide constants.
// Change the GitHub owner/repo or domain here, nowhere else.

export const SITE = {
  name: '5250ng',
  title: '5250ng — A modern TN5250 terminal emulator for IBM i and AS/400',
  description:
    'Open-source TN5250 terminal emulator built with Qt6 and C++17. Full RFC 1205 protocol, 13 code pages, a scripting language, and an embedded Model Context Protocol server.',
  url: 'https://5250ng.com',
  github: 'https://github.com/5250ng/5250ng',
  releasesLatest: 'https://github.com/5250ng/5250ng/releases/latest',
  releases: 'https://github.com/5250ng/5250ng/releases',
  author: 'p0dalirius',
  authorUrl: 'https://github.com/p0dalirius',
  license: 'GPL-3.0',
} as const;
