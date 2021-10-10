import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';

import pendrive from '../Images/pendrive.png';

export const ImgMediaCard = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image= { pendrive }
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Pendrive
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography> */}
            </CardContent>
            <CardActions>
                <Button size="small"><VisibilityIcon /> Detalle</Button>
                <Button size="small"><ShoppingCartIcon /> Agregar</Button>
            </CardActions>
        </Card>
    )
}
