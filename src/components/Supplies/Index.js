import React, { useEffect, useState } from 'react';
import { ListItems } from './ListItem';
import { getSupplis } from '../../data/supplies';

export const Index = () => {
    const [ state, setState ] = useState([]);

    useEffect( () => {
        setTimeout(() => {
            getSupplis
            .then( data => {
                setState( data );
            })
            .catch( error => {
                alert('No se pudo conectar con la base de datos');
            })
        }, 2000);
    }, []);

    return (
        <>
            <ListItems data={ state }/>
        </>
    )
}
