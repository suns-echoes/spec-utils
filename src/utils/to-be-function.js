import { log } from '../spec-utils.js';


export function toBeFunction() {
	const message = `${this.not ? 'not ' : ''}to be function`;
	const result = typeof this.value === 'function';

	// @ts-ignore
	return log.newEntry(message, result ^ this.not);
}
