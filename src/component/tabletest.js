import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>テーブル番号</TableCell>
            <TableCell>ドリンク</TableCell>
            <TableCell>提供</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell align="right">ビール</TableCell>
              <TableCell align="right">削除</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}