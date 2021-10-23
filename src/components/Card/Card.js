import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ShCartIcon, VisIcon } from '../Icons/ListIcons';
import '../styles/card.css';
import { SwalAlert } from '../Alerts/SwalAlert';


export const ImgMediaCard = ({ alt, url, name, stock = 0, initial, info }) => {

    const [ counter, setCounter ] = useState( initial );

    const handleAdd = () => ( counter < stock ) ? setCounter( counter + 1 ) : SwalAlert( 'Alerta', 'La cantidad seleccionada no puede ser mayor al stock del articulo.', 'warning' );
    const handleRest = () => ( counter !== initial ) ? setCounter( counter - 1 ) : SwalAlert( 'Alerta', 'La cantidad seleccionada no puede ser menor al stock del articulo.', 'warning' );

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
                <div className="card-content-actions">
                    <Button variant="outlined" color="success" size="small" onClick= { handleAdd } > 
                        + 
                    </Button>
                    <h4> { counter } </h4>
                    <Button variant="outlined" color="error" size="small" onClick= { handleRest } >
                        - 
                    </Button>
                </div>
            </CardContent>
            <CardActions className="card-buttons">
                <Button size="small"><VisIcon /> Detalle</Button>
                <Button size="small"><ShCartIcon /> Agregar</Button>
            </CardActions>
        </Card>
    )
}
