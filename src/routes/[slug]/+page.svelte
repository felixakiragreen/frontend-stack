<script lang="ts">
	import { Span } from '@/lib/atoms'
	import { Content, Stack, Inline, Text, Break, Grid } from '@/lib/bonds'

	import type { PageData } from './$types'

	export let data: PageData
</script>

<Content
	css={{
		bg: '$orange700',
	}}
>
	<Stack
		css={{
			bg: '$orange600',
		}}
	>
		<h1>{data.title}</h1>
		<div>{@html data.content}</div>
		<Text>Body</Text>
	</Stack>
</Content>
