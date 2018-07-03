require('../../../../stylesheets/usernav.scss')
import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignupButton from '../SignupButton'
import AvatarButton from './AvatarButton'
import UserMenu from './UserMenu'

class UserContainer extends Component {

	constructor(props) {
		super(props)
		this.state = {
			displayMenu: false,
		}
	}

	render() {
		let { userSigninState } = this.props
		if (!userSigninState.signedIn) {
			return (
				<SignupButton/>
			)
		}
		return (
			<div className="user-nav">
				<AvatarButton
					toggleMenu={this.toggleMenu.bind(this)}
					showHideMenu={this.showHideMenu.bind(this)}
					user={this.props.user}
				/>
				<UserMenu
					visible={this.state.displayMenu}
					hideMenu={this.showHideMenu.bind(this, false)}
				/>
			</div>
		)
	}

	toggleMenu() {
		this.showHideMenu(!this.state.displayMenu)
	}
	
	showHideMenu(show) {
		this.setState({
			displayMenu: show,
		})
	}
}

function select(state) {
	return {
		userSigninState: state.userSigninState,
		user: state.user,
	}
}

export default connect(select)(UserContainer)
