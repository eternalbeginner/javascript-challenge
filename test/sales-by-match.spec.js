const salesByMatch = require('../src/sales-by-match');

describe('Sales by match', () => {
	beforeAll(() => {
		expect(salesByMatch.bind(null, 1, [1])).not.toThrow();
	});

	it('should pass the first test', () => {
		const pairs = salesByMatch(7, [1, 2, 1, 2, 1, 3, 2]);
		expect(pairs).toStrictEqual(2);
	});

	it('should pass the second test', () => {
		const pairs = salesByMatch(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
		expect(pairs).toStrictEqual(3);
	});
});
