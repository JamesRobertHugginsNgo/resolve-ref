export default function resolveRef(refDictionary, key, refKey = "ref") {
	if (
		typeof refDictionary[key] === "object" &&
		Object.getPrototypeOf(refDictionary[key]) ===
			Object.getPrototypeOf({}) &&
		refDictionary[key][refKey]
	) {
		return resolveRef(refDictionary, refDictionary[key][refKey]);
	}
	return key;
}
