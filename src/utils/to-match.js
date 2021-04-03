import { log } from '../spec-utils.js';


export function toMatch(value) {
	const message = `${this.not ? 'not ' : ''}to match`;
	let result = false;

	if (value instanceof RegExp) {
		result = value.test(this.value);
	}
	else {
		result = this.value.includes(value);
	}

	// @ts-ignore
	return log.newEntry(message, result ^ this.not);
}
