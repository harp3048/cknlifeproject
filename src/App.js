import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import XXX from '../src/fingerprinttest';

import Recaptcha from 'react-recaptcha';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isverfied: false
        };
    }

    handleClick = () => {
        // if (this.state.isverfied) alert("Good");
        // else alert("BAD");


        XXX();
    };

    recaptchaLoaded = () => {
        console.log("Captcha Loaded!");
    };

  verifyCallback = response => {
    if (response) {
        this.setState({isverfied:true})
      }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        This is a reactjs Project
                    </p>
                    <a
                        className="App-link"
                        href="https://ckn.life"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CKN life projects here
                    </a>
                    {/* <button onClick={this.handleClick}>Click Here</button> */}
                    {/* <Recaptcha
                        sitekey="6LdDmOIUAAAAAPeD6DVRbo7-Y2EWFfFM_-iLfpwh"
                        render="explicit"
                        onloadCallback={this.recaptchaLoaded}
                        verifyCallback={this.verifyCallback}
                    /> */}
                </header>
            </div>
        );
    }
}

export default App;
