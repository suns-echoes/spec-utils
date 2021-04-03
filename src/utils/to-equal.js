import { log } from '../spec-utils.js';


export function toEqual(value, _sub = false) {
	const message = `${this.not ? 'not ' : ''}to equal`;
	let result = false;

	if (Object.is(this.value, value)) {
		// @ts-ignore
		result = true;
	}

	if (typeof this.value !== 'object' || typeof value !== 'object') {
		// @ts-ignore
		result = false;
	}

	const keys1 = Object.keys(this.value);
	const keys2 = Object.keys(value);

	if (keys1.length !== keys2.length) {
		// @ts-ignore
		result = false;
	}

	const allKeys = [...new Set([...keys1, ...keys2])];

	result = allKeys.every((key) => toEqual.call(this.value[key], value[key]), true);

	if (_sub) {
		return result;
	}

	// @ts-ignore
	return log.newEntry(message, result ^ this.not);
}
