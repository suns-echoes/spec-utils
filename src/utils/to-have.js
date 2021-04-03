import { log } from '../spec-utils.js';


export function toHave(value) {
	if (typeof this.value !== 'object' || this.value === null) {
		throw `${this.not ? 'not ' : ''}to have failed`;
	}

	const message = `${this.not ? 'not ' : ''}to have`;
	const result = value.every((name) => (name in this.value));

	return log.newEntry(message, result ^ this.not);
}
