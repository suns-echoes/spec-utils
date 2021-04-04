describe('to be defined', () => {
	it('true', () => {
		const a = 1;
		const b = { a: 1 };
		const c = [1];

		expect(a).to.be.defined();
		expect(b.a).to.be.defined();
		expect(c[0]).to.be.defined();
	});
	it.fail('false', () => {
		const b = { a: 1 };
		const c = [1];

		expect(b.b).to.be.defined();
		expect(c[1]).to.be.defined();
	});
});
