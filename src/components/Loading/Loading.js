import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Loading = () => {
    return (
        <div className="loading">
            <Box sx={{ display: 'flex' }}>
                <h2>Obteniendo Informacion...</h2>  <CircularProgress />
            </Box>
        </div>
    )
}
