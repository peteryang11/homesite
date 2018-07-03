import { SIGNIN_INVALID_REQUEST, SIGNIN_SUCCESS, SIGNOUT_SUCCESS } from '../actions/userActions'

export default (state = {
	signedIn: false,
	signinMsg: '',
}, action) => {
	switch (action.type) {
		case SIGNIN_INVALID_REQUEST:
			return Object.assign({}, state, {
				signinMsg: action.signinMsg,
				signedIn: false,
			})
		case SIGNIN_SUCCESS:
			return Object.assign({}, state, {
				signinMsg: '',
				signedIn: true,
			})
		case SIGNOUT_SUCCESS:
			return Object.assign({}, state, {
				signinMsg: '',
				signedIn: false,
			})
		default:
			return state
	}
}