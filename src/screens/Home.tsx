import styled from "styled-components";
import { conteffi } from "../App";
import PageTitle from "../components/PageTitle";

const Container = styled.div`
  display: flex;
  height: 80vh;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button``;

function Home() {
  const handleClick = () => {
    conteffi.addConfetti({
      emojis: ["🍔", "🍕", "🍺"],
      emojiSize: 100,
      confettiNumber: 30,
    });
  };

  return (
    <Container>
      <PageTitle title="Home"></PageTitle>
      <Button onClick={handleClick}>CLICK</Button>
    </Container>
  );
}

export default Home;
