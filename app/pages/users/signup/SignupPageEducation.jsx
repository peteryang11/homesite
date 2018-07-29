import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { cookieDomain, baseUrl } from '../../../config/config'
import { isValidInternalURL } from '../../../util/validationHelpers'
// import { handleInvalidEmailForSignUp, handleInvalidPasswordForSignUp, handleInvalidFirstNameForSignUp, 
//                 handleInvalidLastNameForSignUp, handleInvalidPhoneForSignUp } 
//                 from "../../../util/invalidInputHelpers.js"
import loadingImage from '../../../assets/img/loading.gif'
import PropTypes from 'prop-types'

export default class SignupPageEducation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            school: "",
            yearOfGraduation: "",
            major: "",
            errorMsgForSignUp: {
                school: "",
                yearOfGraduation: "",
                major: "",
            },
            validInputForSignUp: {
                school: false,
                yearOfGraduation: false,
                major: false,
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

    // handleChangeFirstName(event) {
    //     this.setState({
    //         firstName: event.target.value,
    //     })
    //     handleInvalidFirstNameForSignUp(this.state, event.target.value, 
    //         "First name is required.",)
    // }

    // handleChangeLastName(event) {
    //     this.setState({
    //         lastName: event.target.value,
    //     })
    //     handleInvalidLastNameForSignUp(this.state, event.target.value, 
    //         "Last field is required.",)
    // }

    // handleChangePreferredName(event) {
    //     this.setState({
    //         preferredName: event.target.value,
    //     })
    // }

    // handleChangePhone(event) {
    //     this.setState({
    //         phone: event.target.value,
    //     })
    //     handleInvalidPhoneForSignUp(this.state, event.target.value,
    //         "Phone number is required.",)
    // }

    // handleChangeEmail(event) {
    //     this.setState({
    //         email: event.target.value,
    //     })
    //     handleInvalidEmailForSignUp(this.state, event.target.value, 
    //         "The email you provide is invalid format.", 
    //         "Email address is required.",)
    // }

    // handleChangePassword(event) {
    //     this.setState({
    //         password: event.target.value,
    //     })
    //     handleInvalidPasswordForSignUp(this.state, event.target.value,
    //         "The password you provide is invalid.", 
    //         "Password is required.",)
    // }

    // handleChangeAgreement(event) {
    //     this.setState({
    //         consented: event.target.checked,
    //     })
    // }

    handleClickSignup(event) {
        event.preventDefault()
        let school = this.state.school
        let yearOfGraduation = this.state.yearOfGraduation
        let major = this.state.major
        this.props.signupHandler(school, yearOfGraduation, major)
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
                        <form>
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <label>School</label>
                                    <input aria-label="school" 
                                            className="border-white form-control transparent-input form-user" 
                                            name="school" 
                                            placeholder="School"
                                            type="text"
                                            value={this.state.value}
                                            />
                                            <div className="help-block inline-error">
                                                <span>{this.state.errorMsgForSignUp["school"]}</span>
                                            </div>
                                            <span></span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <label>Year of Graduation</label>
                                    <select aria-label="year of graduation" 
                                            className="border-white form-control transparent-input form-user" 
                                            name="year of graduation" 
                                            placeholder="Year of Graduation"
                                            type="text" 
                                            value={this.state.value} 
                                            >
                                        <option value="0" selected disabled>Year</option>
                                        <option value="2018">2018</option>
                                        <option value="2015">2017</option>
                                        <option value="2015">2016</option>
                                        <option value="2015">2015</option>
                                        <option value="2014">2014</option>
                                        <option value="2013">2013</option>
                                        <option value="2012">2012</option>
                                        <option value="2011">2011</option>
                                        <option value="2010">2010</option>
                                        <option value="2009">2009</option>
                                        <option value="2008">2008</option>
                                        <option value="2007">2007</option>
                                        <option value="2006">2006</option>
                                        <option value="2005">2005</option>
                                        <option value="2004">2004</option>
                                        <option value="2003">2003</option>
                                        <option value="2002">2002</option>
                                        <option value="2001">2001</option>
                                        <option value="2000">2000</option>
                                        <option value="1999">1999</option>
                                        <option value="1998">1998</option>
                                        <option value="1997">1997</option>
                                        <option value="1996">1996</option>
                                        <option value="1995">1995</option>
                                        <option value="1994">1994</option>
                                        <option value="1993">1993</option>
                                        <option value="1992">1992</option>
                                        <option value="1991">1991</option>
                                        <option value="1990">1990</option>
                                    </select>
                                        <div className="help-block inline-error">
                                            <span>{this.state.errorMsgForSignUp["yearOfGraduation"]}</span>
                                        </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <label>Major</label>
                                    <input aria-label="major" 
                                                className="border-white form-control transparent-input" 
                                                name="major" 
                                                placeholder="Major"
                                                type="text" 
                                                value={this.state.value} 
                                                />
                                                <div className="help-block inline-error">
                                                    <span>{this.state.errorMsgForSignUp["major"]}</span>
                                                </div> 
                                </div>
                            </div>
                                    <div>
                                        <br/>Already have an account with us?&nbsp;<Link to="/users/signin">
                                        Sign in</Link>&nbsp;instead.
                                    </div>
                        </form>
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

SignupPageEducation.propTypes = {
    userSignupState: PropTypes.shape({
        signedUp: PropTypes.bool.isRequired,
        signupMsg: PropTypes.string.isRequired,
    }).isRequired,
}