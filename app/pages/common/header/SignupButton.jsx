import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SignupButton extends Component {
	render() {
		return (
			<div>
				<Link to='/users/signup' className="user-button signup-button nav-button">
					<div className="icon-text">Signup|注册</div>
				</Link>
			</div>
		)

	}
}
