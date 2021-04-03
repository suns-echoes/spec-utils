import { listFiles } from '@suns-echoes/file-system-utils/src/utils/list-files';
import { readTextFile } from '@suns-echoes/file-system-utils/src/utils/read-text-file';
import { writeTextFile } from '@suns-echoes/file-system-utils/src/utils/write-text-file';
import { transformESMIntoCJS } from '@suns-echoes/transform-esm-into-cjs/src';

import { config } from '../config';


export async function transformModulesIntoCJS() {
	const distPath = config.paths.src.output.cjs;

	const files = await listFiles(distPath, {
		depth: -1,
		filter: /\.js$/,
	});

	for (const filepath of files) {
		let source = await readTextFile(filepath);

		source = transformESMIntoCJS(source);

		await writeTextFile(filepath, source);
	}
}
