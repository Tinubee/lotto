import { atom } from "recoil";

interface ISelectNumber {
  number: number;
  count: number;
}

export const isDarkAtom = atom({
  key: "Dark",
  default: localStorage.getItem("mode") === "true" ? true : false,
});

export const turnNumberAtom = atom<number>({
  key: "TrunNumber",
  default: 1,
});

export const latestTurnNumberAtom = atom<number>({
  key: "LatestTrunNumber",
  default: 1,
});

export const clickSeeTurnInfoAtom = atom<boolean>({
  key: "seeTrunInfo",
  default: false,
});

export const backAtom = atom<boolean>({
  key: "back",
  default: false,
});

export const selectNumberAtom = atom<ISelectNumber[]>({
  key: "selectNumber",
  default: [
    { number: 1, count: 0 },
    { number: 2, count: 0 },
    { number: 3, count: 0 },
    { number: 4, count: 0 },
    { number: 5, count: 0 },
    { number: 6, count: 0 },
    { number: 7, count: 0 },
    { number: 8, count: 0 },
    { number: 9, count: 0 },
    { number: 10, count: 0 },
    { number: 11, count: 0 },
    { number: 12, count: 0 },
    { number: 13, count: 0 },
    { number: 14, count: 0 },
    { number: 15, count: 0 },
    { number: 16, count: 0 },
    { number: 17, count: 0 },
    { number: 18, count: 0 },
    { number: 19, count: 0 },
    { number: 20, count: 0 },
    { number: 21, count: 0 },
    { number: 22, count: 0 },
    { number: 23, count: 0 },
    { number: 24, count: 0 },
    { number: 25, count: 0 },
    { number: 26, count: 0 },
    { number: 27, count: 0 },
    { number: 28, count: 0 },
    { number: 29, count: 0 },
    { number: 30, count: 0 },
    { number: 31, count: 0 },
    { number: 32, count: 0 },
    { number: 33, count: 0 },
    { number: 34, count: 0 },
    { number: 35, count: 0 },
    { number: 36, count: 0 },
    { number: 37, count: 0 },
    { number: 38, count: 0 },
    { number: 39, count: 0 },
    { number: 40, count: 0 },
    { number: 41, count: 0 },
    { number: 42, count: 0 },
    { number: 43, count: 0 },
    { number: 44, count: 0 },
    { number: 45, count: 0 },
  ],
});

// export const countNumber = [
//   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
// ];
