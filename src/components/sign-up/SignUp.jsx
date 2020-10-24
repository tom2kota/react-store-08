import React, {Component} from "react";
import {connect} from "react-redux";
import {FormInput} from "../form-input/FormInput";
import {CustomButton} from "../custom-button/CustomButton";
import {signUpStart} from "../../redux/user/userActions";
import './SignUp.scss';

class SignUp extends Component {

    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {signUpStart} = this.props;
        const {password, confirmPassword, displayName, email} = this.state;

        if (password !== confirmPassword) {
            alert("Passwords don't match!")
            return
        }

        signUpStart({email, displayName, password})
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>I dont have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text'
                               name='displayName'
                               value={displayName}
                               onChange={this.handleChange}
                               label='Display Name' required/>

                    <FormInput type='email'
                               name='email'
                               value={email}
                               onChange={this.handleChange}
                               label='Email' required/>

                    <FormInput type='password'
                               name='password'
                               value={password}
                               onChange={this.handleChange}
                               label='Password' required/>

                    <FormInput type='password'
                               name='confirmPassword'
                               value={confirmPassword}
                               onChange={this.handleChange}
                               label='Confirm Password' required/>

                    <CustomButton type='submit'>Sing Up</CustomButton>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)
