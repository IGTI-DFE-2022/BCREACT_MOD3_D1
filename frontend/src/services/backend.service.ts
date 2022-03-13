import { Despesa } from "../App";

const BASE_URL = "http://localhost:3001";

export function fetchDespesas(year: number, month: number): Promise<Despesa[]> {
  return fetch(
    `${BASE_URL}/despesas?mes=${year}-${month.toString().padStart(2, "0")}`,
    { credentials: "include" }
  )
    .then((data) => data.json())
    .then((despesas: Despesa[]) => {
      return despesas.sort((a, b) => a.dia - b.dia);
    });
}

export function fetchAllYearWithExpenses() {
  return fetch(`${BASE_URL}/despesas`, { credentials: "include" })
    .then((data) => data.json())
    .then((expenses: Despesa[]) => {
      let years = new Set<number>();
      expenses.forEach((exp: Despesa) => {
        years.add(parseInt(exp.mes.split("-")[0]));
      });
      return Array.from(years);
    });
}
