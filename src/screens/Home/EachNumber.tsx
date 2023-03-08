import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { getAllWinningNumber, IGetWinningNumber } from "../../api/lotto";
import { selectNumberAtom } from "../../atoms";
import Loading from "../../components/Loading";
import { Circle } from "../../components/WinningNumber";

function EachNumber() {
  const [selectNumber, setSelectNumber] = useRecoilState(selectNumberAtom);
  const [numberSort, setNumberSort] = useState(false);
  const { data, isLoading } = useQuery<IGetWinningNumber[]>(
    ["allWinningNumber"],
    getAllWinningNumber
  );

  useEffect(() => {
    if (selectNumber[0].count === 0) {
      data?.map((division) => {
        division.numbers.map((number) => {
          setSelectNumber((old) => {
            const targetIndex = old.findIndex((item) => item.number === number);
            if (targetIndex !== -1) {
              const newSelectNumber = [...old];
              newSelectNumber[targetIndex] = {
                ...old[targetIndex],
                count: old[targetIndex].count + 1,
              };
              return newSelectNumber;
            }
            return old;
          });
          return "";
        });
        return "";
      });
    }
  }, [data, selectNumber, setSelectNumber]);

  const handleSortClick = () => {
    if (!numberSort) {
      const sortedSelectNumber = [...selectNumber].sort(
        (a, b) => b.count - a.count
      );
      setSelectNumber(sortedSelectNumber);
    } else {
      const sortedSelectNumber = [...selectNumber].sort(
        (a, b) => a.number - b.number
      );
      setSelectNumber(sortedSelectNumber);
    }

    setNumberSort((prev) => !prev);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <Wrapper>
            <ToggleButton onClick={handleSortClick}>
              {numberSort ? "숫자순" : "출현횟수순"}
            </ToggleButton>
            {selectNumber.map((number) => {
              return (
                <NumberForm key={number.number}>
                  <Circle number={number.number}>{number.number}</Circle>
                  <Line value={number.count} />
                  <Count>{number.count}</Count>
                </NumberForm>
              );
            })}
          </Wrapper>
        </Container>
      )}
    </>
  );
}
export default EachNumber;

const ToggleButton = styled.button`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.icontextColor};
  border: 1px solid ${(props) => props.theme.icontextColor};
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    color: ${(props) => props.theme.textColor};
    border: 1px solid ${(props) => props.theme.borderColor};
  }
`;

const Line = styled.div<{ value: number }>`
  height: 15px;
  width: ${(props) => props.value * 2.5}px;
  background-color: ${(props) => props.theme.icontextColor};
  border-radius: 10px;
  transition: 0.5s;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
`;

const Wrapper = styled.div`
  padding: 20px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 5px;
  width: 80%;
  white-space: nowrap;
`;

const Count = styled.div`
  font-size: 20px;
`;

const NumberForm = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
`;
