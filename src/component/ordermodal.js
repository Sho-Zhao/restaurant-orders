import { Modal, Box, Typography } from "@mui/material";

export default function OrderModal(props){
    const { open, onClose, orderlist } = props;

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: 3,
      };

    return (
    <Modal
    open={open}
    onClose={onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
    <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
        注文が完了しました！
        </Typography>
        <ol>
              {orderlist.map((drink, id) => <li key={id}>{drink}</li>)}
        </ol>
    </Box>
    </Modal>
)
}