import React from 'react';
import { ImgMediaCard } from './Card/Card';

export const ListCards = () => {
    return (
        <div className="container">
            <ImgMediaCard alt= 'pendrive' url= '/assets/images/pendrive.png' name= 'Pendrive' stock={ 10 } initial= { 1 } />
            <ImgMediaCard alt= 'pendrive' url= '/assets/images/pendrive.png' name= 'Pendrive' stock={ 1 } initial= { 1 } />
        </div>
    )
}
