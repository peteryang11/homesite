require('./stylesheets/app.scss')
//react stuff
import React from 'react'
import { render } from 'react-dom'
import { Route, BrowserRouter, HashRouter, Switch } from 'react-router-dom'
//container stuff
import HomePageContainer from './pages/home/HomePageContainer'
import config from './config/config'

const env = config.env

let Router
if (env === 'dev') {
	Router = HashRouter
} else {
	Router = BrowserRouter
}

let routes = (
	<div className="app">
		<Router>
			<Switch>
				<Route exact name="home2" path="/" component={HomePageContainer}/>
			</Switch>
		</Router>
	</div>
)

render(routes, document.getElementById('root'))
