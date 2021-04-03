import { log } from '../spec-utils.js';


export function toBeFalse() {
	const message = `${this.not ? 'not ' : ''}to be false`;
	const result = this.value === false;

	// @ts-ignore
	return log.newEntry(message, result ^ this.not);
}
