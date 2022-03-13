import React from "react";
import { Despesa } from "../App";

interface IStatsProps {
  despesas: Despesa[];
}

export default function Stats(props: IStatsProps) {
  function getSumOfExpenses() {
    return props.despesas.reduce((prev, curr) => prev + curr.valor, 0);
  }

  return <div>R$ {getSumOfExpenses().toFixed(2)}</div>;
}
