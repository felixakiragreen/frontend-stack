<script lang="ts">
	import { stitch } from '@/ui'
	import type { PropCss } from '@/types'

	export let css: PropCss = undefined

	const ss = stitch({
		// backgroundColor: "$background",
		// color: "$foreground",

		mx: 'auto',
		maxWidth: '$screen-lg',
		py: '$4',

		px: '$4',
		'@sm': {
			px: '$8',
		},
		'@xl': {
			px: '$0',
		},
	})
</script>

<section class={ss({ css })}>
	<slot />
</section>
