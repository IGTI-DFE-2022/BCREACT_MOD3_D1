import "./App.css";
import {
  fetchAllYearWithExpenses,
  fetchDespesas,
} from "./services/backend.service";
import AppControls from "./components/AppControls";
import DespesasTable from "./components/DespesasTable";
import { useEffect, useState } from "react";
import Stats from "./components/Stats";
import { Box } from "@material-ui/core";
import { login } from "./services/auth.service";

export interface Despesa {
  id: number;
  descricao: string;
  categoria: string;
  valor: number;
  mes: string;
  dia: number;
}

function App() {
  const [years, setYears] = useState<number[]>([]);
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(1);
  const [despesas, setDespesas] = useState<Despesa[]>([]);

  function handleYearChange(year: number) {
    setYear(year);
  }

  function handleMonthChange(month: number) {
    setMonth(month);
  }

  useEffect(() => {
    fetchAllYearWithExpenses().then((d) => {
      setYears(d);
      // setYear(years[years.length - 1]);
    });

    // login("usuario@email.com", "1234").then((result) => {
    //   console.log("login: ");
    //   console.log(result);
    // });
  }, []);

  useEffect(() => {
    if (month > 0 && year > 0) {
      fetchDespesas(year, month).then((d) => setDespesas(d));
    }
  }, [month, year]);

  return (
    <div className="App">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <AppControls
          years={years}
          year={year}
          month={month}
          onMonthChange={handleMonthChange}
          onYearChange={handleYearChange}
        />
        <Stats despesas={despesas} />
      </Box>
      <DespesasTable rows={despesas} />
    </div>
  );
}

export default App;
