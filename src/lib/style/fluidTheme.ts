/* @link https://utopia.fyi/type/calculator?c=320,16,1.25,1240,20,1.333,6,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */

// :root {
//    --step--2: clamp(0.64rem, calc(0.62rem + 0.11vw), 0.70rem);
//    --step--1: clamp(0.80rem, calc(0.75rem + 0.24vw), 0.94rem);
//    --step-0: clamp(1.00rem, calc(0.91rem + 0.43vw), 1.25rem);
//    --step-1: clamp(1.25rem, calc(1.11rem + 0.72vw), 1.67rem);
//    --step-2: clamp(1.56rem, calc(1.33rem + 1.15vw), 2.22rem);
//    --step-3: clamp(1.95rem, calc(1.60rem + 1.75vw), 2.96rem);
//    --step-4: clamp(2.44rem, calc(1.92rem + 2.62vw), 3.95rem);
//    --step-5: clamp(3.05rem, calc(2.28rem + 3.84vw), 5.26rem);
//    --step-6: clamp(3.82rem, calc(2.70rem + 5.56vw), 7.01rem);
//  }

import type * as Stitches from '@stitches/core'

export const fluidSizes = {
	's-2': 'clamp(0.64rem, calc(0.62rem + 0.11vw), 0.70rem)',
	's-1': 'clamp(0.80rem, calc(0.75rem + 0.24vw), 0.94rem)',
	s0: 'clamp(1.00rem, calc(0.91rem + 0.43vw), 1.25rem)',
	s1: 'clamp(1.25rem, calc(1.11rem + 0.72vw), 1.67rem)',
	s2: 'clamp(1.56rem, calc(1.33rem + 1.15vw), 2.22rem)',
	s3: 'clamp(1.95rem, calc(1.60rem + 1.75vw), 2.96rem)',
	s4: 'clamp(2.44rem, calc(1.92rem + 2.62vw), 3.95rem)',
	s5: 'clamp(3.05rem, calc(2.28rem + 3.84vw), 5.26rem)',
	s6: 'clamp(3.82rem, calc(2.70rem + 5.56vw), 7.01rem)',
}

export const fontSizes = {
	...fluidSizes,
	//
	xs: fluidSizes['s-2'],
	sm: fluidSizes['s-1'],
	md: fluidSizes['s0'],
	lg: fluidSizes['s1'],
	xl: fluidSizes['s2'],
	'2xl': fluidSizes['s3'],
	'3xl': fluidSizes['s4'],
	'4xl': fluidSizes['s5'],
	'5xl': fluidSizes['s6'],
	//
	c2: fluidSizes['s-2'],
	c1: fluidSizes['s-1'],
	b: fluidSizes['s0'],
	h6: fluidSizes['s1'],
	h5: fluidSizes['s2'],
	h4: fluidSizes['s3'],
	h3: fluidSizes['s4'],
	h2: fluidSizes['s5'],
	h1: fluidSizes['s6'],
	//
	'1': fluidSizes['s-2'],
	'2': fluidSizes['s-1'],
	'3': fluidSizes['s0'],
	'4': fluidSizes['s1'],
	'5': fluidSizes['s2'],
	'6': fluidSizes['s3'],
	'7': fluidSizes['s4'],
	'8': fluidSizes['s5'],
	'9': fluidSizes['s6'],
}
