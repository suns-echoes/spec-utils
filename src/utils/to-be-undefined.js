import { log } from '../spec-utils.js';


export function toBeUndefined() {
	const message = `${this.not ? 'not ' : ''}to be undefined`;
	const result = this.value === undefined;

	// @ts-ignore
	return log.newEntry(message, result ^ this.not);
}
