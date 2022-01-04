import './compstyle.css'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function DrinkMenu({name, img}){
    return(
        <div className="ListElem">
                <Box sx={{
        width: 300,
        height: 200,
        border: '3px solid grey'
        
        }}>
                <h1>{name}</h1>
                <img src={img} className='drinkimg'/>
                <Button variant='outlined'>注文</Button>
                </Box>
        </div>
    )
}