/* BOILERPLATE */

export default function resolveRef(refDictionary, key) {
	if (
		typeof refDictionary[key] === 'object'
		&& Object.getPrototypeOf(refDictionary[key]) === Object.getPrototypeOf({})
		&& refDictionary[key].ref
	) {
		return resolveRef(refDictionary, refDictionary[key].ref);
	}
	return key;
}
