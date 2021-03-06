describe('to be contained in', () => {
	it('true', () => {
		const a = [2, 3];
		const b = [1, 2, 3, 4];

		expect(a).to.be.contained.in(b);
	});
	it.fail('false', () => {
		const a = [2, 3];
		const b = [1, 2, 3, 4];

		expect(b).to.be.contained.in(a);
	});
	it('not true', () => {
		const a = [2, 3];
		const b = [1, 2, 3, 4];

		expect(b).not.to.be.contained.in(a);
	});
	it.fail('not false', () => {
		const a = [2, 3];
		const b = [1, 2, 3, 4];

		expect(a).not.to.be.contained.in(b);
	});
});
