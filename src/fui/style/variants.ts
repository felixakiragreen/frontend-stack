import { fluidSpace, fluidSpaceAliases } from '../fluid'
import type { CSS } from '../types'

type ShirtKey =
	| 'xs'
	| 'sm'
	| 'md'
	| 'lg'
	| 'xl'
	| 'no'
	| '2xl'
	| '3xl'
	| '4xl'
	| '5xl'

export function generateSpaceVariants(property: string) {
	const object: {
		[key in ShirtKey]: CSS
	} = {
		xs: {},
		sm: {},
		md: {},
		lg: {},
		xl: {},
		no: {},
		'2xl': {},
		'3xl': {},
		'4xl': {},
		'5xl': {},
	}

	fluidSpaceAliases.shirtKeys.forEach((value, index) => {
		object[value as ShirtKey] = {
			[property]: `$${index}`,
		}
	})
	return object
}

// useful: https://konstantin.digital/blog/generating-stitches-variants-for-theme-colors
// make color variants
