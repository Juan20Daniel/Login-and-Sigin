import React from 'react';
import LayoutBasic from './pages/layouts/LayoutBasic';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
        <Switch>
          <Route path="/" exact={false} component={LayoutBasic} />
        </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
