import Button from '@mui/material/Button';
import React from 'react';
import { Grid } from '@mui/material';

export default function Cart({orderList, onClear=f=>f}){
    return(
        <React.Fragment>
            <Grid container spacing={2}>
            <Grid item xs={4}/>
            <Grid item xs={4}>
                <ol>
                    {orderList.map(orderdrink =>
                        <li>{orderdrink}</li>
                    )}
                </ol>
                <Button variant="contained">上記内容で注文する</Button>
                <Button variant="outlined" onClick={onClear}>注文をクリア</Button>
            </Grid>
            <Grid item xs={4}/>
            </Grid>
        </React.Fragment>
    )
}