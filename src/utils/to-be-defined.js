import { log } from '../spec-utils.js';


export function toBeDefined() {
	const message = `${this.not ? 'not ' : ''}to be defined`;
	const result = this.value !== undefined;

	// @ts-ignore
	return log.newEntry(message, result ^ this.not);
}
