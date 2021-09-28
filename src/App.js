import React,{useEffect,useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Components/Home";
import Products from "./Components/Product/Product";
import ViewProduct from "./Components/Product/View";
import { setItem } from "./redux/Action/cartAction";
import { PRODUCT_PATH } from './utils/env';
import axios from "axios";
import { connect,useDispatch,} from "react-redux";

export default function App() {
  
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get(PRODUCT_PATH)
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(setItem(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/:type" component={Products} exact></Route>
        <Route path="/view/:id" component={ViewProduct} exact></Route>
      </Switch>
    </Router >

  );  
}

