const rgba = (hexCode: string, opacity: number) => {
	let hex = hexCode.replace('#', '')

	if (hex.length === 3) {
		hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
	}

	const r = parseInt(hex.substring(0, 2), 16)
	const g = parseInt(hex.substring(2, 4), 16)
	const b = parseInt(hex.substring(4, 6), 16)

	return `rgba(${r},${g},${b},${opacity / 100})`
}

const color = {
	felix: '#adff2f',
	black: '#000000',
	white: '#ffffff',
	clear: 'hsla(0, 0%, 0%, 0)',
	//
	grey900: '#0a0a09',
	grey800: '#141411',
	grey750: '#1d1e1a',
	grey700: '#2a2b26',
	grey650: '#373832',
	grey600: '#53544c',
	grey500: '#7f8076',
	grey400: '#aaaba0',
	grey300: '#d3d4c9',
	grey200: '#ebebe2',
	grey100: '#f5f5ef',
	red900: '#290607',
	red800: '#470a0d',
	red700: '#710e15',
	red600: '#a11420',
	red500: '#cb1d37',
	red400: '#ed3467',
	red300: '#fc64a1',
	red200: '#ffa3d6',
	red100: '#ffecfa',
	orange900: '#2f150d',
	orange800: '#50240f',
	orange700: '#75330f',
	orange600: '#9e490c',
	orange500: '#cb6709',
	orange400: '#f1901d',
	orange300: '#fcb760',
	orange200: '#fed7a8',
	orange100: '#fff6e9',
	yellow900: '#371f05',
	yellow800: '#5f3906',
	yellow700: '#8f5c07',
	yellow600: '#c6930b',
	yellow500: '#f8cb1b',
	yellow400: '#f7dd4b',
	yellow300: '#f5ea7e',
	yellow200: '#f3f1b0',
	yellow100: '#f2f2de',
	green900: '#052907',
	green800: '#0c4a07',
	green700: '#1e6e08',
	green600: '#3f9608',
	green500: '#6fbf10',
	green400: '#a5e22c',
	green300: '#cfed6d',
	green200: '#e4efab',
	green100: '#e8ead8',
	blue900: '#001336',
	blue800: '#002662',
	blue700: '#013f8c',
	blue600: '#0362b2',
	blue500: '#0f8fd0',
	blue400: '#38bce6',
	blue300: '#70dbef',
	blue200: '#a9eaf4',
	blue100: '#e5f6f8',
	purple900: '#120639',
	purple800: '#271163',
	purple700: '#442294',
	purple600: '#643bc0',
	purple500: '#8659e1',
	purple400: '#9f7af2',
	purple300: '#b29af8',
	purple200: '#ccbdf9',
	purple100: '#f0e6f9',
}

const lightThemeColors = {
	//
	background: '$white',
	foreground: '$grey900',
	//
	faint: '$grey200',
	faded: '$grey300',
	jaded: '$grey400',
	muted: '$grey500',
	dusky: '$grey700',
	//
	highlight: '$green700',
	lowlight: '$blue700',
	//
	depthIn: '$grey200',
	depthOut: '$grey300',
}
const darkThemeColors = {
	// THEME dependent tokens
	//
	background: '$grey900',
	foreground: '$grey100',
	//
	faint: '$grey800',
	faded: '$grey700',
	jaded: '$grey600',
	muted: '$grey500',
	dusky: '$grey300',
	//
	highlight: '$green300',
	lowlight: '$blue300',
	//
	depthIn: '$grey800',
	depthOut: '$grey700',
	// depthIn: rgba(color.white, 5),
	// depthOut: rgba(color.white, 15),
}

export const colors = {
	...color,
	//
	felix50: rgba(color.felix, 50),
	//
	whiteA25: rgba(color.white, 25),
	whiteA50: rgba(color.white, 50),
	whiteA75: rgba(color.white, 75),
	blackA25: rgba(color.black, 25),
	blackA50: rgba(color.black, 50),
	blackA75: rgba(color.black, 75),

	//
	primary: '$green400',
	primaryHover: '$green300',
	primaryFocus: '$green600',
	primaryFaded: '$green800',
	primaryText: '$green900',

	// experiments
	green200A50: rgba(color.green200, 50),
	green300A50: rgba(color.green300, 50),
	green400A50: rgba(color.green400, 50),
	//

	//
	...darkThemeColors,
}
