import React, { Component } from 'react'
import HeaderLogo from './HeaderLogo'
import HeaderNavBar from './HeaderNavBar'

export default class HeaderContainer extends Component {

	render() {

		return (
			<div className="top-nav row">
				<div className="container-fixer">
					<div className="col-sm-3 col-sm-offset-1 col-xs-4 flexer-1">
						<HeaderLogo/>
					</div>
					<div className="navbar-buttons col-sm-offset-2 collapse navbar-collapse flexer-2">
						<HeaderNavBar/>
					</div>
				</div>
			</div>
		)
	}
}