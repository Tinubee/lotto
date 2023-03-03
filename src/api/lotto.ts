const BASE_URL = "https://smok95.github.io/lotto/results";

interface IDivision {
  prize: number;
  winners: number;
}

interface ICombination {
  auto: number;
  semi_auto: number;
  manual: number;
}

export interface IGetWinningNumber {
  draw_no: number;
  numbers: number[];
  bonus_no: number;
  divisions: IDivision[];
  total_sales_amount: number;
  winners_combination: ICombination[];
}

export function getAllWinningNumber() {
  return fetch(`${BASE_URL}/all.json`).then((res) => res.json());
}
