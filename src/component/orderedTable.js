import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function OrderedTable ({list=[], Delete=f=>f}){
    return(
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{width:60}}>テーブル</TableCell>
              <TableCell>ドリンク</TableCell>
              <TableCell>提供</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {
              list.map((drink, id)=>(
                <TableRow>
                  <TableCell sx={{width:60}}>{drink['Table']}</TableCell>
                  <TableCell>{drink['Drink']}</TableCell>
                  <TableCell><button onClick={()=>Delete(id)}>削除</button></TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}