import { log } from '../spec-utils.js';


/**
 * Check if expected array elements or value are present in comparative array.
 * @function expect(array|any)[.not].to.be.contained.in(array)
 * @param {array} value - comparative array
 * @return {boolean}
 */
export function toBeContainedIn(value) {
	const message = `${this.not ? 'not ' : ''}to be contained in`;
	let result = false;

	if (Array.isArray(this.value)) {
		result = this.value.every((name) => (name in value));
	}
	else {
		result = value.includes(this.value);
	}

	// @ts-ignore
	return log.newEntry(message, result ^ this.not);
}
