import React, {Component} from 'react';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom';
import {Homepage} from "../../pages/home/Homepage";
import ShopPage from "../../pages/shop/ShopPage";
import Header from "../header/Header";
import {SignInUp} from "../../pages/sign-in-up/SignInUp";
import {ContactPage} from "../../pages/contact/ContactPage";
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import CheckoutPage from "../../pages/checkout/CheckoutPage";
import {selectCurrentUser} from "../../redux/user/userSelectors";

class App extends Component {
    unsubscribeFromAuth = null

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Homepage}/>
                        <Route path="/shop" component={ShopPage}/>
                        <Route path="/contact" component={ContactPage}/>
                        <Route exact path="/signin"
                               render={() => this.props.currentUser ? <Redirect to='/'/> : <SignInUp/>}/>
                        <Route exact path="/checkout" component={CheckoutPage}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})


export default connect(mapStateToProps)(App)
