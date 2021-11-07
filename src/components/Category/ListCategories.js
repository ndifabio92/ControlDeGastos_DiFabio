import React from 'react'
import { ItemCategory } from './ItemCategory';

export const ListCategories = () => {
    const category = [
        { id: 1, name: 'Notebook AMD', url: '/assets/images/AMD.png', path: '/item'},
        { id: 2, name: 'Notebook Intel', url: '/assets/images/Intel.png', path: '/item'},
        // { id: 3, name: 'Computadoras Escritorio', url: '/assets/images/Pc.jpeg', path: '/item/Notebook'},
        // { id: 3, name: 'Accesorios', url: '/assets/images/Accesorios.jpeg', path: '/item/Accesorios'}
    ];

    return (
        <div className="container">
            {
                category.map( item => (
                    <ItemCategory key={ item.id } { ...item }/>
                ))
            }
        </div>
    )
};