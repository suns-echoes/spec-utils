import { log } from '../spec-utils.js';


export function toBeNull() {
	const message = `${this.not ? 'not ' : ''}to be null`;
	const result = this.value === null;

	// @ts-ignore
	return log.newEntry(message, result ^ this.not);
}
