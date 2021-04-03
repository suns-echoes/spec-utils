import { log } from '../spec-utils.js';


export function toBeObject() {
	const message = `${this.not ? 'not ' : ''}to be object`;
	const result = typeof this.value === 'object';

	// @ts-ignore
	return log.newEntry(message, result ^ this.not);
}
