import React from 'react';
import { ImgMediaCard } from './Card';

export const ListCards = ({ data }) => {
    return (
        <div className="container">
            {
                data.map( item => (
                    <ImgMediaCard key= { item.id }
                        { ...item }
                    />
                ))
            }
        </div>
    )
}
