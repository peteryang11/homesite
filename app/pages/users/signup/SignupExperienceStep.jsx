import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import { cookieDomain, baseUrl } from '../../../config/config'
import { isValidInternalURL } from '../../../util/validationHelpers'
import loadingImage from '../../../assets/img/loading.gif'
import PropTypes from 'prop-types'

export default class SignupExperienceStep extends Component {
    constructor(props) {
        super(props)
        this.state = {
            industry: "",
            role: "",
            location: "",
            yearOfExperience: "",
            validInputForSignUp: {
                industry: false,
                role: false,
                location: false,
                yearOfExperience: false,
            },
            signupValid:false,
            countdownSeconds: 3,
        }
        this.timer = 0
        this.startTimer = this.startTimer.bind(this)
        this.countDown = this.countDown.bind(this)
    }

    startTimer() {
        if (this.timer === 0) {
            this.timer = window.setInterval(this.countDown, 1000)
        }
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let countdownSeconds = this.state.countdownSeconds - 1
        this.setState({
            countdownSeconds: countdownSeconds,
        })
        if (countdownSeconds === 0) { 
            window.clearInterval(this.timer)
            let callbackURL = this.props.query === undefined ? null : decodeURIComponent(this.props.query)
            if (isValidInternalURL(callbackURL, cookieDomain)) {
                window.location.href = baseUrl + 'users/signin' + '?callback=' + callbackURL
            } else {
                window.location.href = baseUrl + 'users/signin'
            }
        }
    }
    handleClickSignup(event) {
        event.preventDefault()
        let industry = this.state.industry
        let role = this.state.role
        let location = this.state.location
        let yearOfExperience = this.state.yearOfExperience
        this.props.signupHandler(industry, role, location, yearOfExperience)
    }



    render() {
        let { userSignupState } = this.props
        let signupMsg = userSignupState.signupMsg
        let signupSuccess = (
            <div id="signup" className="signup-success-page">
                <div className="signup-success-outer-container">
                    <div className="container clearfix">
                        <div className="">
                            <div>
                                <p>You have signed up successfully!</p>
                                <br/>
                                <br/>
                                <p>You will be redirected to sign in page in
                                    &nbsp;{this.state.countdownSeconds}
                                    &nbsp;seconds.</p>
                            </div>
                            <div className="center">
                                <img src={loadingImage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        let signupContent = (
            <div className="signup-page">
                <div className="signup-outer-container">
                    <div className="container clearfix">
                        <div className="signup-exception margin-bottom-30">
                            <span>{signupMsg}</span>
                        </div>
                        <div className="row">
                            <div className="col-lg-2 col-md-2" id="first">
                                Experience
                            </div>
                            <div className="col-lg-2 col-md-2">
                                <button className="w3-button w3-xlarge w3-black" id="experience">
                                +</button>
                            </div>
                        </div>
                        <form className="bigform">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <label>Industry</label>
                                    <select aria-label="industry" 
                                            className="border-white form-control transparent-input form-user" 
                                            name="industry" 
                                            placeholder="Industry"
                                            type="text"
                                            value={this.state.value}
                                            onChange={this.state.industry}
                                            >
                                        <option value="" selected disabled>Industry</option>
                                        <option value="Finance">Finance</option>
                                        <option value="Information technology">Information technology</option>
                                        <option value="Health care">Health care</option>
                                        <option value="Retail">Retail</option>
                                        <option value="Accounting and Legal">Accounting and Legal</option>
                                        <option value="Business service">Business service</option>
                                        <option value="Manufacturing">Manufacturing</option>
                                        <option value="Media">Media</option>
                                    </select>
                                        <div className="help-block inline-error">
                                        </div>
                                        <span></span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <label>Role</label>
                                    <select aria-label="role" 
                                            className="border-white form-control transparent-input form-user" 
                                            name="role" 
                                            placeholder="role"
                                            type="text" 
                                            value={this.state.value}
                                            onChange={this.state.role} 
                                            >
                                        <option value="" selected disabled>role</option>
                                        <option value="Software engineer">Software engineer</option>
                                        <option value="Software developer">Software developer</option>
                                        <option value="Computer Systems Analyst">Computer Systems Analyst</option>
                                        <option value="Lawyer">Lawyer</option>
                                        <option value="Accuntant">Accountant</option>
                                        <option value="Business analyst">Business analyst</option>
                                        <option value="Social worker">Social worker</option>
                                        <option value="Engineer">Engineer</option>
                                        <option value="Economist">Economist</option>
                                        <option value="Architect">Architect</option>
                                    </select>
                                        <div className="help-block inline-error">
                                        </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <label>Location</label>
                                    <select aria-label="location" 
                                            className="border-white form-control transparent-input form-user" 
                                            name="location" 
                                            placeholder="location"
                                            type="text" 
                                            value={this.state.value}
                                            onChange={this.state.location} 
                                            >
                                        <option value="" selected disabled>location</option>
                                        <option value="Beijing">Beijing</option>
                                        <option value="Shanghai">Shanghai</option>
                                        <option value="Guangzhou">Guangzhou</option>
                                        <option value="New york">New york</option>
                                        <option value="Paris">Paris</option>
                                        <option value="San francisco">San francisco</option>
                                        <option value="London">London</option>
                                        <option value="Hongkong">Hongkong</option>
                                        <option value="Chicargo">Chicargo</option>
                                        <option value="Toronto">Toronto</option>
                                        <option value="Toronto">Toronto</option>
                                        <option value="Vancouver">Vancouver</option>
                                        <option value="Montreal">Montreal</option>
                                    </select>
                                        <div className="help-block inline-error">
                                        </div> 
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <label>Year of Experience</label>
                                    <select aria-label="yearOfExperience" 
                                            className="border-white form-control transparent-input form-user" 
                                            name="yearOfExperience" 
                                            placeholder="yearOfExperience"
                                            type="text" 
                                            value={this.state.value}
                                            onChange={this.state.yearOfExperience} 
                                            >
                                        <option value="" selected disabled>yearOfExperience</option>
                                        <option value="1">1</option>
                                        <option value="3">1-3</option>
                                        <option value="5">3-5</option>
                                        <option value="7">5-7</option>
                                        <option value="10">7-10</option>
                                        <option value="more than 10">10+</option>
                                    </select>
                                        <div className="help-block inline-error">
                                        </div> 
                                </div>
                            </div>
                        </form>
                        <div className="row">
                            <div id="underscore">Terms and conditions</div>
                        </div>
                        <div className="row">
                            <button type="submit" 
                                    disabled={!this.state.signupValid} 
                                    onClick={this.handleClickSignup.bind(this)} 
                                    className="margin-bottom-10 btn col-xs-12 btn-danger"
                                    id="register"
                                    >
                            Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )

        if (userSignupState.signedUp) {
            this.startTimer()
            return signupSuccess
        }
        return signupContent
    }
}

SignupExperienceStep.propTypes = {
    userSignupState: PropTypes.shape({
    }).isRequired,
}