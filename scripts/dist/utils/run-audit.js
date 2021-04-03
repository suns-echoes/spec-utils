import { exec } from '@suns-echoes/exec/src/exec';


export async function runAudit() {
	const { code, output } = await exec('npm', ['audit']);

	if (code !== 0) {
		throw output;
	}
}
