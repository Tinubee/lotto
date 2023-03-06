import {
  faArrowRightFromBracket,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { IGetWinningNumber } from "../api/lotto";
import { clickSeeTurnInfoAtom, turnNumberAtom } from "../atoms";

export interface IItemType {
  item: IGetWinningNumber;
}

function WinningNumber({ item }: IItemType) {
  const setTurnNumber = useSetRecoilState(turnNumberAtom);
  const setSeeTrun = useSetRecoilState(clickSeeTurnInfoAtom);

  const changeTurnNumber = (turn: number) => {
    setTurnNumber(turn);
    setSeeTrun(true);
  };

  return (
    <NumbersContainer>
      <hr />
      <Info>
        <DrawNumber>{item?.draw_no}회</DrawNumber>
        <Date>{item?.date.split("T")[0]}</Date>
      </Info>
      <Number>
        {item?.numbers.map((num: any, index: number) => (
          <Circle key={index} number={num}>
            {num}
          </Circle>
        ))}
        <FontAwesomeIcon icon={faPlus} />
        <Circle number={item?.bonus_no}>{item?.bonus_no}</Circle>
        <FontAwesomeIcon
          size="xl"
          icon={faArrowRightFromBracket}
          onClick={() => changeTurnNumber(item?.draw_no)}
        />
      </Number>
    </NumbersContainer>
  );
}

export default WinningNumber;

const DrawNumber = styled.span`
  font-size: 22px;
`;

const Date = styled.span`
  opacity: 0.8;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 5px;
  svg {
    cursor: pointer;
    :hover {
      color: ${(props) => props.theme.hoverColor};
    }
  }
`;

const NumbersContainer = styled.div`
  margin-top: 20px;
`;

const Circle = styled.div<{ number: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  height: 50px;
  width: 50px;
  color: #fbfbfb;
  border-radius: 50%;
  background-color: ${(props) =>
    props.number > 40
      ? props.theme.fourtyColor
      : props.number > 30
      ? props.theme.thirtyColor
      : props.number > 20
      ? props.theme.twentyColor
      : props.number > 10
      ? props.theme.tenColor
      : props.theme.oneColor};
`;
