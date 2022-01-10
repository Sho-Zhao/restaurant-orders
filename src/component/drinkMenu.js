import './compstyle.css'
import Button from '@mui/material/Button';
import { Card, CardActions, CardContent } from '@mui/material';

export default function DrinkMenu({name, img, orderDrink=f=>f}){
    return(
        <div className="ListElem">
            <Card sx={{
            border:1,
            width:300,
            height:300
          }}>
                <CardContent>
                    <h1>{name}</h1>
                    <img src={img} className='drinkimg' alt='None'/>
                </CardContent>
                <CardActions>
                    <Button variant='contained' onClick={()=>orderDrink(name)}>注文</Button>
                </CardActions>
            </Card>
        </div>
    )
}