<script lang="ts">
	import { Box, Span } from '@/atoms'
	import { Content, VStack, HStack, Text, Break } from '@/bonds'
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
		<Text>Theme</Text>

		<Box
			css={{
				bg: '$green500',
				height: '$1',
				width: '$1',
			}}
		/>
	</VStack>
</Content>
