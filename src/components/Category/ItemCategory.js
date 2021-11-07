import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { useHistory } from 'react-router';

export const ItemCategory = ({ name, url, path }) => {
    
    const history = useHistory();
    const routeChange = ( path ) => history.push( path );

    return (
        <>
            <Card sx={{ width: 345 }} className="card">
                <CardMedia
                    className=" card-category "
                    component="img"
                    alt = { name }
                    height="auto"
                    image= { url }
                    onClick= { e => routeChange( path ) }
                />
            </Card>
        </>
    )
}
