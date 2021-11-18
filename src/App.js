import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar';
import { Index } from './components/Products';
import { ItemDetail } from './components/Supplies/ItemDetail';
import { Home } from './components/Home/Home';
import { CartContextProvider } from './context/CardContext';
import { Cart } from './components/Cart/Cart';

export const App = () => {
    return (
        <>
            <CartContextProvider>
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route exact path='/category/:cat' component={ Index }/>
                        <Route exact path='/category/item/:cat/:id' component={ ItemDetail }/>
                        <Route exact path='/home' component={ Home }/>
                        <Route exact path='/cart' component={ Cart }></Route>
                        <Route exact path='/' component={ Home }/>
                    </Switch>
                </Router>
            </CartContextProvider>            
        </>
    )
}
