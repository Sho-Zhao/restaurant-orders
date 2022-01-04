import './compstyle.css'
import Button from '@mui/material/Button';

export default function DrinkList({name, img}){
    return(
        <div className="ListElem">
            <h1>{name}</h1>
            <img src={img} className='drinkimg'/>
            <Button variant='outlined'>注文</Button>
        </div>
    )
}