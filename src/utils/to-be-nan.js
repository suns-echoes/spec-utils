import { log } from '../spec-utils.js';


export function toBeNaN() {
	const message = `${this.not ? 'not ' : ''}to be NaN`;
	const result = Number.isNaN(this.value);

	// @ts-ignore
	return log.newEntry(message, result ^ this.not);
}
