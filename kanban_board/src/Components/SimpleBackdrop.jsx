import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { BackdropContext } from '../context/BackdropContext';

export default function SimpleBackdrop() {
    const [showBackdrop, setShowBackdrop] = React.useContext(BackdropContext)



    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={showBackdrop}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}
