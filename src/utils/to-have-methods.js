import { log } from '../spec-utils.js';


export function toHaveMethods(value) {
	if (typeof this.value !== 'object' || this.value === null) {
		throw `${this.not ? 'not ' : ''}to have methods failed`;
	}

	const message = `${this.not ? 'not ' : ''}to have methods`;
	const result = value.every((name) => (typeof this.value[name] === 'function'));

	return log.newEntry(message, result ^ this.not);
}
