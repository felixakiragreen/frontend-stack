<script lang="ts">
	import { stitch, Content, Text } from '@/fui'

	const ss = stitch({
		position: 'relative',
		'@md': {
			position: 'sticky',
		},
		top: '$0',
		bg: '$grey800',
		color: '$foreground',
		zIndex: 10,
	})
</script>

<header class={ss()}>
	<Content
		css={{
			bg: '$orange800',
		}}
	>
		<Text>Header</Text>
	</Content>
</header>
