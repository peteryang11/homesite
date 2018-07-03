import { SIGNUP_INVALID_REQUEST, SIGNUP_SUCCESS } from '../actions/userActions'

export default (state = {
	signedUp: false,
	signupMsg: '',
}, action) => {
	switch (action.type) {
		case SIGNUP_INVALID_REQUEST:
			return Object.assign({}, state, {
				signupMsg: action.signupMsg,
				signedUp: false,
			})
		case SIGNUP_SUCCESS:
			return Object.assign({}, state, {
				signupMsg: '',
				signedUp: true,
			})
		default:
			return state
	}
}