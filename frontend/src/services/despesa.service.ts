import { Despesa } from "../App";

export function summarizeByCategory(despesas: Despesa[]) {
  let categoryTotals: { [category: string]: number } = {};
  despesas.forEach((d) => {
    if (d.categoria in categoryTotals) {
      categoryTotals[d.categoria] += d.valor;
    } else {
      categoryTotals[d.categoria] = d.valor;
    }
  });

  return Object.keys(categoryTotals)
    .map((cat) => {
      return {
        category: cat,
        total: categoryTotals[cat],
      };
    })
    .sort((a, b) => b.total - a.total);
}
