import { log } from '../spec-utils.js';


export function toBeNumber() {
	const message = `${this.not ? 'not ' : ''}to be number`;
	const result = typeof this.value === 'number';

	// @ts-ignore
	return log.newEntry(message, result ^ this.not);
}
