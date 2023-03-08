import { useEffect } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getAllWinningNumber, IGetWinningNumber } from "../../api/lotto";
import { countNumber } from "../../atoms";
import Chart from "../../components/Chart";
import Loading from "../../components/Loading";
import { Container } from "./WinningNumbers";

function EachNumber() {
  const { data, isLoading } = useQuery<IGetWinningNumber[]>(
    ["allWinningNumber"],
    getAllWinningNumber
  );

  useEffect(() => {
    if (countNumber[0] === 0) {
      data?.map((division) => {
        division.numbers.map((number) => {
          countNumber[number - 1]++;
          return "";
        });
        return "";
      });
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <SettingForm>
            <Chart />
          </SettingForm>
        </Container>
      )}
    </>
  );
}
export default EachNumber;

const SettingForm = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 5px;
  width: 100%;
`;
