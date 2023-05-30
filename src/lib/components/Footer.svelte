<script lang="ts">
	import { stitch, Inline, Stack, Content, Text } from '@/fui'

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
