<script lang="ts">
	import { Box, Span } from '@/atoms'
	import { Content, VStack, HStack, Text, Break } from '@/bonds'

	import { fluidFontAliases } from '@/lib/style/fluid'

	// # array from 1 to 9
	const length = 9
	const array = Array.from({ length }, (_, i) => i + 1)
</script>

<VStack
	css={{
		bg: '$orange600',
	}}
>
	<Text>Fonts</Text>

	{#each array as a}
		<Text css={{ fontSize: `$${a}` }}>
			{a} -
			{fluidFontAliases.shirt.keys[a]}
			{fluidFontAliases.typo.keys[a]}
			{fluidFontAliases.step.keys[a]}
		</Text>
	{/each}
</VStack>
