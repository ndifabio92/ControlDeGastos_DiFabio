import React from 'react'
import { useCartContex } from '../../Context/CardContext';

export const Cart = () => {
    const { cartList }  = useCartContex();
    cartList.length !== 0 && alert( JSON.stringify( cartList ));
    return (
        <div>
        </div>
    )
}
