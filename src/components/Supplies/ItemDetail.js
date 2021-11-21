import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useCartContex } from '../../context/CardContext';
import { SwalAlert } from '../Alerts/SwalAlert';
import { ShCartIcon } from '../Icons/ListIcons';
import { getFirestore } from '../../services/getFirestore';
import '../styles/card.css';

export const ItemDetail = () => {

    const initial = 1;
    const [ state, setState ] = useState([ ]);
    const [ localList, setLocalList ] = useState([ ]);
    const { cat, id } = useParams();
    const { alt, url, name, category, price, stock } = state;
    const { addCartList }  = useCartContex();
    const [ counter, setCounter ] = useState( initial );

    const handleAdd = () => ( counter < stock ) ? setCounter( counter + 1 ) : SwalAlert( 'Alerta', 'La cantidad seleccionada no puede ser mayor al stock del articulo.', 'warning' );
    const handleRest = () => ( counter !== initial ) ? setCounter( counter - 1 ) : SwalAlert( 'Alerta', 'La cantidad seleccionada no puede ser menor al stock del articulo.', 'warning' );

    const handleAddCart = () => {
        addCartList({ id, category, cant: counter, price, name , subTotal: counter * price, stock });
        setLocalList({ id, category, cant: counter, price, name , subTotal: counter * price });
        SwalAlert( 'Aviso', `Se agregaron ${ counter } al carrito de compras` );
    };

    useEffect(() => {
        const db = getFirestore();
        const dbQuery = db.collection( cat ).doc( id ).get();
        dbQuery
            .then( resp => 
                setState( resp.data() )
            )
            .catch( error => {
                alert('No se pudo conectar con la base de datos');
            });
    }, [ id, cat ]);
    
    return (
        <div className="container">
            {
                state.length !== 0
                &&
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
                            { name } - $ { price }
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
                        { 
                            ( localList.length === 0 ) 
                            ? 
                            <Button size="small" onClick= { handleAddCart } ><ShCartIcon /> Agregar</Button> 
                            : <Button size="small" component= { Link } to= { '/cart' } ><ShCartIcon /> Ir al Carrito </Button> 
                        }
                    </CardActions>
                </Card>
            }
        </div>
    )
}
