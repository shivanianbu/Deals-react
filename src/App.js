import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Components/Home";


export default function App() {
  // const [isDrop, setIsDrop] = useState(false);
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact></Route>
      </Switch>
    </Router >

  );

}