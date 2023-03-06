import { useQuery } from "react-query";
import styled from "styled-components";
import { getAllWinningNumber, IGetWinningNumber } from "../../api/lotto";
import Loading from "../../components/Loading";
import WinningNumber from "../../components/WinningNumber";

function WinningNumbers() {
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
        </Container>
      )}
    </>
  );
}

export default WinningNumbers;

const Container = styled.div`
  display: flex;
  padding: 50px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 32px;
`;

const Wrapper = styled.div`
  padding: 20px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  white-space: nowrap;
`;
