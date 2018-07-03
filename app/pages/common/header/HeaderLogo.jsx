import React, { Component } from 'react'

export default class HeaderLogo extends Component {

	render() {
		const logoImg = '/logo_175x50.png'

		return (
			<div className="header">
				<a href='/'>
					<img className="logo-sm"  src={logoImg}/>
				</a>
			</div>
		)
	}
}