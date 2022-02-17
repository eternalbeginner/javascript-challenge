const repeatedString = require('../src/repeated-string');

describe('Repeated string function', () => {
	beforeAll(() => {
		expect(repeatedString.bind(null, 'a', 1)).not.toThrow();
	});

	it('should pass the first test', () => {
		const a = repeatedString('abcac', 10);
		expect(a).toStrictEqual(4);
	});

	it('should pass the second test', () => {
		const a = repeatedString('aba', 10);
		expect(a).toStrictEqual(7);
	});

	it('should pass the third test', () => {
		const a = repeatedString('a', 1_000_000_000_000);
		expect(a).toStrictEqual(1_000_000_000_000);
	});
});
