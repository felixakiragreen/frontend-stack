<script lang="ts">
	import { stitch } from '@/fui'
	import type { PropCss, PropString, VariantOption } from '@/types'
	import { Box } from '@/fui/atoms'

	export let id: PropString = undefined
	export let css: PropCss = undefined
	export let pad: VariantOption<typeof ss, 'pad'> | undefined = undefined
	export let gap: VariantOption<typeof ss, 'gap'> | undefined = undefined
	export let align: VariantOption<typeof ss, 'align'> | undefined = undefined
	export let alignV: VariantOption<typeof ss, 'alignV'> | undefined = undefined

	const ss = stitch({
		display: 'flex',
		flexDirection: 'column',

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
					alignItems: 'flex-start',
				},
				trailing: {
					alignItems: 'flex-end',
				},
				center: {
					alignItems: 'center',
				},
				baseline: {
					alignItems: 'baseline',
				},
			},
			alignV: {
				top: {
					justifyContent: 'start',
				},
				bottom: {
					justifyContent: 'end',
				},
				center: {
					justifyContent: 'center',
				},
			},
		},
	})

	// ss({ css })

	// console.log({ css }, ss({ color, css }))
</script>

<Box cls={ss} vrt={{ pad, gap, align, alignV }} {css} {id}>
	<slot />
</Box>
