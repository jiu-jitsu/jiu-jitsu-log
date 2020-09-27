
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

const getDate = () => {

	/**
	 *
	 */

	return new Date()

}

/**
 *
 */

const getLine = () => {

	/**
	 *
	 */

	const error = new Error()
	const stack = error.stack.split(`\n`).slice(3, 9).map((str) => str.trim())
	const line = stack[0].split(` `).pop().replace(/\(|\)/g, ``)

	/**
	 *
	 */

	return line

}

/**
 *
 */

module.exports = (key, type, text, reason, show) => {

	/**
	 *
	 */

	const date = new Date()
	const error = new Error()
	const stack = error.stack.split(`\n`).slice(2, 9).map((str) => str.trim())
	const stackLine1 = stack[0].split(` `).pop().replace(/\(|\)/g, ``)
	const stackLine2 = stackLine1.substring(stackLine1.indexOf(`/jiu-jitsu-`))
	const stackTitle = `${date.toISOString()} ${colorize(type)} ---> ${key} -> [${type}] -> ${text}${colorize(`INFO`)}`.trim()

	/**
	 *
	 */

	console.log(`================`)
	console.log(stringify(stackLine2))
	console.log(stringify(stackTitle))

	/**
	 *
	 */

	if (show && reason) {
		console.log(stringify(reason))
	}

}
