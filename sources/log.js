
/**
 *
 */

const stringify = (message) => {

	/**
	 *
	 */

	if (!message) {
		return ``
	}

	/**
	 *
	 */

	if (message.constructor === Number) {
		return message
	}

	/**
	 *
	 */

	if (message.constructor === String) {
		return message
	}

	/**
	 *
	 */

	if (message.constructor === Object) {
		return JSON.stringify(message, null, 4)
	}

	/**
	 *
	 */

	if (message.constructor === Array) {
		return JSON.stringify(message, null, 4)
	}

	/**
	 *
	 */

	return message

}

/**
 *
 */

const colorize = (type) => {

	/**
	 *
	 */

	if (type === `OK`) {
		return `\x1b[32m`
	}

	/**
	 *
	 */

	if (type === `INFO`) {
		return `\x1b[0m`
	}

	/**
	 *
	 */

	if (type === `FAIL`) {
		return `\x1b[31m`
	}

	/**
	 *
	 */

	if (type === `WARNING`) {
		return `\x1b[33m`
	}

}

/**
 *
 */

module.exports = (key, type, message) => {

	/**
	 *
	 */

	const date = new Date()
	const text = `${date.toISOString()} [${type}] ---> ${colorize(type)}${key}${colorize(`INFO`)}\n${stringify(message)}`.trim()

	/**
	 *
	 */

	console.log(text)

}
