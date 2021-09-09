import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../../../components/title/Title';
import Purchase from './Purchase';

const Purchases = ({ list }) => {
  return (
    <>
      <Title>Compras</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Código</TableCell>
            <TableCell>Valor</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Porcentagem</TableCell>
            <TableCell>Cashback</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map(values => (
            <TableRow key={values.code}>
              <Purchase { ...values } />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Purchases;