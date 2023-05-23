/* @link https://utopia.fyi/type/calculator?c=320,16,1.25,1240,20,1.333,6,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */

// :root {
// 	/* Step -2: 10.24px → 11.26px */
// 	--step--2: clamp(0.64rem, calc(0.62rem + 0.11vw), 0.70rem);

// 	/* Step -1: 12.80px → 15.00px */
// 	--step--1: clamp(0.80rem, calc(0.75rem + 0.24vw), 0.94rem);

// 	/* Step 0: 16.00px → 20.00px */
// 	--step-0: clamp(1.00rem, calc(0.91rem + 0.43vw), 1.25rem);

// 	/* Step 1: 20.00px → 26.66px */
// 	--step-1: clamp(1.25rem, calc(1.11rem + 0.72vw), 1.67rem);

// 	/* Step 2: 25.00px → 35.54px */
// 	--step-2: clamp(1.56rem, calc(1.33rem + 1.15vw), 2.22rem);

// 	/* Step 3: 31.25px → 47.37px */
// 	--step-3: clamp(1.95rem, calc(1.60rem + 1.75vw), 2.96rem);

// 	/* Step 4: 39.06px → 63.15px */
// 	--step-4: clamp(2.44rem, calc(1.92rem + 2.62vw), 3.95rem);

// 	/* Step 5: 48.83px → 84.17px */
// 	--step-5: clamp(3.05rem, calc(2.28rem + 3.84vw), 5.26rem);

// 	/* Step 6: 61.04px → 112.20px */
// 	--step-6: clamp(3.82rem, calc(2.70rem + 5.56vw), 7.01rem);
//  }

export const fluidFont = {
	'step-2': 'clamp(0.64rem, calc(0.62rem + 0.11vw), 0.70rem)', // Step -2: 10.24px → 11.26px
	'step-1': 'clamp(0.80rem, calc(0.75rem + 0.24vw), 0.94rem)', // Step -1: 12.80px → 15.00px
	step0: 'clamp(1.00rem, calc(0.91rem + 0.43vw), 1.25rem)', // Step 0: 16.00px → 20.00px
	step1: 'clamp(1.25rem, calc(1.11rem + 0.72vw), 1.67rem)', // Step 1: 20.00px → 26.66px
	step2: 'clamp(1.56rem, calc(1.33rem + 1.15vw), 2.22rem)', // Step 2: 25.00px → 35.54px
	step3: 'clamp(1.95rem, calc(1.60rem + 1.75vw), 2.96rem)', // Step 3: 31.25px → 47.37px
	step4: 'clamp(2.44rem, calc(1.92rem + 2.62vw), 3.95rem)', // Step 4: 39.06px → 63.15px
	step5: 'clamp(3.05rem, calc(2.28rem + 3.84vw), 5.26rem)', // Step 5: 48.83px → 84.17px
	step6: 'clamp(3.82rem, calc(2.70rem + 5.56vw), 7.01rem)', // Step 6: 61.04px → 112.20px
}

// TYPE

export const fontSizes = {
	...fluidFont,
	//
	xs: fluidFont['step-2'],
	sm: fluidFont['step-1'],
	md: fluidFont['step0'],
	lg: fluidFont['step1'],
	xl: fluidFont['step2'],
	'2xl': fluidFont['step3'],
	'3xl': fluidFont['step4'],
	'4xl': fluidFont['step5'],
	'5xl': fluidFont['step6'],
	//
	c2: fluidFont['step-2'],
	c1: fluidFont['step-1'],
	b: fluidFont['step0'],
	h6: fluidFont['step1'],
	h5: fluidFont['step2'],
	h4: fluidFont['step3'],
	h3: fluidFont['step4'],
	h2: fluidFont['step5'],
	h1: fluidFont['step6'],
	//
	'1': fluidFont['step-2'],
	'2': fluidFont['step-1'],
	'3': fluidFont['step0'],
	'4': fluidFont['step1'],
	'5': fluidFont['step2'],
	'6': fluidFont['step3'],
	'7': fluidFont['step4'],
	'8': fluidFont['step5'],
	'9': fluidFont['step6'],
}

// SPACE

/* @link https://utopia.fyi/space/calculator?c=320,16,1.2,1240,24,1.25,5,2,&s=0.75|0.5|0.25|0.125,1.5|2|3|4|6|8,s-l&g=s,l,xl,12 */

