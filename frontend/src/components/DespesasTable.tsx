import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import React from "react";
import { Despesa } from "../App";

interface IDespesasTableProps {
  rows: Despesa[];
}

export default function DespesasTable(props: IDespesasTableProps) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Despesa</TableCell>
          <TableCell align="right">Categoria</TableCell>
          <TableCell align="right">Dia</TableCell>
          <TableCell align="right">Valor (R$)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.descricao}
            </TableCell>
            <TableCell align="right">{row.categoria}</TableCell>
            <TableCell align="right">{row.dia}</TableCell>
            <TableCell align="right">{row.valor}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
