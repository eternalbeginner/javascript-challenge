/**
 * Function for counting the valleys that the hiker
 * have been encountered during their hikes
 *
 * @param {number} steps number of steps taken
 * @param {string} path string of steps
 * @returns {number} number of valleys encountered
 */
module.exports = (steps, path) => {
	let seaLevel = 0;
	let isValley = false;
	let valleysCount = 0;

	for (let step = 0; step < steps; step++) {
		if (seaLevel < 0) {
			isValley = true;
		}

		seaLevel += path[step] === 'U' ? 1 : -1;

		if (isValley && seaLevel === 0) {
			valleysCount += 1;
			isValley = false;
		}
	}

	return valleysCount;
};

/**
 * D represent Downhill
 * U represent Uphill
 *
 * D D U U U U D D
 *
 *           /\
 * __ _____/___\__
 *   \   /
 *    \/   Valley encountered
 *
 * When the level is below the sea level and go uphill
 * until it's reach the sea level again, thats count
 * as a valley
 */
