import React, {Component} from 'react';
import './NavBar.css';
import logo from './perdita-logo.png';

// const NavBar = props => (
class NavBar extends Component {
    state = {
        open: false
    }

    toggleOpen() {
        switch(this.state.open) {
            case false: this.setState({open: true});
            break;
            case true:  this.setState({open: false});
            break;
            default: this.setState({open: false});
        }
    }

    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg">
                <a className="navbar-brand" href="/"><img alt="logo" src={logo}/></a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-content" aria-controls="nav-content" aria-expanded="false" aria-label="Toggle navigation">
                    <div className={this.state.open ? 'nav-icon open' : 'nav-icon'} onClick={() => this.toggleOpen()}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>

                <div className="collapse navbar-collapse" id="nav-content">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Sign up</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Log in</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/">Action</a>
                                <a className="dropdown-item" href="/">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">Something else here</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default NavBar;