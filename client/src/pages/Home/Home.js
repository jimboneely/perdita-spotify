import React, { Component } from "react";
import Jimbo from '../../components/Jimbo';
import LoginButton from '../../components/LoginButton';

class Home extends Component {
    state = {
    };

    render() {
        return (
            <div>
                <Jimbo />
                <LoginButton />
            </div>
        )
    }
}

export default Home;
