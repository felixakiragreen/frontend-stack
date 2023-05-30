export function addKeys<T extends object>(
	obj: T,
): T & { keys: (string | null)[] } {
	let keys: (string | null)[] = Object.keys(obj)
	keys.unshift(null)
	let newObj = { ...obj, keys }

	return newObj as T & { keys: (string | null)[] }
}

export function addNegatives(obj: any): any {
	let newObj = { ...obj }
	for (let key in obj) {
		newObj[`-${key}`] = obj[key]
	}

	return newObj
}
