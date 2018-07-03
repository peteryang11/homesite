import { readCookie, eraseCookie, userIdCookie, emailCookie, sessionCookie } from './cookieHelpers'

export function verifyUserLoginState(loginCb, logoutCb) {
	const { userId, sessionId, email } = getSessionValues()

	if (!(userId && sessionId && email)) {
		logoutCb()
	} else {
		loginCb()
	}
}

export function signoutUser() {
	for (const c of ['fe_el', 'fe_el_id', 'fe_sk_el']) {
		eraseCookie(c)
	}
}

export function getSessionValues() {
	let email = readCookie(emailCookie)
	return {
		userId: readCookie(userIdCookie) || '',
		sessionId: readCookie(sessionCookie) || '',
		email: email === null ? '' : email.replace('%40', '@'),
	}
}

export function requireAuth(nextState, replace) {
	const { userId, sessionId, email } = getSessionValues()
	if (!(userId && sessionId && email)) {
		replace({pathname: '/users/signin'})
	}
}
