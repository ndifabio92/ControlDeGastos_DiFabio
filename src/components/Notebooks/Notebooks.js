import React, { useEffect, useState } from 'react';
import { ListCards } from '../Card/ListCards';
import { supplies } from '../../data/supplies';
import { useParams } from 'react-router';

export const Notebooks = () => {
    const [ state, setState ] = useState([]);
    const { id } = useParams();

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
    }, [ id ]);

    const getSupplis = new Promise(( res, rej ) => {
        ( id ) ? res( supplies.filter( x => x.category === "Notebook" && x.subCategory === id )) : res( supplies.filter( x => x.category === "Notebook" ));
    });

    return (
        <>
            <ListCards data={ state }/>
        </>
    )
}
