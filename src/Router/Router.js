import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddToCart from "../Components/addToCart/addToCart";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import SingleItem from "../Components/SingleItem/SingleItem";

function Router() {

    return (
        <BrowserRouter>
        <div>
            <Switch>
                <Route path='/' component={Home} exact={true} />
                <Route path='/about' component={Login} />
                <Route path='/contact' component={Login} />
                <Route path='/cart' component={AddToCart} />
                <Route path='/sign-up' component={Login} />
                <Route path='/products/:productId' component={SingleItem} />
                <Route path='/products/cart' component={AddToCart} />
                <Route path='*' component={'Page Not Found'} />
            </Switch>
        </div>
        </BrowserRouter>
    )
}

export default Router;