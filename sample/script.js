import resolveRef from '../src/script.js';

const refDictionary = {
	keyA: true,
	keyB: 123,
	keyC: 'string',
	keyD: { ref: 'keyA' },
	keyE: { ref: 'keyD' },
	keyF: { ref: 'keyE' }
};

console.log('keyA', resolveRef(refDictionary, 'keyA'));
console.log('keyB', resolveRef(refDictionary, 'keyB'));
console.log('keyC', resolveRef(refDictionary, 'keyC'));
console.log('keyD', resolveRef(refDictionary, 'keyD'));
console.log('keyE', resolveRef(refDictionary, 'keyE'));
console.log('keyF', resolveRef(refDictionary, 'keyF'));
