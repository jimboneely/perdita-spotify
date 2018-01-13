import React from 'react';
import './LoginButton.css';

const LoginButton = props =>
    // <div><a href="/login" className="btn btn-primary" onClick={props.login}>Log in with Spotify</a></div>
    <div><a className="btn btn-primary" onClick={props.handleClick}>Log in with Spotify</a></div>
;

export default LoginButton;