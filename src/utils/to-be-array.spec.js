describe('to be array', () => {
	it('true', () => {
		const a = [];

		expect(a).to.be.array();
	});
	it.fail('false', () => {
		const a = {};

		expect(a).to.be.array();
	});
	it('not true', () => {
		const a = {};

		expect(a).not.to.be.array();
	});
	it.fail('not false', () => {
		const a = [];

		expect(a).not.to.be.array();
	});
});
