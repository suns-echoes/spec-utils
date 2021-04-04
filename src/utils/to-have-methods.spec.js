describe('to have methods', () => {
	it('true', () => {
		const o = {
			f1: () => {},
			f2: () => {},
			a: 0,
			b: 2,
		};

		function f() {}
		f.array = function () {};

		expect(o).to.have.methods(['f1', 'f2']);
		expect(f).to.have.methods(['array']);
	});
	it.fail('false', () => {
		const o = {
			f1: () => {},
			f2: () => {},
			a: 0,
			b: 2,
		};

		function f() {}

		expect(o).to.have.methods(['a', 'b']);
		expect(f).to.have.methods(['array']);
	});
	it('not true', () => {
		const o = {
			f1: () => {},
			f2: () => {},
			a: 0,
			b: 2,
		};

		function f() {}

		expect(o).not.to.have.methods(['a', 'b']);
		expect(f).not.to.have.methods(['array']);
	});
	it.fail('not false', () => {
		const o = {
			f1: () => {},
			f2: () => {},
			a: 0,
			b: 2,
		};

		function f() {}
		f.array = function () {};

		expect(o).not.to.have.methods(['f1', 'f2']);
		expect(f).not.to.have.methods(['array']);
	});
});
