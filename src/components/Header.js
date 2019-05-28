import React, {Component} from 'react';
import logo from '../resources/img/logo.svg';
import {Link} from 'react-router-dom';
export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="container h-flex">
                    <Link to="/" className="logo">
                        <img alt="logo" src={logo}></img>
                    </Link>
                    <nav className="links">
                        <ul>
                            <li>
                                <Link to="/" className="menu__links">
                                    Лента
                                </Link>
                            </li>
                            <li>
                                <Link to="/profile" className="menu__links">
                                    Профиль
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

