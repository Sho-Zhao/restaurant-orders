import Button from '@mui/material/Button';
import React from 'react';
import { Grid } from '@mui/material';
import './compstyle.css'
import OrderDialog from './orderdialog';
import OrderModal from './ordermodal';
import { SendOrder } from './sendOrder.js';
import { useParams } from 'react-router';

export default function Cart({orderList, onClear=f=>f}){
    const [open, setOpen] = React.useState(false);
    const [modalOpen, setModal] = React.useState(false);
    const {tablenum} = useParams()

    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleOrder = () =>{
        setOpen(false);
        setModal(true);
        orderList.forEach(element => {
            SendOrder(tablenum,element)
        });
    }

    const handleClose = () => {
        setOpen(false);
        setModal(false);
      };    

    return(
        <React.Fragment>
            <Grid container spacing={2} className='cart-margin'>
            <Grid item xs={2}/>
            <Grid item xs={8} className='cart'>
                <h2>テーブル番号：{tablenum}</h2>
                <ol>
                    {orderList.map((orderdrink, id) =>
                        <li key={id}>{orderdrink}</li>
                    )}
                </ol>
                {orderList.length > 0 
                ? <Button variant="contained" onClick={handleClickOpen}>上記内容で注文する</Button> 
                : <Button disable>上記内容で注文する</Button> }
                <Button variant="outlined" onClick={onClear}>注文をクリア</Button>
            </Grid>
            <Grid item xs={2}/>
            </Grid>
            <OrderDialog open={open} onClose={handleClose} orderlist={orderList} onOrder={handleOrder}/>
            <OrderModal open={modalOpen} onClose={handleClose} orderlist={orderList} />
        </React.Fragment>
    )
}