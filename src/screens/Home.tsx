import { useQuery } from "react-query";
import styled from "styled-components";
import { getAllWinningNumber, IGetWinningNumber } from "../api/lotto";
import Loading from "../components/Loading";
import PageTitle from "../components/PageTitle";
import WinningNumber from "../components/WinningNumber";

function Home() {
  const { data, isLoading } = useQuery<IGetWinningNumber[]>(
    ["allWinningNumber"],
    getAllWinningNumber
  );

  return (
    <Container>
      <PageTitle title="Home"></PageTitle>
      {isLoading ? (
        <Loading />
      ) : (
        <Wrapper>
          {data
            ?.slice(0)
            .reverse()
            .map((item) => {
              return <WinningNumber key={item.draw_no} item={item} />;
            })}
        </Wrapper>
      )}
    </Container>
  );
}

export default Home;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 80vh;
`;

const Wrapper = styled.div`
  padding: 20px;
`;
