import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

interface Ball {
  x: number;
  y: number;
  duration: number;
}

const getRandomPosition = (max: number) => Math.floor(Math.random() * max);

const useInterval = (callback: () => void, delay: number) => {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
};

function Select() {
  const [balls, setBalls] = useState<Ball[]>([]);

  useEffect(() => {
    const newBalls: Ball[] = Array.from({ length: 45 }, () => ({
      x: getRandomPosition(500),
      y: getRandomPosition(500),
      duration: Math.random() + 1,
    }));

    setBalls(newBalls);
  }, []);

  const animateBall = (index: number) => {
    const newBalls = [...balls];
    const ball = balls[index];
    const ballSize = 60;
    const radius = 220; // radius of the circle
    const center = { x: 250, y: 250 }; // center of the circle

    // generate a random point within the circle
    let newX, newY, distance;
    do {
      newX = getRandomPosition(500);
      newY = getRandomPosition(500);
      distance = Math.sqrt((newX - center.x) ** 2 + (newY - center.y) ** 2);
    } while (distance > radius);

    ball.x = newX - ballSize / 2;
    ball.y = newY - ballSize / 2;
    ball.duration = Math.random() + 1;

    newBalls[index] = ball;
    setBalls(newBalls);
  };

  useInterval(() => {
    balls.forEach((_, index) => animateBall(index));
  }, 100);

  const handleBallClick = (event: any) => {
    console.log(event.target);
  };

  return (
    <Wrapper>
      <Container>
        {balls.map((number, index) => {
          return (
            <Item
              key={index + 1}
              style={{ left: `${number.x}px`, top: `${number.y}px` }}
              // animate={{ x: number.x, y: number.y }}
              transition={{ duration: number.duration }}
              number={index + 1}
              onClick={handleBallClick}
            >
              {index + 1}
            </Item>
          );
        })}
      </Container>
      <Container></Container>
    </Wrapper>
  );
}
export default Select;

const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
`;

const Container = styled(motion.div)`
  width: 500px;
  height: 500px;
  background: ${(props) => props.theme.bgColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 50%;
  position: relative;
`;

const Item = styled(motion.div)<{ number: number }>`
  width: 60px;
  height: 60px;
  cursor: pointer;
  background-color: ${(props) =>
    props.number > 40
      ? props.theme.fourtyColor
      : props.number > 30
      ? props.theme.thirtyColor
      : props.number > 20
      ? props.theme.twentyColor
      : props.number > 10
      ? props.theme.tenColor
      : props.theme.oneColor};
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fbfbfb;
`;
