import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import React, { ChangeEvent } from "react";

interface IAppControlsProps {
  onYearChange?: (year: number) => void;
  onMonthChange?: (month: number) => void;
  onTypeChange?: (type: "despesa" | "categoria") => void;
  years: number[];
  year: number;
  month: number;
  viewType: "despesa" | "categoria";
}

export default function AppControls(props: IAppControlsProps) {
  function allMonths() {
    let months = [];
    for (let i = 1; i <= 12; i++) {
      months.push(i);
    }
    return months;
  }

  function handleTypeChange(evt: any) {
    if (props.onTypeChange) {
      props.onTypeChange(evt.target.value);
    }
  }

  function handleYearChange(evt: any) {
    if (props.onYearChange) {
      props.onYearChange(evt.target.value);
    }
  }

  function handleMonthChange(evt: any) {
    if (props.onMonthChange) {
      props.onMonthChange(evt.target.value);
    }
  }

  function getLasYear() {
    return props.years.includes(props.year) ? props.year : "";
  }

  return (
    <div>
      {/* VIEW TYPE */}
      <FormControl>
        <InputLabel htmlFor="input-ano">Tipo</InputLabel>
        <Select
          value={props.viewType}
          onChange={handleTypeChange}
          inputProps={{
            name: "ano",
            id: "input-ano",
          }}
        >
          <MenuItem value="despesa">Despesas</MenuItem>
          <MenuItem value="categoria">Categorias</MenuItem>
        </Select>
      </FormControl>

      {/* YEAR */}
      <FormControl>
        <InputLabel htmlFor="input-ano">Ano</InputLabel>
        <Select
          value={getLasYear()}
          onChange={handleYearChange}
          inputProps={{
            name: "ano",
            id: "input-ano",
          }}
        >
          <MenuItem value=" "></MenuItem>
          {props.years.map((y) => (
            <MenuItem key={y} value={y}>
              {y}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* MONTH */}
      <FormControl>
        <InputLabel htmlFor="input-mes">M??s</InputLabel>
        <Select
          value={props.month}
          onChange={handleMonthChange}
          inputProps={{
            name: "mes",
            id: "input-mes",
          }}
        >
          {allMonths().map((i) => (
            <MenuItem key={i} value={i}>
              {i}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
