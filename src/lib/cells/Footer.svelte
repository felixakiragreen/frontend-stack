<script lang="ts">
	import { stitch } from '@/ui'

	import { Inline, Stack, Content } from '@/lib/bonds'

	import Text from '@/lib/bonds/Text.svelte'

	const ss = stitch({
		// position: 'relative',
		// '@md': {
		// 	position: 'sticky',
		// },
		// top: '$0',
		// bg: '$grey800',
		// color: '$foreground',
	})
</script>

<footer class={ss()}>
	<Content
		css={{
			bg: '$orange800',
		}}
	>
		<Text>Footer</Text>
	</Content>
</footer>
