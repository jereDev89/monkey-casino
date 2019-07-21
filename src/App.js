/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './App.css';
import { UserRegistration } from './components/UserRegistration';
// IMAGES //
import Logo from './images/monkey_icon.svg';
import Background from './images/background.jpg';
import MonkeyCasino from './images/monkey_casino.png';
import CroatiaFlag from './images/cro_flag.png';
import EnglandFlag from './images/eng_flag.png';

function App() {
  return (
    <div class="App" style={{
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundImage: `url(${Background})`,
                            height: '100%',
                            }}>
        <div class="container" >
            <div class="content">
                <div class="image_container" style={{
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    backgroundImage: `url(${MonkeyCasino})`,
                                    }}>
                </div>
                <div class="register_container">
                    <img src={Logo} alt="Monkey-Icon" class="icon"/>
                    <div class="language_box">
                        <a href="#">
                            <img src={ CroatiaFlag } alt="Croatia flag" class="flag_icon" />
                        </a>
                        <a href="#">
                            <img src={ EnglandFlag } alt="England flag" class="flag_icon" />
                        </a>
                    </div>
                    <div class="register_content">
                        <UserRegistration/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
