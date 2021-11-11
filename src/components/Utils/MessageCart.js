import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const MessageCart = () => {
    return (
        <>
            <div>
                <h1>No hay productos agregados al carrito de compra</h1>
            </div>
            <div>
                <Button variant="contained" size="small" component={ Link } to={`home`} > Volver a las Categorias</Button>
            </div>
        </>
    )
}
