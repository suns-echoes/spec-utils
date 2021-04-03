import { log } from '../spec-utils.js';


export function toBe(value) {
	const message = `${this.not ? 'not ' : ''}to be`;
	const result = this.value === value;

	// @ts-ignore
	return log.newEntry(message, result ^ this.not);
}
