import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { getAllWinningNumber, IGetWinningNumber } from "../../api/lotto";
import { clickSeeTurnInfoAtom } from "../../atoms";
import Loading from "../../components/Loading";
import TurnWinningNumber from "../../components/TurnWinningNumber";
import WinningNumber from "../../components/WinningNumber";

function WinningNumbers() {
  const seeTurn = useRecoilValue(clickSeeTurnInfoAtom);
  const { data, isLoading } = useQuery<IGetWinningNumber[]>(
    ["allWinningNumber"],
    getAllWinningNumber
  );

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <Wrapper>
            <Title>당첨 번호 목록</Title>
            {data
              ?.slice(0)
              .reverse()
              .map((item) => {
                return <WinningNumber key={item.draw_no} item={item} />;
              })}
          </Wrapper>
          {seeTurn ? <TurnWinningNumber /> : null}
        </Container>
      )}
    </>
  );
}

export default WinningNumbers;

export const Container = styled.div`
  display: flex;
  gap: 10px;
  padding: 50px;
  height: 200vh;
`;

const Title = styled.div`
  text-align: center;
  font-size: 32px;
`;

export const Wrapper = styled.div`
  padding: 20px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 5px;
  width: 40vw;
  height: 150vh;
  overflow: scroll;
  overflow-x: hidden;
  white-space: nowrap;
  &::-webkit-scrollbar-thumb {
    border-radius: 15px;
    background-color: ${(props) => props.theme.textColor};
  }
  &::-webkit-scrollbar {
    width: 10px;
  }
`;
