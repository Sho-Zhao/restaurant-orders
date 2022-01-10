import Button from '@mui/material/Button';
import React from 'react';
import { Grid } from '@mui/material';
import './compstyle.css'

export default function Cart({orderList, onClear=f=>f, onOrder=f=>f}){
    return(
        <React.Fragment>
            <Grid container spacing={2} className='cart-margin'>
            <Grid item xs={4}/>
            <Grid item xs={4} className='cart'>
                <ol>
                    {orderList.map((orderdrink, id) =>
                        <li key={id}>{orderdrink}</li>
                    )}
                </ol>
                <Button variant="contained" onClick={() => onOrder(orderList)}>上記内容で注文する</Button>
                <Button variant="outlined" onClick={onClear}>注文をクリア</Button>
            </Grid>
            <Grid item xs={4}/>
            </Grid>
        </React.Fragment>
    )
}