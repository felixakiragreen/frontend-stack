<script lang="ts">
	import { Box, Content, VStack, HStack, Text, Break } from '@/fui'

	import Atoms from './atoms.svelte'
	import Space from './space.svelte'
	import Fonts from './fonts.svelte'
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
		<!-- TODO: make a heading	 -->
		<Text>Theme</Text>

		<Atoms />
		<Space />
		<Fonts />
	</VStack>
</Content>
