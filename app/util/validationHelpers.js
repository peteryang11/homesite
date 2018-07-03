const URL = require('url-parse')

export function validateEmail(email) {
	//https://stackoverflow.com/questions/46155/validate-email-address-in-javascript
	/* eslint-disable */
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	/* eslint-enable */
	return re.test(email)
}

export function isValidInternalURL(url, baseHost) {
	if (url === null) {
		return false
	}
	let host = (new URL(url)).host
	if (host.indexOf(":") >= 0) {
		host = host.substring(0, host.indexOf(":"))
	}
	return host.endsWith(baseHost)
}