import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import React from "react";

interface ICategoryTableProps {
  rows: {
    category: string;
    total: number;
  }[];
}

export default function CategoryTable(props: ICategoryTableProps) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Categoria</TableCell>
          <TableCell align="right">Valor (R$)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.rows.map((row) => (
          <TableRow key={row.category}>
            <TableCell component="th" scope="row">
              {row.category}
            </TableCell>
            <TableCell align="right">R$ {row.total.toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
