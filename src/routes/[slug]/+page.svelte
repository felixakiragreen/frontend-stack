<script lang="ts">
	import { Span } from '@/atoms'
	import { Content, VStack, HStack, Text, Break } from '@/bonds'

	import type { PageData } from './$types'

	export let data: PageData
</script>

<Content
	css={{
		bg: '$orange700',
	}}
>
	<VStack
		css={{
			bg: '$orange600',
		}}
	>
		<h1>{data.title}</h1>
		<div>{@html data.content}</div>
		<Text>Body</Text>
	</VStack>
</Content>
