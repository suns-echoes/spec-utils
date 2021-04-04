describe('to be NaN', () => {
	it('true', () => {
		expect(0 / 0).to.be.NaN();
	});
	it.fail('false', () => {
		expect(1).to.be.NaN();
	});
	it('not true', () => {
		expect(1).not.to.be.NaN();
	});
	it.fail('not false', () => {
		expect(0 / 0).not.to.be.NaN();
	});
});
