import React from 'react';
import Home from './pages/home/Home';
import LoginSigin from './pages/loginSigin/LoginSigin';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from './provider/authProvider';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route  path="/access" component={LoginSigin}/>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
