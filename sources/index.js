
/**
 *
 */

const ___stringify = (message) => {

	/**
	 *
	 */

	if (!message) {
		return ''
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

	if(message.constructor === String) {
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

class Log {

	/**
	 *
	 */

	constructor () {

		/**
		 *
		 */

		this.types = {

			/**
			 * info
			 */

			I: 'INFO',

			/**
			 * fail
			 */

			F: 'FAIL'

		}

		/**
		 *
		 */

		this.colors = {

			/**
			 * default - black
			 */

			D: '\x1b[0m',

			/**
			 * info - green
			 */

			I: '\x1b[32m',

			/**
			 * fail - red
			 */

			F: '\x1b[31m'

		}

	}

	/**
	 *
	 */

	info (title, message) {

		/**
		 *
		 */

		this.___log('I', title, message)

	}

	/**
	 *
	 */

	fail (title, message) {

		/**
		 *
		 */

		this.___log('F', title, message)

	}

	/**
	 *
	 */

	___log (type, title, message) {

		/**
		 *
		 */

		const date = new Date()
		const text = (`${date.toISOString()} [${this.types[type]}] ---> ${this.colors[type]}${title}${this.colors['D']}\n${___stringify(message)}`).trim()

		/**
		 *
		 */

		console.log(text)

	}

}

/**
 *
 */

module.exports = new Log()
