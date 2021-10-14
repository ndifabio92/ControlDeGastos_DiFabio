import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { ShCartIcon, VisIcon } from '../Icons/ListIcons';
import '../styles/card.css';

export const ImgMediaCard = ({ alt, url, name }) => {
    return (
        <Card sx={{ maxWidth: 345 }} className="card">
            <CardMedia
                component="img"
                alt = { alt }
                height="140"
                image= { url }
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    { name }
                </Typography>
            </CardContent>
            <CardActions className="card-buttons">
                <Button size="small"><VisIcon /> Detalle</Button>
                <Button size="small"><ShCartIcon /> Agregar</Button>
            </CardActions>
        </Card>
    )
}
