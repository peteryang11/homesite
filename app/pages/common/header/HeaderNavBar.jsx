import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserContainer from './user/UserContainer'

export default class HeaderNavBar extends Component {
	render() {
		return (
			<ul className="navbar-nav">
				<li className="nav-item">
					<Link to='/'>
						<h3 className="navbar-button">Home|主页</h3>
					</Link>
				</li>
				<li className="nav-item">
					<UserContainer/>
				</li>
			</ul>
		)
	}
}