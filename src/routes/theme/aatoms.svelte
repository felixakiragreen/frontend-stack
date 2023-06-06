<script lang="ts">
	import {
		Box,
		Span,
		Content,
		Button,
		VStack,
		HStack,
		Text,
		Break,
	} from '@/fui'
</script>

<VStack gap="md" bg="grey900">
	<Text>Atoms are cool</Text>
	<VStack gap="md" align="baseline">
		<HStack gap="md" alignV="baseline">
			<!-- <Box> -->
			<Button look="holo" size="no">Holo Button</Button>
			<Button look="holo" size="xs">Holo Button</Button>
			<Button look="holo" size="sm">Holo Button</Button>
			<Button look="holo" size="md">Holo Button</Button>
			<Button look="holo" size="lg">Holo Button</Button>
			<!-- </Box> -->
		</HStack>
		<!-- <Button look="holoPink">Holo Button</Button>
		<Button look="holoRed">Holo Button</Button>
		<Button look="purps">Holo Button</Button>
		<Button look="greens">Holo Button</Button>
		<Button look="clean">Holo Button</Button> -->
	</VStack>
</VStack>
