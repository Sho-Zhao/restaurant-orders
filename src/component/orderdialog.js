import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


export default function OrderDialog(props){
    const { onOrder, onClose, open, orderlist } = props;

    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"下記内容で注文します。よろしいでしょうか？"}
        </DialogTitle>
        <DialogContent>
          <ol>
              {orderlist.map((drink, id) => <li key={id}>{drink}</li>)}
          </ol>
        </DialogContent>
        <DialogActions>
          <Button onClick={onOrder} variant="contained">注文する</Button>
          <Button onClick={onClose} autoFocus>
            キャンセル
          </Button>
        </DialogActions>
      </Dialog>
  );
}