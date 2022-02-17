const jumpingOnClouds = require('../src/jumping-on-clouds');

describe('Jumping on clouds function', () => {
	beforeAll(() => {
		expect(jumpingOnClouds.bind(null, [0])).not.toThrow();
	});

	it('should pass the first test', () => {
		const jumps = jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]);
		expect(jumps).toStrictEqual(4);
	});

	it('should pass the second test', () => {
		const jumps = jumpingOnClouds([0, 0, 0, 0, 1, 0]);
		expect(jumps).toStrictEqual(3);
	});

	it('should pass the third test', () => {
		const jumps = jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]);
		expect(jumps).toStrictEqual(3);
	});
});
