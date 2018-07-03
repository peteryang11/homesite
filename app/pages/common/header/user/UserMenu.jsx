import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class UserMenu extends Component {

	constructor(props) {
		super(props)
	}
	
	render() {
		const { visible, hideMenu } = this.props

		let hideClass = (() => {
			if (!visible)
				return 'hidden'

			return ''
		})()
		
		return (
			<div className={"user-action-menu " + hideClass}>
				<ul>
					<li>
						<div>
							<Link to='/users/me' 
								onClick={hideMenu}>
								My Profile
							</Link>
						</div>
					</li>
				</ul>
			</div>
		)
	}
}

UserMenu.propTypes = {
	visible: PropTypes.bool.isRequired,
	hideMenu: PropTypes.func.isRequired,
}