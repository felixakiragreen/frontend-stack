<script lang="ts">
	import { Box, Content, VStack, HStack, Text, Break } from '@/fui'

	function r(n: number) {
		// return square root of 6 divided by 2 to the power of n
		return Math.pow(Math.sqrt(6), n)

		// return Math.exp(Math.random() * n)
	}

	// array between 5 and -8
	const length = 10
	const arrayI = Array.from({ length }, (_, i) => length - 1 - i)
	const arrayR = arrayI.map((i) => r(i))
</script>

<Content
	css={{
		bg: '$orange700',
	}}
>
	<VStack
		css={{
			bg: '$orange900',
		}}
	>
		<Text>Body</Text>
		{#each arrayI as a, index}
			<HStack gap="md">
				<Text color="muted">{index}</Text>
				<Text>{a}</Text>
				<Box
					css={{
						width: `${arrayR[index]}px`,
						bg: '$blue400',
					}}
				/>
				<Text>{arrayR[index]}</Text>
			</HStack>
		{/each}
	</VStack>
</Content>
