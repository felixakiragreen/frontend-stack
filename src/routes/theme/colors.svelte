<script lang="ts">
	import { Box, Span, Content, VStack, HStack, Text, Break } from '@/fui'

	// import felixkai from '@/fui/color/temp_felixkaiOklch'

	import { felixkaiOklch as felixkai } from '@/fui/color'

	// array from 1 to 9
	// const length = 9
	const array = Object.entries(felixkai)
	// const array = Array.from({ length }, (_, i) => i + 1)
</script>

<VStack bg="grey800">
	<Text
		css={{
			fontSize: '$xl',
			py: '$xl',
		}}>Colors</Text
	>

	<VStack gap="md">
		{#each array as [key, color]}
			<HStack gap="md">
				<Box
					css={{
						bg: color,
						size: '$space$lg',
					}}
				/>
				<Text>{key}</Text>
				<Text
					css={{
						color: '$grey500',
					}}>{color}</Text
				>
			</HStack>
		{/each}
	</VStack>
</VStack>
