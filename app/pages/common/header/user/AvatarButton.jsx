import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AvatarButton extends Component {

	render() {
		const { user, toggleMenu } = this.props
		return (
			<a className="user-button nav-button avatar-button"
				onClick={toggleMenu}
				onBlur={this.hideMenu.bind(this)}
			>
				<i className="glyphicon glyphicon-user"/>
				<div className="icon-text">{user.profile.lastName}</div>
			</a>
		)
	}

	hideMenu() {
		this.props.showHideMenu(false)
	}
}

AvatarButton.propTypes = {
	toggleMenu: PropTypes.func.isRequired,
	showHideMenu: PropTypes.func.isRequired,
}
