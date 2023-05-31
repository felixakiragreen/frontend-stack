<script lang="ts">
	import { Box, Content, VStack, HStack, Text, Break } from '@/fui'

	import { fluidSizeAliases, fluidSpaceAliases } from '@/fui/fluid'

	// array from 1 to 9
	const length = 10
	const array = Array.from({ length }, (_, i) => i)
</script>

<VStack gap="sm" bg="grey900">
	<Text>Space</Text>

	<HStack p="sm" gap="sm">
		{#each array as a}
			<VStack p="sm" gap="sm">
				<Box
					bg="green400"
					css={{
						size: `$space$${a}`,
					}}
				/>
				<Text>
					{a} -
					{fluidSpaceAliases.shirtKeys[a]}
				</Text>
			</VStack>
		{/each}
	</HStack>

	<Text>Sizes</Text>

	{#each array as a}
		<Box
			p="lg"
			bg="green600"
			css={{
				size: `$${a}`,
			}}
		>
			<Text>
				{a} -
				{fluidSizeAliases.shirtKeys[a]}
			</Text>
		</Box>
	{/each}
</VStack>
