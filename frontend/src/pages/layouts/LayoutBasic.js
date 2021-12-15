import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Home from '../home/Home';
import LoginSigin from '../loginSigin/LoginSigin';
import LinkNavbar from '../../components/linkNav/LinkNavbar';
import { Route } from 'react-router-dom';

const LayoutBasic = () => {
    return (
        <>
            <Navbar>
                <LinkNavbar to="/" value="Inicio" />
                <LinkNavbar to="/" value="About" />
                <LinkNavbar to="/" value="Contacts" />
                <LinkNavbar to="/access" value="Login" />
                <LinkNavbar to="/access" value="Sigin" />
            </Navbar>
            <div className="content">
                <Route path="/" exact component={Home} />
                <Route path="/access" exact component={LoginSigin}/>
            </div>
        </>
    );
}

export default LayoutBasic;