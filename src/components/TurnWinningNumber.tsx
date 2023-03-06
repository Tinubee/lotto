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
    console.log(data);
  }, [refetch, setTurnNumber, turnNumber, data]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Wrapper>
          <Title>{`${data?.draw_no}회 당첨 상세정보`}</Title>
          <hr />
          <span>{data?.draw_no}</span>
        </Wrapper>
      )}
    </>
  );
}
export default TurnWinningNumber;

const Title = styled.div`
  text-align: center;
  font-size: 32px;
`;
