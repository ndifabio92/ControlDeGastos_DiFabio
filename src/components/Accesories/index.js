import React, { useEffect, useState } from 'react';
import { ListItems } from '../Supplies/ListItems';
import { Loading } from '../Loading/Loading';   
import { getFirestore } from '../../services/getFirestore';

export const Index = () => {
    const [ state, setState ] = useState([ ]);

    useEffect( () => {
        const db = getFirestore();
        const dbQuery = db.collection('accesories').get();
        dbQuery
            .then( resp => 
                setState( resp.docs.map( 
                    item => ({ id: item.id , ...item.data() })
                ))
            )
            .catch( error => {
                alert('No se pudo conectar con la base de datos');
            });
    }, [ ]);

    return (
        <div className="container">
            {
                state.length === 0 ? <Loading/> : <ListItems data={ state }/>
            }
        </div>
    )
}