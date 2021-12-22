import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import LoginSigin from '../loginSigin/LoginSigin';
import LinkNavbar from '../../components/linkNav/LinkNavbar';
import './home.css';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    const { user } = useAuth();
    if(!user) {
        return (
            <>
                <Route path="/access/login" component={LoginSigin}/>
                <Redirect to="/access/login" />
            </>
        )
    }
    return (
        <>
            <header className='container-Home'>
                <Navbar>
                    <LinkNavbar to="/" value="Inicio" />
                    <LinkNavbar to="/" value="About" />
                    <LinkNavbar to="/" value="Contacts" />
                    <LinkNavbar to="/access/login" value="Login" />
                    <LinkNavbar to="/access/sigin" value="Sigin" />
                </Navbar>
            </header>
        </>
    );
    
}

export default Home;