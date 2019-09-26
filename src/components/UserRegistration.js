/* eslint-disable default-case */
import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserRegistration extends Component {

    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        city: '',
        yearOfBirth: '',
        username: '',
        password: '',
        confirmPassword: '',
        firstNameError: "",
        lastNameError: "",
        emailError: "",
        usernameError: "",
        passwordError: ""
    };

    // Next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
          step: step + 1
        });
      };

    // Prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    // Handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, city, yearOfBirth,  username, password, confirmPassword, firstNameError, lastNameError, emailError, usernameError, passwordError } = this.state;
        const values = { firstName, lastName, city, yearOfBirth, email, username, password, confirmPassword, firstNameError, lastNameError, emailError, usernameError, passwordError };
        
        switch(step) {
            case 1: 
                return (
                    <FormUserDetails
                        nextStep = { this.nextStep }
                        handleChange = { this.handleChange }
                        values = { values }
                        //handleSubmit = { this.handleSubmit }
                        //validate = { this.validate }
                    />
                );
            case 2:
                return (
                    <FormPersonalDetails
                        nextStep = { this.nextStep }
                        prevStep = { this.prevStep }
                        handleChange = { this.handleChange }
                        values = { values }
                    />
                );
            case 3:
                return (
                    <Confirm 
                        nextStep = { this.nextStep }
                        prevStep = { this.prevStep }
                        values = { values }
                    />
                );
            case 4:
                return (
                    <Success 
                        values = { values }
                    />
                );
        }
    }
}

export default UserRegistration
