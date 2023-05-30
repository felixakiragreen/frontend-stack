<script lang="ts">
	import { stitch } from '@/fui'
	import type { PropCss } from '@/types'

	export let css: PropCss = undefined

	const ss = stitch({
		// backgroundColor: "$background",
		// color: "$foreground",

		mx: 'auto',
		maxWidth: '$screen-lg',
		p: '$sm',
	})
</script>

<section class={ss({ css })}>
	<slot />
</section>
