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

    // Validation 
    /*
    validate = () => {
        let firstNameError = "";
        let lastNameError = "";
        let emailError = "";
        let usernameError = "";
        // let passwordError = "";
    
        if (this.state.firstName <= 2 && this.state.firstName > 25) {
            firstNameError = "First name should have min 2 and max 25 characters";
        }

        if (this.state.lastName <= 2 && this.state.lastName > 25) {
            lastNameError = "Last name should have min 2 and max 25 characters";
        }
    
        if (!this.state.email.includes("@")) {
          emailError = "Invalid email";
        }

        if (this.state.username <= 4 && this.state.username > 20) {
            usernameError = "Username should have min 4 and max 20 characters";
        }
    
        if (emailError || firstNameError || lastNameError || usernameError) {
          this.setState({ emailError, firstNameError, lastNameError, usernameError });
          return false;
        }
    
        return true;
    };

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            // clear form
            this.setState(this.state);
        }
    };
    */

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
