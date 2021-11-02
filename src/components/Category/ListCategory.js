import React from 'react'
import { CategoryCard } from '../Card/CategoryCard';

export const ListCategory = () => {
    const category = [
        { id: 1, name: 'Notebook AMD', url: '/assets/images/AMD.png', path: '/note/AMD'},
        { id: 2, name: 'Notebook Intel', url: '/assets/images/Intel.png', path: '/note/Intel'},
        { id: 3, name: 'Computadoras Escritorio', url: '/assets/images/Pc.jpeg', path: '/pc'},
        { id: 4, name: 'Accesorios', url: '/assets/images/Accesorios.jpeg', path: '/acc'}
    ];

    return (
        <div className="container">
            {
                category.map( item => (
                    <CategoryCard key={ item.id } { ...item }/>
                ))
            }
        </div>
    )
};