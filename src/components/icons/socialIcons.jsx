import { createLucideIcon } from 'lucide-react'

export const Github = createLucideIcon('Github', [
  ['path', { d: 'M12 2A10 10 0 0 0 2 12a10 10 0 0 0 6.84 9.49c.5.09.66-.22.66-.48v-1.72c-2.78.6-3.37-1.18-3.37-1.18-.46-1.15-1.11-1.46-1.11-1.46-.91-.63.07-.61.07-.61 1 .07 1.54 1.03 1.54 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.92 0-1.08.39-1.96 1.02-2.65-.1-.25-.44-1.28.1-2.66 0 0 .85-.27 2.78 1.01A9.7 9.7 0 0 1 12 6.8c.85 0 1.7.12 2.5.35 1.93-1.28 2.78-1.01 2.78-1.01.55 1.38.21 2.41.11 2.66.64.69 1.02 1.57 1.02 2.65 0 3.82-2.34 4.66-4.56 4.91.36.31.68.92.68 1.87v2.77c0 .27.18.58.67.48A10 10 0 0 0 22 12 10 10 0 0 0 12 2Z', key: 'github-path' }]
])

export const Instagram = createLucideIcon('Instagram', [
  ['rect', { x: '3', y: '3', width: '18', height: '18', rx: '5', ry: '5', key: 'instagram-outer' }],
  ['circle', { cx: '12', cy: '12', r: '4', key: 'instagram-inner' }],
  ['circle', { cx: '17.5', cy: '6.5', r: '1', fill: 'currentColor', stroke: 'none', key: 'instagram-dot' }]
])

export const Linkedin = createLucideIcon('Linkedin', [
  ['path', { d: 'M7 10v8', key: 'linkedin-v' }],
  ['path', { d: 'M11 10v8', key: 'linkedin-v2' }],
  ['path', { d: 'M11 14.5c0-2 1.25-3.5 3.5-3.5 2 0 3.5 1.25 3.5 4V18', key: 'linkedin-curve' }],
  ['circle', { cx: '7', cy: '7', r: '1.25', fill: 'currentColor', stroke: 'none', key: 'linkedin-dot' }],
  ['rect', { x: '3', y: '3', width: '18', height: '18', rx: '2', ry: '2', key: 'linkedin-box' }]
])
