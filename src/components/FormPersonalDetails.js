import React, { Component } from 'react'

export class FormPersonalDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
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
                        <input type="text" name="city" placeholder="CITY" onChange={handleChange('city')} value={values.city} />
                        <input type="text" name="yearOfBirth" placeholder="YEAR OF BIRTH" onChange={handleChange('yearOfBirth')} value={values.yearOfBirth} />
                        <input type="text" name="username" placeholder="USERNAME" onChange={handleChange('username')} value={values.username} />
                        <input type="password" name="password" placeholder="PASSWORD" onChange={handleChange('password')} value={values.password} />
                        <input type="password" name="confirmPassword" placeholder="CONFIRM PASSWORD" onChange={handleChange('confirmPassword')} value={values.confirmPassword} />
                    </div>
                    <div class="next_button">
                        <button type="submit" class="btn_back margin_bt_b" onClick={this.back}>BACK</button>
                        <button type="submit" class="btn_back margin_bt_b" onClick={this.continue}>NEXT</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormPersonalDetails;
