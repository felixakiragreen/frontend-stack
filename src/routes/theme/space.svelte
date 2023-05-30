<script lang="ts">
	import { Box, Content, VStack, HStack, Text, Break } from '@/fui'

	import { fluidSizeAliases, fluidSpaceAliases } from '@/fui/fluid'

	// array from 1 to 9
	const length = 10
	const array = Array.from({ length }, (_, i) => i)
</script>

<VStack
	gap="sm"
	css={{
		bg: '$orange600',
	}}
>
	<Text>Space</Text>

	{#each array as a}
		<HStack gap="sm">
			<Box
				css={{
					bg: '$green600',
					size: `$space$${a}`,
				}}
			/>
			<Text>
				{a} -
				{fluidSpaceAliases.shirt.keys[a]}
			</Text>
		</HStack>
	{/each}

	<Text>Sizes</Text>

	{#each array as a}
		<Box
			css={{
				bg: '$green600',
				size: `$${a}`,
			}}
		>
			<Text>
				{a} -
				{fluidSizeAliases.shirt.keys[a]}
			</Text>
		</Box>
	{/each}
</VStack>
