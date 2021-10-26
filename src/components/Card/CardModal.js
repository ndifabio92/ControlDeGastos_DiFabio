import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import '../styles/card-modal.css';

export const CardModal = ({ open, handleClose, name, url, alt, info }) => {
    
    const { Mark, Model, Micro, Ram, TypeRam, Storage, TypeStorage, Video, Display, Resolution } = info;
    
    return (
        <div className="container">
            <Modal
                open={ open }
                onClose={ handleClose }
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="card-modal">
                    <div className="modal-body">
                        <CardMedia
                            className="modal-img"
                            component="img"
                            alt = { alt }
                            image= { url }
                        />
                        <CardContent>
                            <Typography id="modal-modal-title" variant="h5" component="h2">
                                { name }
                            </Typography>
                            <br/>
                            <h3>Características del producto</h3>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }} className="modal-description">
                                Marca: { Mark } <br/>
                                Model: { Model } <br/>
                                Procesador: { Micro } <br/>
                                Memoria Ram: { Ram } <br/>
                                Tipo de Memoria: { TypeRam } <br/>
                                Espacio: { Storage } <br/>
                                Tipo de Espacio: { TypeStorage } <br/>
                                Placa de Video: { Video } <br/>
                                Pantalla: { Display } <br/>
                                Resolucion: { Resolution } <br/>
                            </Typography>
                        </CardContent>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}
