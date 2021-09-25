import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Components/Home";
import Product from "./Components/Product/Product";

export default function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/products" component={Product} exact></Route>
      </Switch>
    </Router >

  );

}