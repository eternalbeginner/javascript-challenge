const countingValleys = require('../src/counting-valleys');

describe('Counting valleys function', () => {
	beforeAll(() => {
		expect(countingValleys.bind(null, 1, 'D')).not.toThrow();
	});

	it('should pass the first test', () => {
		const valleys = countingValleys(8, 'UDDDUDUU');
		expect(valleys).toStrictEqual(1);
	});

	it('should pass the second test', () => {
		const valleys = countingValleys(8, 'DDUUUUDD');
		expect(valleys).toStrictEqual(1);
	});
});
