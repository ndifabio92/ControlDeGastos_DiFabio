import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();
export const useCartContex = () => useContext( CartContext );

export const CartContextProvider = ({ children }) => {
    const [ cartList, setCartList ] = useState([ ]);

    const addCartList = item => {
        const isDuplicate = cartList.find( x => x.id === item.id && x.category === item.category );
        ( !isDuplicate ) && setCartList([ ...cartList, item ]);
    };

    const viewList = () => console.alert( cartList );

    return (
        <CartContext.Provider value={{
            cartList,
            viewList,
            addCartList
        }}>
            {
                children
            }
        </CartContext.Provider>
    )
}
