describe('to have length', () => {
	it('true', () => {
		const a = [1, 2, 3];

		expect(a).to.have.length(3);
	});
	it.fail('false', () => {
		const a = [1, 2, 3];

		expect(a).to.have.length(0);
	});
	it('not true', () => {
		const a = [1, 2, 3];

		expect(a).not.to.have.length(0);
	});
	it.fail('not false', () => {
		const a = [1, 2, 3];

		expect(a).not.to.have.length(3);
	});
});
