import React, { Component } from "react";
import Jimbo from '../../components/Jimbo';
import LoginButton from '../../components/LoginButton';
import axios from "axios";
import API from "../../utils/API";

class Home extends Component {
    state = {
    };

    login() {
        console.log(`login called`);
        axios.get("/login", (req, res) => {
            console.log(`axios sent`);
        });
    }

    testIt() {
        console.log(`call testIt`);
        API.doSomething().then(res => console.log(res));
    }
    
    callApi = async() => {
        const response = await fetch('/test');
        const body = await response.json();
    
        if (response.status !== 200) throw Error(body.message);
    
        return body;
    };
    
    render() {
        return (
            <div>
                <Jimbo />
                <LoginButton 
                    handleClick={this.testIt}
                />
            </div>
        )
    }
}

export default Home;
