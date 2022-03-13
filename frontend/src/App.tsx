import "./App.css";
import {
  fetchAllYearWithExpenses,
  fetchDespesas,
} from "./services/backend.service";
import AppControls from "./components/AppControls";
import DespesasTable from "./components/DespesasTable";
import { useEffect, useState } from "react";
import Stats from "./components/Stats";
import { Box, Button } from "@material-ui/core";
import { login, logout } from "./services/auth.service";
import { useNavigate } from "react-router-dom";
import CategoryTable from "./components/CategoryTable";
import { summarizeByCategory } from "./services/despesa.service";

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
  const [viewType, setviewType] = useState<"despesa" | "categoria">("despesa");
  let navigate = useNavigate();

  function handleYearChange(year: number) {
    setYear(year);
  }

  function handleMonthChange(month: number) {
    setMonth(month);
  }

  function handleTypeChange(viewType: "despesa" | "categoria") {
    setviewType(viewType);
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

  function handleLogout() {
    logout().then(() => {
      navigate("/login");
    });
  }

  return (
    <div className="App">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <AppControls
          years={years}
          year={year}
          month={month}
          viewType={viewType}
          onMonthChange={handleMonthChange}
          onYearChange={handleYearChange}
          onTypeChange={handleTypeChange}
        />
        <Stats despesas={despesas} />
        <Button variant="outlined" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
      {viewType === "despesa" && <DespesasTable rows={despesas} />}
      {viewType === "categoria" && (
        <CategoryTable rows={summarizeByCategory(despesas)} />
      )}
    </div>
  );
}

export default App;
