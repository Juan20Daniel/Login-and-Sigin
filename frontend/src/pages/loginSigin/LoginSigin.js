import React from "react";
import Navbar from "../../components/navbar/Navbar";
import LinkNavbar from "../../components/linkNav/LinkNavbar";
import './loginSigin.css';
import { Route } from 'react-router-dom';
import Login from '../../components/login/Login';
import Sigin from '../../components/sigin/Sigin';

const LoginSigin = () => {
    return (
       <>
            <header className="header-loginSigin">
                <Navbar>
                    <LinkNavbar to="/" value="Inicio" />
                    <LinkNavbar to="/" value="About" />
                    <LinkNavbar to="/" value="Contacts" />
                    <LinkNavbar to="/access/login" value="Login" />
                    <LinkNavbar to="/access/sigin" value="Sigin" />
                </Navbar>
            </header>
            <main className="main-loginSigin">
                <Route path="/access/login" exact component={Login}/>
                <Route path="/access/sigin" exact component={Sigin} />
            </main>
       </>
    );
}

export default LoginSigin;