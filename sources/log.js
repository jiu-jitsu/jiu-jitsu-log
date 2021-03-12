
/**
 *
 */

function colorize (type) {

	/**
	 *
	 */

	if (type === "OK") {
		return "\x1b[32m"
	}

	/**
	 *
	 */

	if (type === "INFO") {
		return "\x1b[0m"
	}

	/**
	 *
	 */

	if (type === "ERROR") {
		return "\x1b[31m"
	}

	/**
	 *
	 */

	if (type === "WARNING") {
		return "\x1b[33m"
	}

}

/**
 *
 */

function stringify (value) {

	/**
	 *
	 */

	if (!value) {
		return ""
	}

	/**
	 *
	 */

	if (value.constructor === Number) {
		return value
	}

	/**
	 *
	 */

	if (value.constructor === String) {
		return value
	}

	/**
	 *
	 */

	if (value.constructor === Object) {
		return JSON.stringify(value, null, 4)
	}

	/**
	 *
	 */

	if (value.constructor === Array) {
		return JSON.stringify(value, null, 4)
	}

	/**
	 *
	 */

	if (value.constructor === Error) {
		return JSON.stringify(errorToObject(value), null, 4)
	}

	/**
	 *
	 */

	return value

}

/**
 *
 */

function errorToObject (error) {
	const name = "Error"
	const stack = error.stack.split("\n").slice(1, 9).map((str) => str.trim())
	const message = error.message
	return { name, message, stack }
}

/**
 *
 */

class LOG {

	/**
	 *
	 */

	constructor (key, type, body, show) {

		/**
		 *
		 */

		const date = new Date()
		const error = new Error()
		const errorAsObject = errorToObject(error)
		const stack = errorAsObject.stack.slice(1, 9)
		const stackLine1 = stack[0].split(" ").pop().replace(/[()]/gi, "")
		const stackLine2 = stackLine1.substring(stackLine1.indexOf("/jiu-jitsu-"))
		const stackTitle = `${date.toISOString()}${colorize(type)} ---> ${key} -> [${type}] -> ${body.shift()}${colorize("INFO")}`.trim()

		/**
		 *
		 */

		console.log("================")
		console.log(stringify(stackLine2))
		console.log(stringify(stackTitle))

		/**
		 *
		 */

		if (show && body) {
			while (body[0]) {
				console.log("====")
				console.log(stringify(body.shift()))
			}
		}

		/**
		 *
		 */

		this.key = key
		this.type = type
		this.date = date
		this.body = body
		this.stack = stack

	}

}

/**
 *
 */

module.exports = LOG
