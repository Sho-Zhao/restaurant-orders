import './compstyle.css'
import DrinkMenu from './drinkMenu';
import { Stack } from '@mui/material';
import React from 'react';

export default function DrinkList({drinkdata}){
    return(
        <React.Fragment>
            <Stack direction="row" spacing={2}>
            {drinkdata.map((data) => (
                <DrinkMenu name={data['name']} img={data['img']} />
            ))}
            </Stack>
        </React.Fragment>
    )
}