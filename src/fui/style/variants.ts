import type { CSS } from '../types'
import { theme } from '../stitches.config'

// Useful Reference: https://konstantin.digital/blog/generating-stitches-variants-for-theme-colors

export function generateSpaceVariants(property: string) {
	return Object.values(theme.space).reduce((prev, curr) => {
		return {
			//
			...prev,
			[curr.token]: {
				[property]: `$${curr.token}`,
			},
		}
	}, {}) as Record<keyof typeof theme.space, CSS>
}

export function generateColorVariants(property: string) {
	return Object.values(theme.colors).reduce((prev, curr) => {
		return {
			//
			...prev,
			[curr.token]: {
				[property]: `$${curr.token}`,
			},
		}
	}, {}) as Record<keyof typeof theme.colors, CSS>
}
