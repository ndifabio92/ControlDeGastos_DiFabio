import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar';
import { Notebooks } from './components/Notebooks/Notebooks';
import { Home } from './components/Home/Home';

export const GestorDeGastos = () => {
    return (
        <>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path='/note' component={ Notebooks }/>
                    <Route exact path='/note/:id' component={ Notebooks }/>
                    <Route exact path='/home' component={ Home }/>

                    {/* Por el momento se usa el component home , es esta ruta tiene que ir al login */}
                    <Route exact path='/' component={ Home }/>
                </Switch>
            </Router>            
        </>
    )
}
