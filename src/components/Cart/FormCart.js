import React, { useState } from 'react'
import firebase from 'firebase';
import 'firebase/firestore';
import TextField from '@mui/material/TextField';
import { Button } from '@material-ui/core';
import { useCartContex } from '../../context/CardContext';
import { getFirestore } from '../../services/getFirestore';
import { SwalAlert } from '../Alerts/SwalAlert';

import '../styles/cart.css';

export const FormCart = () => {

    const { cartList, getPriceTotal }  = useCartContex();
    const [ state, setState ] = useState({ name: '', phone: '', email: '' });

    const handleChange = ({ target }) => {
        setState({
            ...state,
            [ target.name ]: target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newOrder = { items: cartList, buyer: state, total: getPriceTotal(), date: firebase.firestore.Timestamp.fromDate( new Date()) }

        const dbQuery = getFirestore()
        dbQuery.collection( 'orders' ).add( newOrder )
        .then( resp => SwalAlert( 'Aviso', `Su numero de orden es: ${ resp.id } `, 'success' ))
        .catch( error => SwalAlert( 'Error', error, 'error' ))
        .finally(() => setState({ name: '', phone: '', email: '' }));

        for( const item of cartList ) {
            dbQuery.collection( item.category ).doc( item.id ).update({
                stock: item.stock - item.cant
            })
            .then( resp => console.log('actualizado'))
            .catch( error => SwalAlert( 'Error', error, 'error' ))
        };
    }

    return (
        <form className="form" onSubmit={ handleSubmit } onChange={ handleChange }>
            <TextField
                required
                id="name"
                name="name"
                label="Nombre"
                type="text"
            />
            <TextField
                required
                id="phone"
                name="phone"
                type="number"
                label="Telefono"
            />
            <TextField
                required
                id="email"
                name="email"
                label="Email"
                type="email"
            />
            <Button variant="contained" color="primary" size="small" type="submit"> Generar Compra </Button>
        </form>
    )
}
