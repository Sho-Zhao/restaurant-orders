import Button from '@mui/material/Button';
import React from 'react';
import { Grid } from '@mui/material';

export default function Cart(){
    return(
        <React.Fragment>
            <Grid container spacing={2}>
            <Grid item xs={4}/>
            <Grid item xs={4}>
                <ol>
                    <li>ビール</li>
                    <li>ハイボール</li>
                </ol>
                <Button variant="contained">上記内容で注文する</Button>
            </Grid>
            <Grid item xs={4}/>
            </Grid>
        </React.Fragment>
    )
}