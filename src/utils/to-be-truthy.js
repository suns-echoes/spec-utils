import { log } from '../spec-utils.js';


export function toBeTruthy() {
	const message = `${this.not ? 'not ' : ''}to be truthy`;
	const result = !!this.value;

	// @ts-ignore
	return log.newEntry(message, result ^ this.not);
}
