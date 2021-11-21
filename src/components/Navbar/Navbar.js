import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { ShCartIcon, AccCircleIcon } from '../Icons/ListIcons';
import { CartWidget } from '../Cart/CartWidget';

export const Navbar = () => {
    const [ anchorEl, setAnchorEl ] = useState( null );
    const open = Boolean( anchorEl );

    const handleClick = ( event ) => {
        setAnchorEl( event.currentTarget );
    };

    const handleClose = () => {
        setAnchorEl( null );
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
            <AppBar>
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}>Control de Gastos</Link>
                </Typography>
                
                <Button
                    color="inherit"
                    id="basic-button"
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    Lista de Productos
                </Button>
                <Button component={ Link } to={'/'} color="inherit"> <AccCircleIcon /> Login </Button>
                <Button component={ Link } to={'/cart'} color="inherit"> <CartWidget/> <ShCartIcon /> Carrito</Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={ handleClose } component={ Link } to={'/category/notebooks'}> Notebooks </MenuItem>
                    <MenuItem onClick={ handleClose } component={ Link } to={'/category/computers'}> Computadoras </MenuItem>
                    <MenuItem onClick={ handleClose } component={ Link } to={'/category/accesories'}> Accesorios </MenuItem>
                </Menu>
                </Toolbar>
            </AppBar>
            </Box>
        </>
    );
}