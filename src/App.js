import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Route component takes main arguments: excat, path, component
// Switch gives more control

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <section>
      <Switch>
        <Route excat path='/' component={HomePage} /> 
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </section>
  );
}

export default App;
