<script lang="ts">
	import { Box, Span, Content, VStack, HStack, Text, Break } from '@/fui'

	import { fluidFontAliases } from '@/fui/fluid'

	// array from 1 to 9
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
			{fluidFontAliases.shirtKeys[a]}
			{fluidFontAliases.typoKeys[a]}
			{fluidFontAliases.stepKeys[a]}
		</Text>
	{/each}
</VStack>
