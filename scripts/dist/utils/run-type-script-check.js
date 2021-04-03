import { exec } from '@suns-echoes/exec/src/exec';


export async function runTypeScriptCheck() {
	const { code, output } = await exec('tsc');

	if (code !== 0) {
		throw output;
	}
}
