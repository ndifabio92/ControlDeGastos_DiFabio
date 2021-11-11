import React from 'react'
import { useCartContex } from '../../context/CardContext'

export const CartWidget = () => {
    const { cartList } = useCartContex();

    return (
        <>
            {
                cartList.length !== 0
                &&
                cartList.length
            }
        </>
    )
}
