import React, {Component} from "react";
import {connect} from "react-redux";
import {FormInput} from "../form-input/FormInput";
import {CustomButton} from "../custom-button/CustomButton";
import {emailSignInStart, googleSignInStart} from "../../redux/user/userActions";
import './SignIn.scss'

class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {emailSignInStart} = this.props
        const {email, password} = this.state;

        emailSignInStart(email, password)
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render() {
        const {googleSignInStart} = this.props
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email & password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' label='Email' value={this.state.email} required
                               handleChange={this.handleChange}/>
                    <FormInput name='password' type='password' label='Password' value={this.state.password} required
                               handleChange={this.handleChange}/>
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
                            Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn)
