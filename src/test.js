/* eslint-disable no-console */
import { listFiles } from '@suns-echoes/file-system-utils/src/utils/list-files.js';
import './index.js';
import { log } from './spec-utils.js';


(async () => {
	process.chdir('./src');

	await describe('expect', async () => {
		const tests = await listFiles('./utils', { filter: /\.spec\.js$/ });

		for (const test of tests) {
			await import(`./${test}`);
		}
	});

	if (log.error) {
		console.log('\n✖ Test failed\n');
		throw new Error('');
	}
	else {
		console.log('\n✔ Test OK\n');
	}
})();
