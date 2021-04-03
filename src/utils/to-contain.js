import { log } from '../spec-utils.js';


/**
 * Check if expected array contains elements from comparative array or value.
 * @function expect(array)[.not].to.contain(array|any)
 * @param {array|any} value - comparative array or value
 * @return {boolean}
 */
export function toContain(value) {
	const message = `${this.not ? 'not ' : ''}to contain`;
	let result = false;

	if (Array.isArray(this.value)) {
		result = value.every((name) => (name in this.value));
	}
	else {
		result = this.value.includes(value);
	}

	// @ts-ignore
	return log.newEntry(message, result ^ this.not);
}
