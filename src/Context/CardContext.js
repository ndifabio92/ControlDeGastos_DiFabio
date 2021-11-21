import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();
export const useCartContex = () => useContext( CartContext );

export const CartContextProvider = ({ children }) => {
    const [ cartList, setCartList ] = useState([ ]);

    const addCartList = item => {
        const isExist = cartList.find( x => x.id === item.id );
        if( isExist ) {
            const oldData = cartList.filter( x => x.id === item.id );
            oldData[0].cant += item.cant;
            oldData[0].subTotal += item.subTotal
        } else {
            setCartList([ ...cartList, item ]);
        }
    };

    const delCartList = item => setCartList( cartList.filter( x => x.id !== item.id ));

    const resetCartList = () => setCartList([ ]);

    const viewList = () => console.alert( cartList );

    const getPriceTotal = () => {
        let total = 0;
        for( const { subTotal } of cartList ) {
            total+= subTotal;
        }
        return total;
    };

    return (
        <CartContext.Provider value={{
            cartList,
            viewList,
            addCartList,
            delCartList,
            resetCartList,
            getPriceTotal,
        }}>
            {
                children
            }
        </CartContext.Provider>
    )
}
