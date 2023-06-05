<script lang="ts">
	import { Box, Content, VStack, HStack, Text, Break, LinkNav } from '@/fui'
</script>

<Content bg="backgrounder">
	<HStack bg="backgroundest" gap="xl">
		<LinkNav route="/theme" label="Theme" />
		<LinkNav route="/theme/atoms" label="Atoms" />
		<LinkNav route="/theme/space" label="Space" />
		<LinkNav route="/theme/fonts" label="Fonts" />
		<LinkNav route="/theme/color" label="Color" />
	</HStack>
	<slot />
</Content>
