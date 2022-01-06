/**
 * Function to count how much socks pairs can be paired
 * based on the array of number given.
 *
 * @param {number} n length of the array
 * @param {number[]} arr array of socks pairs
 * @returns {number} number of socks pairs
 */
module.exports = (n, arr) => {
	const sortedSocks = arr.sort((prev, next) => prev - next);
	const sortedSocksLength = n;

	let socksPairs = 0;
	let currentIndex = 0;

	while (true) {
		if (
			currentIndex === sortedSocksLength ||
			currentIndex === sortedSocksLength - 1
		) {
			break;
		}

		if (sortedSocks[currentIndex] === sortedSocks[currentIndex + 1]) {
			socksPairs += 1;
			currentIndex += 2;

			continue;
		}

		currentIndex += 1;
	}

	return socksPairs;
};

/**
 * n represent the array length
 * arr[n] represent the color of the sock
 *
 * [10, 20, 20, 10, 10, 30, 50, 10, 20] -> array of socks
 * [10, 10, 10, 10, 20, 20, 20, 30, 50] -> sorted array of socks
 *
 * The current sock selected must match the next sock to be
 * called a pair of socks -> arr[0] === arr[1] -> 1 === 1
 *
 * If match, change the current index to the index after the next sock.
 * Because we want to skip the sock that matched the current sock,
 * this mean skip 2 sock from the current index
 *
 * [1, 1, 1, ...]
 *  ^--^
 *  Pair
 *
 * 1 at index 0
 * 1 at index 1 -> called a pair
 *
 * Go to index 2 because index 0 and index 1 is a pair
 *
 * [1, 1, 1, ...]
 *        ^
 *     Current
 *
 * Iterate until the current index is equal
 * to (array.length) || (array.length - 1)
 */
