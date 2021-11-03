import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { ShCartIcon, AccCircleIcon } from '../Icons/ListIcons';
import { Link, NavLink } from 'react-router-dom';

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
                    Lista de Insumos
                </Button>
                <Button component={ Link } to={'/'} color="inherit"> <AccCircleIcon /> Login </Button>
                <Button component={ Link } to={'/cart'} color="inherit"> <ShCartIcon /> Carrito</Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose} component={ Link } to={'/pc'}>PC Gaming</MenuItem>
                    <MenuItem onClick={handleClose} component={ Link } to={'/note'}> Notebooks </MenuItem>
                    <MenuItem onClick={handleClose} component={ Link } to={'/acc'}>Accesorios</MenuItem>
                </Menu>
                </Toolbar>
            </AppBar>
            </Box>
        </>
    );
}