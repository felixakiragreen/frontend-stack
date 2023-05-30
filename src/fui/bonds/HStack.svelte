<script lang="ts">
	import { stitch, Box } from '@/fui'
	import type { PropCss, PropString, VariantOption } from '@/types'

	export let id: PropString = undefined
	export let css: PropCss = undefined
	export let pad: VariantOption<typeof ss, 'pad'> | undefined = undefined
	export let gap: VariantOption<typeof ss, 'gap'> | undefined = undefined
	export let gapV: VariantOption<typeof ss, 'gapV'> | undefined = undefined
	export let align: VariantOption<typeof ss, 'align'> | undefined = undefined
	export let alignV: VariantOption<typeof ss, 'alignV'> | undefined = undefined
	export let collapse: VariantOption<typeof ss, 'collapse'> | undefined =
		undefined

	const ss = stitch({
		display: 'flex',

		// sx: '$$SpaceX',
		// sy: '$space$no',

		variants: {
			pad: {
				no: {
					p: '$no',
				},
				xs: {
					p: '$xs',
				},
				sm: {
					p: '$sm',
				},
				md: {
					p: '$md',
				},
				lg: {
					p: '$lg',
				},
				xl: {
					p: '$xl',
				},
				'2xl': {
					p: '$2xl',
				},
				'3xl': {
					p: '$3xl',
				},
				'4xl': {
					p: '$4xl',
				},
				'5xl': {
					p: '$5xl',
				},
				'6xl': {
					p: '$6xl',
				},
				'7xl': {
					p: '$7xl',
				},
				'8xl': {
					p: '$8xl',
				},
				'9xl': {
					p: '$9xl',
				},
			},
			gap: {
				no: {
					sx: '$no',
				},
				xs: {
					sx: '$xs',
				},
				sm: {
					sx: '$sm',
				},
				md: {
					sx: '$md',
				},
				lg: {
					sx: '$lg',
				},
				xl: {
					sx: '$xl',
				},
				'2xl': {
					sx: '$2xl',
				},
				'3xl': {
					sx: '$3xl',
				},
				'4xl': {
					sx: '$4xl',
				},
				'5xl': {
					sx: '$5xl',
				},
				'6xl': {
					sx: '$6xl',
				},
				'7xl': {
					sx: '$7xl',
				},
				'8xl': {
					sx: '$8xl',
				},
				'9xl': {
					sx: '$9xl',
				},
			},
			gapV: {
				no: {
					sy: '$no',
				},
				xs: {
					sy: '$xs',
				},
				sm: {
					sy: '$sm',
				},
				md: {
					sy: '$md',
				},
				lg: {
					sy: '$lg',
				},
				xl: {
					sy: '$xl',
				},
				'2xl': {
					sy: '$2xl',
				},
				'3xl': {
					sy: '$3xl',
				},
				'4xl': {
					sy: '$4xl',
				},
				'5xl': {
					sy: '$5xl',
				},
				'6xl': {
					sy: '$6xl',
				},
				'7xl': {
					sy: '$7xl',
				},
				'8xl': {
					sy: '$8xl',
				},
				'9xl': {
					sy: '$9xl',
				},
			},
			align: {
				leading: {
					justifyContent: 'flex-start',
				},
				trailing: {
					justifyContent: 'flex-end',
				},
				center: {
					justifyContent: 'center',
				},
				between: {
					justifyContent: 'space-between',
				},
			},
			alignV: {
				top: {
					alignItems: 'flex-start',
				},
				bottom: {
					alignItems: 'flex-end',
				},
				center: {
					alignItems: 'center',
				},
				baseline: {
					alignItems: 'baseline',
				},
			},
			collapse: {
				sm: {
					flexDirection: 'column',
					'@sm': {
						flexDirection: 'row',
					},
				},
				md: {
					flexDirection: 'column',
					'@md': {
						flexDirection: 'row',
					},
				},
				lg: {
					flexDirection: 'column',
					'@lg': {
						flexDirection: 'row',
					},
				},
			},
		},
	})
</script>

<Box {id} cls={ss} vrt={{ pad, gap, gapV, align, alignV, collapse }} {css}>
	<slot />
</Box>
