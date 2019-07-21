import React, { Component } from 'react';
import MonkeyUser from '../images/monkey_user.png';

export class Confirm extends Component {

    continue = e => {
        e.preventDefault();
        // SEND DATA //
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values: {firstName, lastName, email, city, yearOfBirth, username }} = this.props;
        return (
            <div>
                <div class="register_text">
                    <h1 class="margin_bt_m">Confirm</h1>
                </div>
                <div class="confirm_box">
                    <img src={ MonkeyUser } alt="Monkey User" class="monkey_user"/>
                    <label>First Name</label>
                    <h2>{ firstName }</h2>
                    <label>Last Name</label>
                    <h2>{ lastName }</h2>
                    <label>Email</label>
                    <h2>{ email }</h2>
                    <label>City</label>
                    <h2>{ city }</h2>
                    <label>Year Of Birth</label>
                    <h2>{ yearOfBirth }</h2>
                    <label>Username</label>
                    <h2>{ username }</h2>
                </div>

                <div class="next_button">
                    <button type="submit" class="btn_back margin_bt_b" onClick={this.back}>BACK</button>
                    <button type="submit" class="btn_back margin_bt_b" onClick={this.continue}>CONFIRM</button>
                </div>
            </div>
        )
    }
}

export default Confirm;
