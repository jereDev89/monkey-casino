import React, { Component } from 'react'

export class Success extends Component {

    render() {
        const { values: { username } } = this.props;
        return (
            <div class="success_message">
                <h1 class="margin_bt_m">Wellcome <span class="username_color">{ username }</span> !!!</h1>
                <h3 class="margin_bt_s">Thank You for Your submission</h3>
                <p>You will get an email with further instructions</p>
            </div>
        )
    }
}

export default Success;
