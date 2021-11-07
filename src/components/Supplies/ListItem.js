import React from 'react';
import { Item } from './Item';

export const ListItems = ({ data }) => {
    return (
        <div className="container">
            {
                data.map( item => (
                    <Item key= { item.id }
                        { ...item }
                    />
                ))
            }
        </div>
    )
}
