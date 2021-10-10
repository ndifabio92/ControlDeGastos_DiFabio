import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
                    Control de Gastos
                </Typography>
                
                <Button
                    color="inherit"
                    id="basic-button"
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    Lista de Insumos
                </Button>
                <Button color="inherit"> <AccountCircleIcon /> Login</Button>
                <Button color="inherit"> <ShoppingCartIcon /> Carrito</Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>PC Gaming</MenuItem>
                    <MenuItem onClick={handleClose}>Notebooks</MenuItem>
                    <MenuItem onClick={handleClose}>Accesorios</MenuItem>
                </Menu>
                </Toolbar>
            </AppBar>
            </Box>
        </>
    );
}