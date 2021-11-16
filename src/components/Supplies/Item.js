import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { VisIcon } from '../Icons/ListIcons';
import '../styles/card.css';

export const Item = ({ alt, url, name, id, category }) => (
    <Card sx={{ width: 345 }} className="card">
        <CardMedia
            className=" card-img "
            component="img"
            alt = { alt }
            height="140"
            image= { url }
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" className="card-title">
                { name }
            </Typography>
        </CardContent>
        <CardActions className="card-buttons">
            <Button size="small" component={ Link } to={`item/${ category }/${ id }`} ><VisIcon /> Detalle </Button>
        </CardActions>
    </Card>
)