// :root {
// 	/* Space 4xs: 2px → 3px */
// 	--space-4xs: clamp(0.13rem, calc(0.10rem + 0.11vw), 0.19rem);

// 	/* Space 3xs: 4px → 6px */
// 	--space-3xs: clamp(0.25rem, calc(0.21rem + 0.22vw), 0.38rem);

// 	/* Space 2xs: 8px → 12px */
// 	--space-2xs: clamp(0.50rem, calc(0.41rem + 0.43vw), 0.75rem);

// 	/* Space xs: 12px → 18px */
// 	--space-xs: clamp(0.75rem, calc(0.62rem + 0.65vw), 1.13rem);

// 	/* Space s: 16px → 24px */
// 	--space-s: clamp(1.00rem, calc(0.83rem + 0.87vw), 1.50rem);

// 	/* Space m: 24px → 36px */
// 	--space-m: clamp(1.50rem, calc(1.24rem + 1.30vw), 2.25rem);

// 	/* Space l: 32px → 48px */
// 	--space-l: clamp(2.00rem, calc(1.65rem + 1.74vw), 3.00rem);

// 	/* Space xl: 48px → 72px */
// 	--space-xl: clamp(3.00rem, calc(2.48rem + 2.61vw), 4.50rem);

// 	/* Space 2xl: 64px → 96px */
// 	--space-2xl: clamp(4.00rem, calc(3.30rem + 3.48vw), 6.00rem);

// 	/* Space 3xl: 96px → 144px */
// 	--space-3xl: clamp(6.00rem, calc(4.96rem + 5.22vw), 9.00rem);

// 	/* Space 4xl: 128px → 192px */
// 	--space-4xl: clamp(8.00rem, calc(6.61rem + 6.96vw), 12.00rem);
// }

export const fluidSpace = {
	// '4xs': 'clamp(0.13rem, calc(0.10rem + 0.11vw), 0.19rem)', // Step 4xs: 2px → 3px
	// '3xs': 'clamp(0.25rem, calc(0.21rem + 0.22vw), 0.38rem)', // Step 3xs: 4px → 6px
	// '2xs': 'clamp(0.50rem, calc(0.41rem + 0.43vw), 0.75rem)', // Step 2xs: 8px → 12px
	// xs: 'clamp(0.75rem, calc(0.62rem + 0.65vw), 1.13rem)', // Step xs: 12px → 18px
	// s: 'clamp(1.00rem, calc(0.83rem + 0.87vw), 1.50rem)', // Step s: 16px → 24px
	// m: 'clamp(1.50rem, calc(1.24rem + 1.30vw), 2.25rem)', // Step m: 24px → 36px
	// l: 'clamp(2.00rem, calc(1.65rem + 1.74vw), 3.00rem)', // Step l: 32px → 48px
	// xl: 'clamp(3.00rem, calc(2.48rem + 2.61vw), 4.50rem)', // Step xl: 48px → 72px
	// '2xl': 'clamp(4.00rem, calc(3.30rem + 3.48vw), 6.00rem)', // Step 2xl: 64px → 96px
	// '3xl': 'clamp(6.00rem, calc(4.96rem + 5.22vw), 9.00rem)', // Step 3xl: 96px → 144px
	// '4xl': 'clamp(8.00rem, calc(6.61rem + 6.96vw), 12.00rem)', // Step 4xl: 128px → 192px

	px: '1px',
	//
	'3xs': 'clamp(0.13rem, calc(0.10rem + 0.11vw), 0.19rem)', // Step 4xs: 2px → 3px
	'2xs': 'clamp(0.25rem, calc(0.21rem + 0.22vw), 0.38rem)', // Step 3xs: 4px → 6px
	xs: 'clamp(0.50rem, calc(0.41rem + 0.43vw), 0.75rem)', // Step 2xs: 8px → 12px

	sm: 'clamp(0.75rem, calc(0.62rem + 0.65vw), 1.13rem)', // Step xs: 12px → 18px
	md: 'clamp(1.00rem, calc(0.83rem + 0.87vw), 1.50rem)', // Step s: 16px → 24px
	lg: 'clamp(1.50rem, calc(1.24rem + 1.30vw), 2.25rem)', // Step m: 24px → 36px
	//
	xl: 'clamp(2.00rem, calc(1.65rem + 1.74vw), 3.00rem)', // Step l: 32px → 48px
	'2xl': 'clamp(3.00rem, calc(2.48rem + 2.61vw), 4.50rem)', // Step xl: 48px → 72px
	'3xl': 'clamp(4.00rem, calc(3.30rem + 3.48vw), 6.00rem)', // Step 2xl: 64px → 96px
	//
}

