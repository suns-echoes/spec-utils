import { log } from '../spec-utils.js';


export function toBeTrue() {
	const message = `${this.not ? 'not ' : ''}to be true`;
	const result = this.value === true;

	// @ts-ignore
	return log.newEntry(message, result ^ this.not);
}
