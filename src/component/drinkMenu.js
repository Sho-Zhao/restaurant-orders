import './compstyle.css'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function DrinkMenu({name, img, orderDrink=f=>f}){
    return(
        <div className="ListElem">
                <Box sx={{
        width: 300,
        height: 200,
        border: '3px solid grey'
        
        }}>
                <h1>{name}</h1>
                <img src={img} className='drinkimg' alt='None'/>
                <Button variant='outlined' onClick={()=>orderDrink(name)}>注文</Button>
                </Box>
        </div>
    )
}