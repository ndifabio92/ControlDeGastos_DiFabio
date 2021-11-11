import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();
export const useCartContex = () => useContext( CartContext );

export const CartContextProvider = ({ children }) => {
    const [ cartList, setCartList ] = useState([ ]);

    const addCartList = item => {
        const isDuplicate = cartList.find( x => x.id === item.id && x.category === item.category );
        ( !isDuplicate ) && setCartList([ ...cartList, item ]);
    };

    const delCartList = item => {
        const newCartList = cartList.filter( x => x.id !== item.id && x.category === item.category );
        setCartList( newCartList );
    };

    const resetCartList = () => setCartList([]);

    const viewList = () => console.alert( cartList );

    return (
        <CartContext.Provider value={{
            cartList,
            viewList,
            addCartList,
            delCartList,
            resetCartList,
        }}>
            {
                children
            }
        </CartContext.Provider>
    )
}
