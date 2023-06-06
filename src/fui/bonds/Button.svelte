<script lang="ts">
	import { stitch, ButtonAtom } from '@/fui'
	import type { PropCss, PropBoolean, VariantOption } from '@/types'

	export let css: PropCss = undefined

	export let look: VariantOption<typeof ss, 'look'> | undefined = 'holo'
	export let size: VariantOption<typeof ss, 'size'> | undefined = 'md'
	export let rounding: VariantOption<typeof ss, 'rounding'> | undefined = 'md'
	export let disabled: PropBoolean = undefined

	// TODO: button looks
	// [ ] basic (solid color)
	// [ ] holo
	// [ ] clean (no styling)
	// [ ] magic
	// [ ] brutal
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

		'&:active': {
			boxShadow: 'inset 0 1px 0px 1px rgba(0, 0, 0, 0.5)',
			transform: 'translateY(4px)',
			borderColor: '$indigo',
		},
		'&:disabled': {
			cursor: 'not-allowed',
			bg: '$grey700',
		},
		'&:disabled:hover': {
			bg: '$foreground',
			color: '$grey700',
		},

		variants: {
			look: {
				holo: {
					bg: '$background',
					color: '$felix',
					border: '1px solid $felix',
					fontFamily: '$mono',
					// textTransform: 'uppercase',
					'&:hover': {
						bg: '$felix',
						color: '$indigo',
					},
					'&:disabled': {
						bg: '$grey700',
						color: '$grey500',
						border: '1px solid $grey500',
					},
					'&:disabled:hover': {
						bg: '$grey800',
						color: '$grey500',
						border: '1px solid $grey500',
					},
				},
				holoPink: {
					bg: '$background',
					color: '$worm',
					border: '1px solid $worm',
					fontFamily: '$mono',
					// textTransform: 'uppercase',
					'&:hover': {
						bg: '$worm',
						color: '$black',
					},
				},
				holoRed: {
					bg: '$background',
					color: '$wriggler',
					border: '1px solid $wriggler',
					fontFamily: '$mono',
					// textTransform: 'uppercase',
					'&:hover': {
						bg: '$wriggler',
						color: '$black',
					},
				},
				purps: {
					bg: '$indigo',
					color: '$felix',
					border: 'none',
					fontFamily: '$mono',
					textTransform: 'uppercase',
					'&:hover': {
						bg: '$felix',
						color: '$indigo',
					},
				},
				greens: {
					bg: '$felix',
					color: '$indigo',
					border: 'none',
					fontFamily: '$mono',
					textTransform: 'uppercase',
					'&:hover': {
						bg: '$indigo',
						color: '$felix',
					},
				},
				pinks: {
					bg: '$worm',
					color: '$foreground',
					border: 'none',
					fontFamily: '$mono',
					textTransform: 'uppercase',
					'&:hover': {
						bg: '$foreground',
						color: '$worm',
					},
				},
				clean: {
					bg: '$clear',
					border: 0,
					'&:active': {},
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
