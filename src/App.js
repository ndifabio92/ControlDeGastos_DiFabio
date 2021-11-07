import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar';
import { Index } from './components/Supplies/Index';
import { ItemDetail } from './components/Supplies/ItemDetail';
import { Home } from './components/Home/Home';
import { CartContextProvider } from './Context/CardContext';
import { Cart } from './components/Cart/Cart';

export const App = () => {
    return (
        <>
            <CartContextProvider>
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route exact path='/item' component={ Index }/>
                        <Route exact path='/item/:id' component={ ItemDetail }/>
                        {/* <Route exact path='/item/:id/:id' component={ ItemDetail }/> */}
                        <Route exact path='/home' component={ Home }/>
                        <Route exact path='/cart' component={ Cart }></Route>

                        {/* Por el momento se usa el component home , es esta ruta tiene que ir al login */}
                        <Route exact path='/' component={ Home }/>
                    </Switch>
                </Router>
            </CartContextProvider>            
        </>
    )
}
