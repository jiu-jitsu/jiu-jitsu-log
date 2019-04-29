
/**
 *
 */

const ___stringify = (message) => {

	/**
	 *
	 */

	if (!message) {

		/**
		 *
		 */

		return ''

		/**
		 *
		 */

	} else if (message.constructor === Number) {

		/**
		 *
		 */

		return message

		/**
		 *
		 */

	} else if (message.constructor === String) {

		/**
		 *
		 */

		return message

		/**
		 *
		 */

	} else if (message.constructor === Object) {

		/**
		 *
		 */

		return JSON.stringify(message, null, 4)

		/**
		 *
		 */

	} else if (message.constructor === Array) {

		/**
		 *
		 */

		return JSON.stringify(message, null, 4)

		/**
		 *
		 */

	} else {

		/**
		 *
		 */

		return message

	}

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

	info (title, message) {

		/**
		 *
		 */

		this.___log('I', title, message)

	}

	fail (title, message) {

		/**
		 *
		 */

		this.___log('F', title, message)

	}

	___log (type, title, message) {

		/**
		 *
		 */

		const date = new Date()
		const text = (`[${date.toISOString()}] Log ---> ${this.colors[type]}${title}${this.colors['D']}\n${___stringify(message)}`).trim()

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
