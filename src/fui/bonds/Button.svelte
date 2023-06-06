<script lang="ts">
	import { stitch, ButtonAtom } from '@/fui'
	import type { PropCss, PropBoolean, VariantOption } from '@/types'

	export let css: PropCss = undefined

	export let look: VariantOption<typeof ss, 'look'> | undefined = 'holo'
	export let size: VariantOption<typeof ss, 'size'> | undefined = 'md'
	export let rounding: VariantOption<typeof ss, 'rounding'> | undefined = 'md'
	export let disabled: PropBoolean = undefined

	// TODO: button looks
	// [x] basic (solid color)
	// [x] holo
	// [x] clean (no styling)
	// [ ] magic
	// [x] brutal
	// chamfer ? (cut corners, maybe just top left & bottom right?)
	// hexagonal ?

	// color = highlight / hue
	//

	const ss = stitch({
		// bg: '$gold',
		// color: '$black',
		// border: '2px solid $felix',

		// fontFamily: '$main',
		// fontWeight: '$bold',

		cursor: 'pointer',
		transition: '$1',

		// TODO: REWORK THIS PART
		// '&:active': {
		// 	boxShadow: 'inset 0 1px 0px 1px rgba(0, 0, 0, 0.5)',
		// 	transform: 'translateY(4px)',
		// 	borderColor: '$indigo',
		// },
		'&:disabled': {
			cursor: 'not-allowed',
			bg: '$background',
			color: '$highground',
		},
		'&:disabled:hover': {
			bg: '$backgrounder',
			color: '$highgroundish',
		},

		variants: {
			look: {
				basic: {
					bg: '$primaryHighground',
					color: '$primaryBackgroundest',
					border: 0,
					'&:hover': {
						bg: '$primaryForegroundest',
					},
				},
				holo: {
					bg: '$backgroundest',
					color: '$primaryHighground',
					border: '1px solid $primaryHighground',
					fontFamily: '$mono',
					// textTransform: 'uppercase',
					'&:hover': {
						bg: '$primaryHighground',
						color: '$primaryBackgroundest',
					},
					'&:disabled': {
						// bg: '$background',
						// color: '$highground',
						border: '1px solid $highground',
					},
					'&:disabled:hover': {
						// bg: '$backgrounder',
						// color: '$highgroundish',
						border: '1px solid $highgroundish',
					},
				},
				clean: {
					bg: '$clear',
					color: '$foreground',
					border: 0,
					'&:active': {},
				},
				brutal: {
					bg: '$primaryHighground',
					color: '$primaryBackgroundest',
					border: 0,
					br: '$no',
					boxShadow: '$hard',
					'&:hover': {
						bg: '$primaryForegroundest',
					},
					'&:active': {
						bg: '$primaryHighground',
						boxShadow:
							'1px 1px 0px 0 rgba(0, 0, 0), inset 2px 2px 0px 2px rgba(0, 0, 0, 0.5)',
						transform: 'translate(4px, 4px)',
					},
					'&:disabled:active': {
						transform: 'translate(0)',
						boxShadow: '$hard',
					},
				},
				brutalist: {
					bg: '$backgroundest',
					color: '$primaryHighground',
					border: '1px solid $primaryHighground',
					br: '$no',
					boxShadow: '4px 4px 0px 0 $colors$primaryHighground',
					'&:hover': {
						bg: '$backgroundish',
					},
					'&:active': {
						boxShadow:
							'0px 0px 0px 0 rgba(0, 0, 0), inset 0px 0px 0px 2px rgba(0, 0, 0, 0.5)',
						transform: 'translate(4px, 4px)',
					},
					'&:disabled': {
						border: '1px solid $highground',
						boxShadow: '4px 4px 0px 0 $colors$highground',
					},
					'&:disabled:hover': {
						border: '1px solid $highgroundish',
						boxShadow: '4px 4px 0px 0 $colors$highgroundish',
					},
					'&:disabled:active': {
						transform: 'translate(0)',
						boxShadow: '4px 4px 0px 0 $colors$highground',
					},
				},
			},
			size: {
				no: {
					p: '$no',
				},
				xs: {
					p: '$xs',
					text: '$xs',
				},
				sm: {
					p: '$sm',
					text: '$sm',
				},
				md: {
					p: '$md',
					text: '$md',
				},
				lg: {
					p: '$lg',
					text: '$lg',
				},
				xl: {
					p: '$xl',
					text: '$xl',
				},
			},
			rounding: {
				no: {
					br: '$no',
				},
				xs: {
					br: '$xs',
				},
				sm: {
					br: '$sm',
				},
				md: {
					br: '$md',
				},
				lg: {
					br: '$lg',
				},
				xl: {
					br: '$xl',
				},
				'2xl': {
					br: '$2xl',
				},
				'3xl': {
					br: '$3xl',
				},
				full: {
					br: '$full',
				},
			},
		},
	})
</script>

<ButtonAtom cls={ss} vrt={{ look, size, rounding }} {css} {disabled} on:click>
	<slot />
</ButtonAtom>
