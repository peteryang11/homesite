import { combineReducers } from 'redux'
import userSignupState from './userSignupState'
import userSigninState from './userSigninState'
import user from './user'

export default combineReducers({
	userSigninState,
	userSignupState,
	user,
})