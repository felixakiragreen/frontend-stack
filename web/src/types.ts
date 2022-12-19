import type { CSS } from '@/ui'
export type { CSS }

export const baseColors = [
	'red',
	'orange',
	'yellow',
	'green',
	'blue',
	'purple',
	'grey',
] as const
export type Color = typeof baseColors[number]
