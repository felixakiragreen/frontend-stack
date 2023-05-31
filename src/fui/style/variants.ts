import { fluidSpace, fluidSpaceAliases } from '../fluid'
import type { CSS } from '../types'

// type CssVariantObject = {
// 	[variant: string]: {
// 		[value: string]: {
// 			[cssPropertyValue: string]: string
// 		}
// 	}
// }

type CssVariantObject = {
	[Name in string]: {
		[Pair in number | string]: CSS
	}
}

function generateVariants(
	variant: string,
	valuesArray: string[],
	cssPropertyValue: string,
): CssVariantObject {
	const object: CssVariantObject = {}
	object[variant] = {}
	valuesArray.forEach((value, index) => {
		object[variant][value] = {
			[cssPropertyValue]: `$${index}`,
		}
	})
	return object
}

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

	fluidSpaceAliases.shirt.keys.forEach((value, index) => {
		object[value as ShirtKey] = {
			[property]: `$${index}`,
		}
	})
	return object
}

// const paddingVariants = {
// 	...generateVariants('p', fluidSpaceAliases.shirt.keys, 'p'),
// 	...generateVariants('px', fluidSpaceAliases.shirt.keys, 'px'),
// 	...generateVariants('py', fluidSpaceAliases.shirt.keys, 'py'),
// 	...generateVariants('pt', fluidSpaceAliases.shirt.keys, 'pt'),
// 	...generateVariants('pr', fluidSpaceAliases.shirt.keys, 'pr'),
// 	...generateVariants('pb', fluidSpaceAliases.shirt.keys, 'pb'),
// 	...generateVariants('pl', fluidSpaceAliases.shirt.keys, 'pl'),
// 	// ...generateVariants('m', fluidSpaceAliases.shirt.keys, 'm'),
// }

// export { paddingVariants }

// console.log('paddingVariants', paddingVariants)

// common css variants like
// p
// px, py
// pt, pr, pb, pl
// m
// mx, my
// mt, mr, mb, ml

// bg
// color

/* write me a function that
given:
- variant name (example: "pad")
- array of values (example: ["no", "xs", "sm", ...])
- css property value (example: "p")
```
returns:
{
   pad: {
      no: {
         p: '$0',
      },
      xs: {
         p: '$1',
      },
      sm: {
         p: '$2',
      },
   }
}
```

*/

// pad: {
//    no: {
//       p: '$0',
//    },
//    xs: {
//       p: '$1',
//    },
//    sm: {
//       p: '$2',
//    },
//    md: {
//       p: '$md',
//    },
//    lg: {
//       p: '$lg',
//    },
//    xl: {
//       p: '$xl',
//    },
//    '2xl': {
//       p: '$2xl',
//    },
//    '3xl': {
//       p: '$3xl',
//    },
//    '4xl': {
//       p: '$4xl',
//    },
//    '5xl': {
//       p: '$5xl',
//    }
// }
