/* BOILERPLATE */

export default function resolveRef(refDictionary: { [key: string]: any }, key: string, refKey: string = 'ref'): string {
	if (
		typeof refDictionary[key] === 'object'
		&& Object.getPrototypeOf(refDictionary[key]) === Object.getPrototypeOf({})
		&& refDictionary[key][refKey]
	) {
		return resolveRef(refDictionary, refDictionary[key][refKey]);
	}
	return key;
}
