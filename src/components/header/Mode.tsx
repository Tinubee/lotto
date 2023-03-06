import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../../atoms";

const ModeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  place-items: center;
  div:hover {
    cursor: pointer;
    color: "${(props) => props.theme.textColor}";
    transition: background-color 0.5s, color 0.5s;
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.bgColor};
  transition: background-color 0.5s, color 0.5s;
  padding: 25px;
  color: ${(props) => props.theme.icontextColor};
  :hover {
    background-color: ${(props) => props.theme.iconbgColor};
    color: ${(props) => props.theme.textColor};
  }
`;

function Mode() {
  const [darkAtom, setDarkAtom] = useRecoilState(isDarkAtom);
  const toggleMode = () => {
    setDarkAtom((prev) => !prev);
    localStorage.setItem("mode", String(!darkAtom));
  };

  return (
    <ModeContainer>
      {!darkAtom ? (
        <Icon onClick={toggleMode}>
          <FontAwesomeIcon icon={faSun} />
        </Icon>
      ) : (
        <Icon onClick={toggleMode}>
          <FontAwesomeIcon icon={faMoon} />
        </Icon>
      )}
    </ModeContainer>
  );
}

export default Mode;
