/* eslint-disable no-console */
import './index.js';
import { log } from './spec-utils.js';


describe('expect', () => {
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
	});
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
});


if (log.error) {
	console.log('\n✖ Test failed\n');
	throw new Error('');
}
else {
	console.log('\n✔ Test OK\n');
}
