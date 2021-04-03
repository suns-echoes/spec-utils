import { toBeContainedIn } from './to-be-contained-in.js';
import { toBeDefined } from './to-be-defined.js';
import { toBeFalse } from './to-be-false.js';
import { toBeFalsy } from './to-be-falsy.js';
import { toBeFunction } from './to-be-function.js';
import { toBeInstanceOf } from './to-be-instance-of.js';
import { toBeNull } from './to-be-null.js';
import { toBeNumber } from './to-be-number.js';
import { toBeObject } from './to-be-object.js';
import { toBeString } from './to-be-string.js';
import { toBeTrue } from './to-be-true.js';
import { toBeTruthy } from './to-be-truthy.js';
import { toBeUndefined } from './to-be-undefined.js';
import { toBe } from './to-be.js';
import { toContain } from './to-contain.js';
import { toEqual } from './to-equal.js';
import { toHaveMethods } from './to-have-methods.js';
import { toHaveProperties } from './to-have-properties.js';
import { toHave } from './to-have.js';
import { toMatch } from './to-match.js';


export function expect(value) {
	const _toBe = toBe.bind({ value });
	const _toHave = toHave.bind({ value });
	const _notToBe = toBe.bind({ value, not: true });
	const _notToHave = toHave.bind({ value, not: true });

	_toBe.contained = { in: toBeContainedIn.bind({ value }) },
	_toBe.defined = toBeDefined.bind({ value }),
	_toBe.false = toBeFalse.bind({ value });
	_toBe.falsy = toBeFalsy.bind({ value });
	_toBe.function = toBeFunction.bind({ value });
	_toBe.instance = { of: toBeInstanceOf.bind({ value }) };
	_toBe.null = toBeNull.bind({ value });
	_toBe.number = toBeNumber.bind({ value });
	_toBe.object = toBeObject.bind({ value });
	_toBe.string = toBeString.bind({ value });
	_toBe.true = toBeTrue.bind({ value });
	_toBe.truthy = toBeTruthy.bind({ value });
	_toBe.undefined = toBeUndefined.bind({ value });
	_toHave.methods = toHaveMethods.bind({ value });
	_toHave.properties = toHaveProperties.bind({ value });

	_notToBe.contained = { in: toBeContainedIn.bind({ value, not: true }) };
	_notToBe.defined = toBeDefined.bind({ value, not: true  }),
	_notToBe.false = toBeFalse.bind({ value, not: true });
	_notToBe.falsy = toBeFalsy.bind({ value, not: true });
	_notToBe.function = toBeFunction.bind({ value, not: true });
	_notToBe.instance = { of: toBeInstanceOf.bind({ value, not: true }) };
	_notToBe.null = toBeNull.bind({ value });
	_notToBe.number = toBeNumber.bind({ value, not: true });
	_notToBe.object = toBeObject.bind({ value, not: true });
	_notToBe.string = toBeString.bind({ value, not: true });
	_notToBe.true = toBeTrue.bind({ value, not: true });
	_notToBe.truthy = toBeTruthy.bind({ value, not: true });
	_notToBe.undefined = toBeUndefined.bind({ value, not: true });
	_notToHave.methods = toHaveMethods.bind({ value, not: true });
	_notToHave.properties = toHaveProperties.bind({ value, not: true });

	return {
		to: {
			be: _toBe,
			contain: toContain.bind({ value }),
			equal: toEqual.bind({ value }),
			have: _toHave,
			match: toMatch.bind({ value }),
		},
		not: {
			to: {
				be: _notToBe,
				contain: toContain.bind({ value, not: true }),
				equal: toEqual.bind({ value, not: true }),
				have: _notToHave,
				match: toMatch.bind({ value, not: true }),
			},
		},
	};
}