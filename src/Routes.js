//jshint esversion: 9
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EachProductPage from "./components/EachProductPage";
import Home from "./components/Home";
import MyCart from "./components/MyCart";
import Navbar from "./components/Navbar";
import Wishlist from "./components/Wishlist";
import { useSelector } from "react-redux";

function Routes() {
    const isOpen = useSelector((store) => store.cart.isOpen);

    return (
        <div>
            <BrowserRouter>
                <Navbar />
                {isOpen ? <MyCart /> : ""}
                <Switch>
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/wishlist" exact={true} component={Wishlist} />
                    <Route path="/product" exact={true} component={EachProductPage} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Routes;
