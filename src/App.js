import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar';
import { Index as Notebooks } from './components/Notebooks';
import { Index as Computers } from './components/Computers';
import { Index as Accesories } from './components/Accesories';
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
                        <Route exact path='/notebooks' component={ Notebooks }/>
                        <Route exact path='/computers' component={ Computers }/>
                        <Route exact path='/accesories' component={ Accesories }/>
                        <Route exact path='/item/:cat/:id' component={ ItemDetail }/>
                        <Route exact path='/home' component={ Home }/>
                        <Route exact path='/cart' component={ Cart }></Route>
                        <Route exact path='/' component={ Home }/>
                    </Switch>
                </Router>
            </CartContextProvider>            
        </>
    )
}
