import { rollup } from 'rollup';

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

import { config } from '../config';


const inputOptions = {
	external: ['child_process'],
	input: config.paths.main.input,
	treeshake: true,
	plugins: [
		resolve({
			preferBuiltins: true,
		}),
		commonjs(),
		terser(config.rollup.plugins.terser),
	],
};


export async function packModules() {
	const bundle = await rollup(inputOptions);

	await bundle.write({
		compact: true,
		exports: 'named',
		file: config.paths.main.output,
		format: 'cjs',
	});
}
