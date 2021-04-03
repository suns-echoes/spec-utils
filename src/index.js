import { it } from './spec-utils.js';
import { describe } from './spec-utils.js';
import { expect } from './utils/expect.js';


// @ts-ignore
global.describe = describe;
// @ts-ignore
global.it = it;
// @ts-ignore
global.expect = expect;


export const log = {
	hasError: () => log.error,
};
