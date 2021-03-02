import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import XXX from '../src/fingerprinttest';

// import Recaptcha from 'react-recaptcha';
import Message from './components/Message';

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
                    <Message/>
                </header>
            </div>
        );
    }
}

export default App;
