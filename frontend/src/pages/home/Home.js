import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import LinkNavbar from '../../components/linkNav/LinkNavbar';
import './home.css';

const Home = () => {
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
           <h1>Home</h1>
        </>
    );
}

export default Home;