export const spaces = {
	...fluidSpace,
	//
	'0': '0',
	'1': fluidSpace['3xs'],
	'2': fluidSpace['2xs'],
	'3': fluidSpace['xs'],
	'4': fluidSpace['sm'],
	'5': fluidSpace['md'],
	'6': fluidSpace['lg'],
	'7': fluidSpace['xl'],
	'8': fluidSpace['2xl'],
	'9': fluidSpace['3xl'],
}

/* @link https://utopia.fyi/space/calculator?c=320,16,1.2,1240,24,1.25,5,2,&s=,6|8|10|12|16|20|24|32|40,s-l&g=s,l,xl,12 */

// :root {
// 	/* Space s: 16px → 24px */
// 	--space-s: clamp(1.00rem, calc(0.83rem + 0.87vw), 1.50rem);

// 	/* Space m: 96px → 144px */
// 	--space-m: clamp(6.00rem, calc(4.96rem + 5.22vw), 9.00rem);

// 	/* Space l: 128px → 192px */
// 	--space-l: clamp(8.00rem, calc(6.61rem + 6.96vw), 12.00rem);

// 	/* Space xl: 160px → 240px */
// 	--space-xl: clamp(10.00rem, calc(8.26rem + 8.70vw), 15.00rem);

// 	/* Space 2xl: 192px → 288px */
// 	--space-2xl: clamp(12.00rem, calc(9.91rem + 10.43vw), 18.00rem);

// 	/* Space 3xl: 256px → 384px */
// 	--space-3xl: clamp(16.00rem, calc(13.22rem + 13.91vw), 24.00rem);

// 	/* Space 4xl: 320px → 480px */
// 	--space-4xl: clamp(20.00rem, calc(16.52rem + 17.39vw), 30.00rem);

// 	/* Space 5xl: 384px → 576px */
// 	--space-5xl: clamp(24.00rem, calc(19.83rem + 20.87vw), 36.00rem);

// 	/* Space 6xl: 512px → 768px */
// 	--space-6xl: clamp(32.00rem, calc(26.43rem + 27.83vw), 48.00rem);

// 	/* Space 7xl: 640px → 960px */
// 	--space-7xl: clamp(40.00rem, calc(33.04rem + 34.78vw), 60.00rem);
// }

export const fluidSize = {
	'3xs': 'clamp(6.00rem, calc(4.96rem + 5.22vw), 9.00rem)', // Step 3xs: 96px → 144px
	'2xs': 'clamp(8.00rem, calc(6.61rem + 6.96vw), 12.00rem)', // Step 2xs: 128px → 192px
	xs: 'clamp(10.00rem, calc(8.26rem + 8.70vw), 15.00rem)', // Step xs: 160px → 240px
	//
	sm: 'clamp(12.00rem, calc(9.91rem + 10.43vw), 18.00rem)', // Step sm: 192px → 288px
	md: 'clamp(16.00rem, calc(13.22rem + 13.91vw), 24.00rem)', // Step md: 256px → 384px
	lg: 'clamp(20.00rem, calc(16.52rem + 17.39vw), 30.00rem)', // Step lg: 320px → 480px
	//
	xl: 'clamp(24.00rem, calc(19.83rem + 20.87vw), 36.00rem)', // Step xl: 384px → 576px
	'2xl': 'clamp(32.00rem, calc(26.43rem + 27.83vw), 48.00rem)', // Step 2xl: 512px → 768px
	'3xl': 'clamp(40.00rem, calc(33.04rem + 34.78vw), 60.00rem)', // Step 3xl: 640px → 960px
}

export const size = {
	...fluidSize,
	//
	'1': fluidSize['3xs'],
	'2': fluidSize['2xs'],
	'3': fluidSize['xs'],
	'4': fluidSize['sm'],
	'5': fluidSize['md'],
	'6': fluidSize['lg'],
	'7': fluidSize['xl'],
	'8': fluidSize['2xl'],
	'9': fluidSize['3xl'],
}
