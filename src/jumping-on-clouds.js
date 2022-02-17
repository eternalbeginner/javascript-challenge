/**
 * Function to count the jumps taken from the starting point
 * to the last cloud and also avoid thunderheads that
 * represented by 1.
 *
 * @param {number[]} clouds array of clouds represented by number
 * @returns {number} number of jumps taken
 */
module.exports = (clouds) => {
	let current = 0;
	let jumps = 0;

	while (true) {
		if (current === clouds.length - 1) {
			break;
		}

		let safe = current;

		if (clouds[current + 1] === 0) safe = current + 1;
		if (clouds[current + 2] === 0) safe = current + 2;

		current = safe;
		jumps = jumps + 1;
	}

	return jumps;
};

/**
 * 1 represent thunder heads
 * 0 represent cumulus clouds
 *
 * 0 1 0 0 0 1 0  -> clouds
 * .   . . .   .  -> clouds that are safe
 *
 * Based on the input, the users must avoid the clouds at index 1 and 5
 *
 * The safe clouds = [2 3 4 6]
 * Possible jumps = [2 3 4 6] or [2 4 6]
 *
 * We must return the minimum jumps taken to go to the last cloud
 * The result is [2 4 6] -> 3 jumps
 */
