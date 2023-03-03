import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { getTurnWinningNumber, IGetWinningNumber } from "../api/lotto";
import { latestTurnNumberAtom, turnNumberAtom } from "../atoms";
import LottoCard from "../components/LottoCard";
import { Container } from "./Home";

function About() {
  const [turnNumber, setTurnNumber] = useRecoilState(turnNumberAtom);
  const latestTrunNumber = useRecoilValue(latestTurnNumberAtom);
  const { data, isLoading, refetch } = useQuery<IGetWinningNumber>(
    ["turnData"],
    () => getTurnWinningNumber(turnNumber)
  );

  useEffect(() => {
    refetch();
  }, [refetch, setTurnNumber, turnNumber]);

  const handleChangeTurn = (type: string) => {
    if (type === "next") {
      if (turnNumber === latestTrunNumber) return;
      setTurnNumber((num) => num + 1);
    } else {
      setTurnNumber((num) => num - 1);
    }
  };

  return (
    <Container>
      {isLoading ? null : (
        <Wrapper>
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="2x"
            onClick={() => handleChangeTurn("before")}
          />
          <Center>
            <Turn>{data?.draw_no} 회</Turn>
            <LottoCard item={data!} />
          </Center>
          <FontAwesomeIcon
            icon={faArrowRight}
            size="2x"
            onClick={() => handleChangeTurn("next")}
          />
        </Wrapper>
      )}
    </Container>
  );
}

export default About;

const Turn = styled.span`
  font-size: 32px;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  svg {
    cursor: pointer;
  }
`;
