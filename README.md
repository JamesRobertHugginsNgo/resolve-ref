# resolve-ref

[![Open in Github](https://img.shields.io/badge/Open_in_GitHub-6e5494)](https://github.com/JamesRobertHugginsNgo/resolve-ref)
[![Open in Github Page](https://img.shields.io/badge/Open_in_GitHub%20Page-4078c0)](https://jamesroberthugginsngo.github.io/resolve-ref/)
[![Open Tag](https://img.shields.io/badge/Open_Tag-2.0.0-6cc644)](https://github.com/JamesRobertHugginsNgo/resolve-ref/tree/2.0.0)

TypeScript/JavaScript function for getting an object key that points to a value by following one or more references.

## Example

The following is a list of messages translated to different languages and regions. "en" (for English) and "en-CA" (for Canadian English) should refer to the same message. "*" (for any language) refers to "en" and should also refer to the same message.

``` TypeScript
const objWithRef: { [key: string]: any } = {
	'*': { 'ref': 'en' },
	'en': { 'ref': 'en-CA' },
	'en-CA': 'Hello World',
	'fr': { 'ref': 'fr-CA' },
	'fr-CA': 'Bonjour le monde'
}

const key1 = resolveRef(objWithRef, 'en', 'ref'); // 'en-CA'
console.log(objWithRef[key1]); // 'Hello World'

const key2 = resolveRef(objWithRef, 'en-CA', 'ref'); // 'en-CA'
console.log(objWithRef[key2]); // 'Hello World'

const key3 = resolveRef(objWithRef, '*', 'ref'); // 'en-CA'
console.log(objWithRef[key3]); // 'Hello World'
```

## Reusable Codes

Use the raw link to quickly download the raw source code.

- [resolve-ref.ts](./src/resolve-ref.ts) \| [raw](./src/resolve-ref.ts?raw=1)
- [resolve-ref.js](./dist/resolve-ref.js) \| [raw](./dist/resolve-ref.js?raw=1)

## Samples

The following sample web pages are best viewed from the github page version.

- [sample.html](./sample/sample.html)

## License

MIT License. See [LICENSE](LICENSE) for more details.
