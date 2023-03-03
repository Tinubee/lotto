import { useQuery } from "react-query";
import styled from "styled-components";
import { getAllWinningNumber, IGetWinningNumber } from "../api/lotto";
import PageTitle from "../components/PageTitle";
import WinningNumber from "../components/WinningNumber";

const Container = styled.div`
  display: flex;
  height: 80vh;
`;

function Home() {
  const { data, isLoading } = useQuery<IGetWinningNumber[]>(
    ["allWinningNumber"],
    getAllWinningNumber
  );

  return (
    <Container>
      <PageTitle title="Home"></PageTitle>
      {isLoading ? null : (
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

const Wrapper = styled.div`
  display: grid;
  gap: 10px;
`;
