const BASE_URL = "https://smok95.github.io/lotto";

interface IDivision {
  prize: number;
  winners: number;
}

interface ICombination {
  auto?: number;
  semi_auto?: number;
  manual?: number;
}

export interface IGetWinningNumber {
  draw_no: number;
  numbers: number[];
  bonus_no: number;
  divisions: IDivision[];
  total_sales_amount: number;
  winners_combination: ICombination;
  date: string;
}

export function getAllWinningNumber() {
  return fetch(`${BASE_URL}/results/all.json`).then((res) => res.json());
}

export function getTurnWinningNumber(turn: number) {
  return fetch(`${BASE_URL}/results/${turn + ""}.json`).then((res) =>
    res.json()
  );
}

export function getLatestWinningNumber() {
  return fetch(`${BASE_URL}/results/latest.json`).then((res) => res.json());
}

export function getWinningPlace(turn: string) {
  return fetch(`${BASE_URL}/winning-stores/${turn}.json`).then((res) =>
    res.json()
  );
}
