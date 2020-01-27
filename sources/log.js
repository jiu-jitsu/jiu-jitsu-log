
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

module.exports = (id, key, type, text, data) => {

	/**
	 *
	 */

	const date = getDate()
	const line = getLine()
	const title = `${date.toISOString()} ---> ${colorize(type)} ${id} -> ${key} -> [${type}] -> ${text}${colorize(`INFO`)}`.trim()

	/**
	 *
	 */

	console.log(`================================================================`)

	/**
	 *
	 */

	console.log(stringify(line))
	console.log(stringify(title))

	/**
	 *
	 */

	if (data) {
		console.log(stringify(data))
	}

	/**
	 *
	 */

	return {
		id,
		key,
		type,
		text,
		date,
		line,
		data
	}

}
