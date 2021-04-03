import { log } from '../spec-utils.js';


export function toBeInstanceOf(value) {
	const message = `${this.not ? 'not ' : ''}to be instance of`;
	const result = this.value instanceof value;

	// @ts-ignore
	return log.newEntry(message, result ^ this.not);
}
