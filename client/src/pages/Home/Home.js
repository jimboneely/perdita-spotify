import React, { Component } from "react";
import LoginButton from '../../components/LoginButton';
import axios from "axios";
import API from "../../utils/API";
import User from '../../utils/User'

class Home extends Component {
    state = {
    }

    login() {
        User.login().then(res => console.log(res));
    }
    
    callApi = async() => {
        const response = await fetch('/test');
        const body = await response.json();
    
        if (response.status !== 200) throw Error(body.message);
    
        return body;
    }
    
    render() {
        return (

                <LoginButton 
                    handleClick={this.login}
                />
        )
    }
}

export default Home;
