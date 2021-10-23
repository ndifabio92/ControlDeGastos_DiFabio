import React, { useEffect, useState } from 'react';
import { ImgMediaCard } from './Card/Card';
import { supplies } from '../data/supplies';

export const ListCards = () => {

    const [ state, setState ] = useState([ ]);

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

    const getSupplis = new Promise(( res, rej ) => {
        res( supplies );
    });

    return (
        <div className="container">
            {
                state.map( item => (
                    <ImgMediaCard key= { item.id }
                        { ...item }
                    />
                ))
            }
        </div>
    )
}
