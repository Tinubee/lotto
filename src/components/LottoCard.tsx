import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { selectNumberAtom } from "../atoms";
import { IItemType } from "./WinningNumber";

function LottoCard({ item }: IItemType) {
  const [winNumber, setWinNumber] = useState<number[]>([]);
  const selectNumber = useRecoilValue(selectNumberAtom);
  useEffect(() => {
    setWinNumber(item.numbers);
  }, [item]);

  return (
    <Card>
      {selectNumber.map((num) => {
        return (
          <Number key={num.number} isWin={winNumber.includes(num.number)}>
            {num.number}
          </Number>
        );
      })}
    </Card>
  );
}

export default LottoCard;

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
`;

const Number = styled.div<{ isWin: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  padding: 10px;
  border: 1px solid red;
  border-radius: 10px;
  background-color: ${(props) => (props.isWin ? "red" : null)};
`;
