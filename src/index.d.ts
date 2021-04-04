interface SuiteFunction {
	(description: string, callback: () => void): void;
	// TODO: implement
	// fail: (description: string, callback: () => void) => void;
	// only: (description: string, callback: () => void) => void;
}

interface TestFunction {
	(description: string, callback: () => void): void;
	fail: (description: string, callback: () => void) => void;
	// TODO: implement
	// only: (description: string, callback: () => void) => void;
}

interface ExpectToBe {
	(value: any): boolean;
	array: () => boolean;
	contained: { in: (value: any[]) => boolean };
	defined: () => boolean;
	false: () => boolean;
	falsy: () => boolean;
	function: () => boolean;
	instance: { of: (value: any) => boolean };
	null: () => boolean;
	number: () => boolean;
	object: () => boolean;
	string: () => boolean;
	true: () => boolean;
	truthy: () => boolean;
	undefined: () => boolean;
}

interface ExpectToHave {
	(value: string[]): boolean;
	methods: (value: string[]) => boolean;
	properties: (value: string[]) => boolean;
}

interface ExpectTo {
	be: ExpectToBe;
	contain: (value: any[]) => boolean;
	have: ExpectToHave;
	equal: (value: any) => boolean;
	match: (value: string | RegExp) => boolean;
}

interface ExpectMethods {
	to: ExpectTo;
	not: {
		to: ExpectTo;
	};
}

interface ExpectFunction {
	(value: any): ExpectMethods;
}

declare var expect: ExpectFunction;
declare var describe: SuiteFunction;
declare var it: TestFunction;
