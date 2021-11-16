import React, { useEffect, useState } from 'react'
import { Loading } from '../Loading/Loading';
import { getFirestore } from '../../services/getFirestore';
import { ItemCategory } from './ItemCategory';

export const ListCategories = () => {
    const [ state, setState ] = useState([]);

    useEffect( () => {
        const db = getFirestore();
        const dbQuery = db.collection('categorys').get();
        dbQuery
            .then( resp => 
                setState( resp.docs.map( 
                    cat => ({ id: cat.id , ...cat.data() })
                ))
            )
            .catch( error => {
                alert('No se pudo conectar con la base de datos');
            });
    }, [ state ]);

    return (
        <>
            {
                state.length === 0 ? <Loading/> :
                state.map( item => (
                    <ItemCategory key={ item.id } { ...item }/>
                ))
            }
        </>
    )
};