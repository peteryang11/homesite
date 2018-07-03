import axios from 'axios'
import { coffeeApp } from '../config/config'
import { coffeeApi } from '../config/api'

export const SEND_CONTACT_US_SUCCESS = 'SEND_CONTACT_US_SUCCESS'
export const SEND_CONTACT_US_FAIL = 'SEND_CONTACT_US_FAIL'

export function sendContactUs(phone, workStatus, content, email, name) {
	return dispatch => {
		axios.post(coffeeApp.baseUrl + coffeeApi.contactus,
			{
				phone: phone, 
				workStatus: workStatus, 
				content: content,
				email: email,
				name: name
		}).then(function(res){
			if (!res.data || !res.data.result) {
				dispatch(receiveContactusError(res.data.data))
			} else {
				dispatch(receiveContactusSuccess())
			}
		})
	}
}

function receiveContactusError(error) {
	return {
		result: false,
		error: error
	}
}

function receiveContactusSuccess() {
	return {
		result:true
	}
}