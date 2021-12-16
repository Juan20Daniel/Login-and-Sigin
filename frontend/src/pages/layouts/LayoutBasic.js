import React from 'react';
import Home from '../home/Home';
import LoginSigin from '../loginSigin/LoginSigin';
import { Route } from 'react-router-dom';

const LayoutBasic = () => {
    return (
        <>
            <main className="content">
                <Route path="/" exact component={Home} />
                <Route path="/access" component={LoginSigin}/>
            </main>
        </>
    );
}

export default LayoutBasic;