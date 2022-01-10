import './compstyle.css'
import DrinkMenu from './drinkMenu';
import { Grid, Stack } from '@mui/material';
import React from 'react';

export default function DrinkList({drinkdata, orderDrink=f=>f}){
    return(
        <Grid container spacing={1} className='drinklist'>
            <Grid item xs={1} md={2} />
            <Grid item xs={10} md={8}>
            <Stack direction="row" spacing={2}>
            {drinkdata.map((data) => (
                <DrinkMenu name={data['name']} img={data['img']} orderDrink={orderDrink}/>
            ))}
            </Stack>
            </Grid>
            <Grid item xs={1} md={2} />
        </Grid>
    )
}