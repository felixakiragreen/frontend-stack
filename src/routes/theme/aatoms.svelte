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
		<Text>Size</Text>
		<HStack gap="md" gapV="md" alignV="bottom" wrap>
			<Button look="holo" size="no">NO</Button>
			<Button look="holo" size="xs">XS</Button>
			<Button look="holo" size="sm">SM</Button>
			<Button look="holo" size="md">MD</Button>
			<Button look="holo" size="lg">LG</Button>
			<Button look="holo" size="xl">XL</Button>
		</HStack>
		<Text>Rounding</Text>
		<HStack gap="md" gapV="md" alignV="bottom" wrap>
			<Button look="holo" size="md" rounding="no">NO</Button>
			<Button look="holo" size="md" rounding="xs">XS</Button>
			<Button look="holo" size="md" rounding="sm">SM</Button>
			<Button look="holo" size="md" rounding="md">MD</Button>
			<Button look="holo" size="md" rounding="lg">LG</Button>
			<Button look="holo" size="md" rounding="xl">XL</Button>
			<Button look="holo" size="xl" rounding="2xl">2XL</Button>
			<Button look="holo" size="xl" rounding="3xl">3XL</Button>
			<Button look="holo" size="xl" rounding="full">FULL</Button>
		</HStack>
		<!-- <Button look="holoPink">Holo Button</Button>
		<Button look="holoRed">Holo Button</Button>
		<Button look="purps">Holo Button</Button>
		<Button look="greens">Holo Button</Button>
		<Button look="clean">Holo Button</Button> -->
	</VStack>
</VStack>
