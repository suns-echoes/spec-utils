import { log } from '../spec-utils.js';


export function toBeFalsy() {
	const message = `${this.not ? 'not ' : ''}to be falsy`;
	const result = !this.value;

	// @ts-ignore
	return log.newEntry(message, result ^ this.not);
}
