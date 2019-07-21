import React, { Component } from 'react'
import Facebook from '../images/facebook.svg';
import Twiter from '../images/twiter.svg';
import Google from '../images/google.svg';

export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        //this.props.handleSubmit();
        this.props.nextStep();
      };

    render() {
        const { values, handleChange } = this.props;
        return (
            <div>
                <form autoComplete="off">
                    <div class="register_text">
                        <h1 class="margin_bt_m">Register</h1>
                        <p>Don't have an account?<br/><span class="blue_text">Create Your account</span>, it takes less then a minute</p>
                    </div>
                    <div class="input_box">
                        <input type="text" name="firstName" placeholder="FIRST NAME" onChange={handleChange('firstName')} value={values.firstName} />
                        <p class="error_message"> {values.firstNameError} </p>
                        <input type="text" name="lastName" placeholder="LAST NAME" onChange={handleChange('lastName')} value={values.lastName} />
                        <input type="email" name="email" placeholder="EMAIL" onChange={handleChange('email')} value={values.email} />
                    </div>
                    <div class="checkbox">
                        <input type="checkbox" /> I accept terms and conditions & privacy policy
                    </div>
                    <div class="next_button">
                        <button type="submit" class="btn_next margin_bt_b" onClick={this.continue}>NEXT</button>
                    </div>
                </form>

                <div>
                    <p class="margin_bt_m">Login with social media</p>
                </div>
                <div class="social_box">
                    <img src={ Facebook } alt="Facebook icon" class="social_media_icon"/>
                    <img src={ Twiter } alt="Twiter icon" class="social_media_icon"/>
                    <img src={ Google } alt="Google icon" class="social_media_icon"/>
                </div>
                
            </div>
        )
    }
}

export default FormUserDetails;
