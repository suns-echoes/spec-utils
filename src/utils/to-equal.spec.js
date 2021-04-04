describe('to be equal', () => {
	it('true', () => {
		expect(1).to.equal(1);
		expect('yes').to.equal('yes');
		expect([1, 2, 3]).to.equal([1, 2, 3]);
		expect({ a: 1, b: 2 }).to.equal({ b: 2, a: 1 });
		expect(null).to.equal(null);
		expect(undefined).to.equal(undefined);
	});
	it.fail('false', () => {
		expect(1).to.equal(0);
		expect('yes').to.equal('no');
		expect([1, 2, 3]).to.equal([3, 2, 1]);
		expect({ a: 1, b: 2 }).to.equal({ a: 2, b: 1 });
		expect(null).to.equal(undefined);
		expect(undefined).to.equal(null);
	});
	it('not true', () => {
		expect(1).not.to.equal(0);
		expect('yes').not.to.equal('no');
		expect([1, 2, 3]).not.to.equal([3, 2, 1]);
		expect({ a: 1, b: 2 }).not.to.equal({ a: 2, b: 1 });
		expect(null).not.to.equal(undefined);
		expect(undefined).not.to.equal(null);
	});
	it.fail('not false', () => {
		expect(1).not.to.equal(1);
		expect('yes').not.to.equal('yes');
		expect([1, 2, 3]).not.to.equal([1, 2, 3]);
		expect({ a: 1, b: 2 }).not.to.equal({ b: 2, a: 1 });
		expect(null).not.to.equal(null);
		expect(undefined).not.to.equal(undefined);
	});
});
