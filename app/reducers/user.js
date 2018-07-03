import { GET_PROFILE_START, GET_PROFILE_ERROR, 
	GET_PROFILE_SUCCESS, SIGNOUT_SUCCESS } from '../actions/userActions'

export default (state = {
	loadingProfile: false,
	profile: {},
}, action) => {
	switch (action.type) {
		case GET_PROFILE_START:
			return Object.assign({}, state, {
				loadingProfile: true,
			})
		case GET_PROFILE_ERROR:
			return Object.assign({}, state, {
				loadingProfile: false,
			})
		case GET_PROFILE_SUCCESS:
			return Object.assign({}, state, {
				loadingProfile: false,
				profile: copyProfile(action.profile),
			})
		case SIGNOUT_SUCCESS:
			return Object.assign({}, state, {
				profile: {},
			})
		default:
			return state
	}
}

let copyProfile = function(profile) {
	return {
		email: profile.email,
		firstName: profile.first_name,
		middleName: profile.middle_name,
		lastName: profile.last_name,
		wechat: profile.wechat,
		graduationMonth: profile.graduation_month,
		graduationYear: profile.graduation_year,
		consented: profile.consented,
		schoolDepartment: profile.school_department,
			
	}
}