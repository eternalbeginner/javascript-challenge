/**
 * Function to count a from the repeated string
 *
 * @param {string} s string to be repeated
 * @param {number} n length of string to be counted
 * @returns count of a of the string
 */
module.exports = (s, n) => {
	if (s.length === 1 && s === 'a') {
		return n;
	}

	if (!/[a]/gi.test(s)) {
		return 0;
	}

	const countOfA = s.replace(/[^a]/gi, '').length;
	const countOfARemain = s.slice(0, n % s.length).replace(/[^a]/gi, '').length;

	return countOfA * Math.floor(n / s.length) + countOfARemain;
};

/**
 * abcac -> string to repeat
 * 10 -> length of string to be counted
 *
 *
 */
