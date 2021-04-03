import { log } from '../spec-utils.js';


export function toBeString() {
	const message = `${this.not ? 'not ' : ''}to be string`;
	const result = typeof this.value === 'string';

	// @ts-ignore
	return log.newEntry(message, result ^ this.not);
}
