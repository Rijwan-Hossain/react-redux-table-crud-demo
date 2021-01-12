import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home/Home'
import Create from './components/Create/Create'
import Details from './components/Details/Details'

function App() { 
  return ( 
    <div className="container pt-3"> 
      <BrowserRouter> 
        <Switch> 
          <Route path="/" component={Home} exact /> 
          <Route path="/create" component={Create} /> 
          <Route path="/:id" component={Details} /> 
        </Switch> 
      </BrowserRouter> 
    </div> 
  ); 
} 

export default App; 