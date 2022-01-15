import React from "react";
import { ReceiveOrder } from "./receiveorder";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function OrderedList(){

    return(
        <TableContainer component={Paper}>
            <h1>注文リスト</h1>
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{width:60}}>テーブル</TableCell>
              <TableCell>ドリンク</TableCell>
              <TableCell>提供</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow>
                <TableCell sx={{width:60}}>1</TableCell>
                <TableCell>ビール</TableCell>
                <TableCell>削除</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
}