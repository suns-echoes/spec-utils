/* eslint-disable no-console */
function trace() {
	try {
		throw new Error();
	}
	catch (error) {
		return error.stack.replace(/^(.+?\n){5}(.+)[\s\S]+/, '$1').trim();
	}
}

export const log = {
	entries: [],
	error: false,
	level: 0,
	newEntry(message, success) {
		this.entries.push({
			type: success ? 'log' : 'error',
			message: `expect ${message}`,
			error: !success,
			trace: !success ? trace() : null,
		});

		if (!success) {
			this.error = true;
		}

		return success;
	},
	echo() {
		this.entries.forEach(({ type, message, error, trace }) => {
			switch (type) {
				case 'groupEnd': {
					console[type]();
					break;
				}
				case 'log': {
					const logMessage = `${message}`;

					console.log(`%c✓ ${logMessage}`, 'color: #00DD00; background: #002900;');
					break;
				}
				case 'error': {
					const logMessage = `${message} ${trace}`;

					console.log(`%c✕ ${logMessage}`, 'color: #FF4000; background: #290000;');
					break;
				}
				default: {
					console[type](`%c${message}`, `color: ${error ? '#FF0000' : '#00FF00'}`);
					break;
				}
			}
		});
	},
};

export function describe(description, callback) {
	const previousEntries = log.entries;
	const previousError = log.error;

	log.entries = [];
	log.error = false;
	log.level++;

	callback();

	if (--log.level === 0) {
		log.entries = [
			{ type: log.error ? 'group' : 'groupCollapsed', message: description, error: log.error },
			...log.entries,
			{ type: 'groupEnd' },
		];
		log.echo();
		log.entries = [];
	}
	else {
		log.entries = [
			...previousEntries,
			{ type: log.error ? 'group' : 'groupCollapsed', message: description, error: log.error },
			...log.entries,
			{ type: 'groupEnd' },
		];
	}

	log.error = previousError || log.error;
}

export function it(description, callback) {
	const previousEntries = log.entries;
	const previousError = log.error;

	log.entries = [];
	log.error = false;

	callback();

	log.entries = [
		...previousEntries,
		{
			type: (this && this.fail) ? 'group' : 'groupCollapsed',
			message: `${(this && this.fail) ? '(fail) ' : ''}${description}`,
			// @ts-ignore
			error: log.error ^ (this && this.fail),
		},
		...log.entries,
		{ type: 'groupEnd' },
	];
	// @ts-ignore
	log.error = previousError || log.error ^ (this && this.fail);
}

it.fail = it.bind({ fail: true });
