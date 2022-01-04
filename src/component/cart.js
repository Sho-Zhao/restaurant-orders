import Button from '@mui/material/Button';
import React from 'react';

export default function Cart(){
    return(
        <React.Fragment>
        <ol>
            <li>ビール</li>
            <li>ハイボール</li>
        </ol>
        <Button variant="contained">上記内容で注文する</Button>
        </React.Fragment>
    )
}