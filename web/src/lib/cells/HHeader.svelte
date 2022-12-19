<script lang="ts">
	import { stitch } from '@/ui'

	import { Image } from '@/lib/atoms'
	import { Content, Inline, Text, Link, HeaderLink } from '@/lib/bonds'

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
