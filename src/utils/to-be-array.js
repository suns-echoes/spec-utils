import { log } from '../spec-utils.js';


export function toBeArray() {
	const message = `${this.not ? 'not ' : ''}to be array`;
	const result = Array.isArray(this.value);

	// @ts-ignore
	return log.newEntry(message, result ^ this.not);
}
