import React from 'react'
import { Link } from 'react-router-dom'

import BaseComponent from '../common/BaseComponent'

export default class HomePageContainer extends BaseComponent {

	render() {
		window.console.log("1111111")
		return (
			<div>
				<Link to="/2">To 2</Link>
				Welcome to Passerby Coffee!
			</div>
		)
	}
}