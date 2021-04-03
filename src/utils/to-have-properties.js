import { log } from '../spec-utils.js';


export function toHaveProperties(value) {
	if (typeof this.value !== 'object' || this.value === null) {
		throw `${this.not ? 'not ' : ''}to have properties failed`;
	}

	const message = `${this.not ? 'not ' : ''}to have properties`;
	const result = value.every((name) => (name in this.value && typeof this.value[name] !== 'function'));

	return log.newEntry(message, result ^ this.not);
}
