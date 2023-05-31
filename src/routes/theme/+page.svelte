<script lang="ts">
	import { Box, Content, VStack, HStack, Text, Break } from '@/fui'

	import Atoms from './atoms.svelte'
	import Space from './space.svelte'
	import Fonts from './fonts.svelte'
</script>

<Content
	css={{
		bg: '$grey700',
	}}
>
	<VStack bg="grey800" gap="xl">
		<!-- TODO: make a heading	 -->
		<Text>Theme</Text>

		<Atoms />
		<Space />
		<Fonts />
	</VStack>
</Content>
