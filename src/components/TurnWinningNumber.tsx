import { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { getTurnWinningNumber, IGetWinningNumber } from "../api/lotto";
import { turnNumberAtom } from "../atoms";
import { Wrapper } from "../screens/Home/WinningNumbers";
import Loading from "./Loading";

function TurnWinningNumber() {
  const [turnNumber, setTurnNumber] = useRecoilState(turnNumberAtom);

  const { data, isLoading, refetch } = useQuery<IGetWinningNumber>(
    ["turnData"],
    () => getTurnWinningNumber(turnNumber)
  );

  useEffect(() => {
    refetch();
  }, [refetch, setTurnNumber, turnNumber, data]);

  return (
    <>
      {isLoading ? (
        <Wrapper>
          <Loading />
        </Wrapper>
      ) : (
        <Wrapper>
          <Title>{`${data?.draw_no}회 당첨 상세정보`}</Title>
          <hr />
          {data?.divisions.map((division, index) => {
            return (
              <Division key={index}>
                <Text>{index + 1}등</Text>
                <Text>{division.winners}명</Text>
                <Text>{division.prize.toLocaleString()}원</Text>
              </Division>
            );
          })}
          <Note>
            비고 ( 자동 {data?.winners_combination.auto || 0}명, 반자동{" "}
            {data?.winners_combination.semi_auto || 0}명, 수동{" "}
            {data?.winners_combination.manual || 0}명 )
          </Note>
          <Note>총 판매액 : {data?.total_sales_amount.toLocaleString()}원</Note>
        </Wrapper>
      )}
    </>
  );
}
export default TurnWinningNumber;

const Text = styled.div`
  font-size: 22px;
`;

const Division = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 10px 0px;
`;

const Note = styled.div`
  opacity: 0.7;
`;

const Title = styled.div`
  text-align: center;
  font-size: 32px;
`;
