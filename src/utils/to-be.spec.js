describe('to be', () => {
	it('true', () => {
		const a = [];
		const o = {};

		expect('a').to.be('a');
		expect(a).to.be(a);
		expect(o).to.be(o);
	});
	it.fail('false', () => {
		expect('a').to.be('b');
		expect({}).to.be({});
		expect([]).to.be([]);
	});
});
