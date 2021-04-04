import { log } from '../spec-utils.js';


export function toHaveLength(value) {
	if (!(this.value instanceof Object)) {
		throw `${this.not ? 'not ' : ''}to have length failed`;
	}

	const message = `${this.not ? 'not ' : ''}to have length`;
	const result = this.value.length === value;

	// @ts-ignore
	return log.newEntry(message, result ^ this.not);
}
